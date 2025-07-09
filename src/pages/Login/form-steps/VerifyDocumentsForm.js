import { useState, useEffect } from "react";
import axiosInstance from "../../../axiosinstanse/axiosInstance";
import {
  Card,
  ListGroup,
  Form,
  Button,
  Badge,
  Alert,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";

const documents = [
  { id: "verifyPAN", label: "PAN Card", required: true },
  { id: "aadhar-verify", label: "Aadhaar Card", required: true },
];

// Validation functions
const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
const validateAadhaar = (aadhaar) => 
  /^\d{12}$/.test(aadhaar) && !/^(\d)\1{11}$/.test(aadhaar);

export default function VerifyDocumentsForm({
  formData,
  updateFormData,
  registeredUserId,
}) {
  const [activeDocument, setActiveDocument] = useState("verifyPAN");
  const [verificationData, setVerificationData] = useState({
    verifyPAN: { value: "", verified: false, loading: false, error: "" },
    "aadhar-verify": {
      value: "",
      verified: false,
      loading: false,
      error: "",
      otpSent: false,
      otp: "",
      clientId: "",
      countdown: 0,
      successMessage: ""
    },
  });

  // Handle PAN verification
  const handlePanVerify = async (docId, number) => {
    try {
      const res = await axiosInstance.post(`/kyc/${docId}`, {
        id_number: number,
        userId: registeredUserId,
      });
      console.log("PAN Verification Response:", res.data);
      return res.data;
    } catch (err) {
      console.error("PAN Verification Error:", err.response?.data || err.message);
      throw err;
    }
  };

  // Handle Aadhaar OTP sending
  const handleAadhaarSendOTP = async (aadharNumber) => {
    try {
      const response = await axiosInstance.post("/kyc/aadhar-verify", {
        aadharNumber,
      });
      console.log("OTP Send Response:", response.data);
      return {
        success: true,
        clientId: response.data.data?.data?.data?.client_id,
      };
    } catch (error) {
      console.error("OTP Send Error:", error.response?.data || error.message);
      throw error;
    }
  };

  // Handle Aadhaar verification with OTP
  const handleAadhaarVerifyWithOTP = async (aadharNumber, otp, clientId) => {
    try {
      const response = await axiosInstance.post("/kyc/submit-aadhar-otp", {
        aadharNumber,
        otp,
        client_id: clientId,
        userId: registeredUserId,
      });
      
      console.log("OTP Verification Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("OTP Verification Error:", {
        error: error.response?.data || error.message,
        status: error.response?.status
      });
      throw error;
    }
  };

  // Countdown timer for OTP expiration
  useEffect(() => {
    const timer = setInterval(() => {
      setVerificationData(prev => {
        if (prev["aadhar-verify"].countdown > 0) {
          return {
            ...prev,
            "aadhar-verify": {
              ...prev["aadhar-verify"],
              countdown: prev["aadhar-verify"].countdown - 1
            }
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerify = async (docId) => {
    const number = verificationData[docId].value.trim();

    if (!number) {
      setVerificationData(prev => ({
        ...prev,
        [docId]: { ...prev[docId], error: "Please enter a valid number" }
      }));
      return;
    }

    if (docId === "verifyPAN") {
      if (!validatePAN(number)) {
        setVerificationData(prev => ({
          ...prev,
          [docId]: { ...prev[docId], error: "Please enter a valid PAN (Format: AAAAA9999A)" }
        }));
        return;
      }
    }

    if (docId === "aadhar-verify") {
      if (!validateAadhaar(number)) {
        setVerificationData(prev => ({
          ...prev,
          [docId]: { ...prev[docId], error: "Please enter a valid 12-digit Aadhaar number" }
        }));
        return;
      }

      if (!verificationData[docId].otpSent) {
        setVerificationData(prev => ({
          ...prev,
          [docId]: { ...prev[docId], loading: true, error: "" }
        }));

        try {
          const { clientId } = await handleAadhaarSendOTP(number);
          setVerificationData(prev => ({
            ...prev,
            [docId]: {
              ...prev[docId],
              loading: false,
              otpSent: true,
              clientId,
              error: "",
              countdown: 300 // 5 minutes
            }
          }));
        } catch (error) {
          setVerificationData(prev => ({
            ...prev,
            [docId]: {
              ...prev[docId],
              loading: false,
              error: error.response?.data?.message || "Failed to send OTP. Please try again."
            }
          }));
        }
        return;
      }

      if (!verificationData[docId].verified) {
        if (!verificationData[docId].otp || verificationData[docId].otp.length !== 6) {
          setVerificationData(prev => ({
            ...prev,
            [docId]: { ...prev[docId], error: "Please enter a valid 6-digit OTP" }
          }));
          return;
        }

        setVerificationData(prev => ({
          ...prev,
          [docId]: { ...prev[docId], loading: true, error: "" }
        }));

        try {
          const result = await handleAadhaarVerifyWithOTP(
            number,
            verificationData[docId].otp,
            verificationData[docId].clientId
          );

          // Check for success in different response formats
          const isSuccess = result.success || result.data?.success || result.status === "success";
          
          if (isSuccess) {
            setVerificationData(prev => ({
              ...prev,
              [docId]: {
                ...prev[docId],
                verified: true,
                loading: false,
                error: "",
                otp: "",
                successMessage: result.message || "Aadhaar verification successful"
              }
            }));
          } else {
            throw new Error(result.message || "Verification failed");
          }
        } catch (err) {
          setVerificationData(prev => ({
            ...prev,
            [docId]: {
              ...prev[docId],
              loading: false,
              error: err.message || "Verification failed. Please try again.",
              otp: ""
            }
          }));
        }
      }
      return;
    }

    // Handle PAN verification
    setVerificationData(prev => ({
      ...prev,
      [docId]: { ...prev[docId], loading: true, error: "" }
    }));

    try {
      const result = await handlePanVerify(docId, number);
      if (result.success) {
        setVerificationData(prev => ({
          ...prev,
          [docId]: { ...prev[docId], verified: true, loading: false }
        }));
      } else {
        throw new Error(result.message || "Verification failed");
      }
    } catch (err) {
      setVerificationData(prev => ({
        ...prev,
        [docId]: {
          ...prev[docId],
          loading: false,
          error: err.response?.data?.message || "Network error"
        }
      }));
    }
  };

  const handleResendOTP = async () => {
    const docId = "aadhar-verify";
    const number = verificationData[docId].value.trim();

    setVerificationData(prev => ({
      ...prev,
      [docId]: { ...prev[docId], loading: true, error: "", otp: "" }
    }));

    try {
      const { clientId } = await handleAadhaarSendOTP(number);
      setVerificationData(prev => ({
        ...prev,
        [docId]: {
          ...prev[docId],
          loading: false,
          otpSent: true,
          clientId,
          error: "",
          countdown: 300
        }
      }));
    } catch (error) {
      setVerificationData(prev => ({
        ...prev,
        [docId]: {
          ...prev[docId],
          loading: false,
          error: error.response?.data?.message || "Failed to resend OTP. Please try again."
        }
      }));
    }
  };

  useEffect(() => {
    const allVerified = documents.every(doc => verificationData[doc.id]?.verified);
    updateFormData("verifyDocuments", {
      consensus: documents.map(doc => ({
        id: doc.id,
        verified: verificationData[doc.id]?.verified,
        value: verificationData[doc.id]?.value,
      })),
      isValid: allVerified,
    });
  }, [verificationData]);

  return (
    <Row>
      <Col md={4} className="d-none d-md-block">
        <Card className="h-100">
          <ListGroup variant="flush">
            {documents.map(doc => (
              <ListGroup.Item
                key={doc.id}
                action
                active={activeDocument === doc.id}
                onClick={() => setActiveDocument(doc.id)}
                className="d-flex justify-content-between align-items-center"
              >
                {doc.label} <span className="text-danger">*</span>
                {verificationData[doc.id]?.verified && (
                  <Badge bg="success" pill>✓</Badge>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Col>

      <Col xs={12} className="d-md-none mb-3">
        <Form.Select
          value={activeDocument}
          onChange={(e) => setActiveDocument(e.target.value)}
        >
          {documents.map(doc => (
            <option key={doc.id} value={doc.id}>
              {doc.label} {verificationData[doc.id]?.verified ? "(Verified)" : ""}
            </option>
          ))}
        </Form.Select>
      </Col>

      <Col md={8}>
        {documents.map(doc => activeDocument === doc.id && (
          <Card key={doc.id} className="mb-4">
            <Card.Body>
              <Card.Title>
                {doc.label} <span className="text-danger">*</span>
              </Card.Title>

              {verificationData[doc.id]?.verified ? (
                <Alert variant="success" className="py-2">
                  {verificationData[doc.id]?.successMessage || 
                   `${doc.label} verified successfully!`}
                </Alert>
              ) : (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter {doc.label} Number</Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="text"
                        placeholder={`Enter ${doc.label} number`}
                        value={verificationData[doc.id]?.value || ""}
                        onChange={(e) => {
                          let value = e.target.value;
                          if (doc.id === "verifyPAN") {
                            value = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
                          }
                          if (doc.id === "aadhar-verify") {
                            value = value.replace(/\D/g, '');
                          }
                          setVerificationData(prev => ({
                            ...prev,
                            [doc.id]: {
                              ...prev[doc.id],
                              value,
                              error: ""
                            }
                          }));
                        }}
                        maxLength={doc.id === "verifyPAN" ? 10 : 12}
                        isInvalid={!!verificationData[doc.id]?.error}
                        isValid={verificationData[doc.id]?.verified}
                        disabled={doc.id === "aadhar-verify" && verificationData[doc.id]?.otpSent}
                      />
                      <Button
                        variant="primary"
                        disabled={
                          verificationData[doc.id]?.loading ||
                          !verificationData[doc.id]?.value ||
                          (doc.id === "verifyPAN" && !validatePAN(verificationData[doc.id]?.value)) ||
                          (doc.id === "aadhar-verify" && !validateAadhaar(verificationData[doc.id]?.value))
                        }
                        onClick={() => handleVerify(doc.id)}
                      >
                        {verificationData[doc.id]?.loading ? (
                          <Spinner size="sm" animation="border" />
                        ) : doc.id === "aadhar-verify" && verificationData[doc.id]?.otpSent ? (
                          "Resend OTP"
                        ) : doc.id === "aadhar-verify" ? (
                          "Send OTP"
                        ) : (
                          "Verify"
                        )}
                      </Button>
                    </div>
                    <Form.Text className="text-muted">
                      {doc.id === "verifyPAN" ? "Format: AAAAA9999A" : "12-digit number"}
                    </Form.Text>
                    {verificationData[doc.id]?.error && (
                      <Alert variant="danger" className="mt-2 py-2">
                        {verificationData[doc.id].error}
                      </Alert>
                    )}
                  </Form.Group>

                  {doc.id === "aadhar-verify" && verificationData[doc.id]?.otpSent && (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label>Enter OTP</Form.Label>
                        <div className="d-flex gap-2 align-items-end">
                          <Form.Control
                            type="text"
                            placeholder="Enter 6-digit OTP"
                            value={verificationData[doc.id]?.otp || ""}
                            onChange={(e) => {
                              const otp = e.target.value.replace(/\D/g, '').slice(0, 6);
                              setVerificationData(prev => ({
                                ...prev,
                                [doc.id]: {
                                  ...prev[doc.id],
                                  otp,
                                  error: ""
                                }
                              }));
                            }}
                            maxLength={6}
                            isInvalid={!!verificationData[doc.id]?.error}
                          />
                          <Button
                            variant="success"
                            disabled={
                              verificationData[doc.id]?.loading ||
                              !verificationData[doc.id]?.otp ||
                              verificationData[doc.id]?.otp.length !== 6
                            }
                            onClick={() => handleVerify(doc.id)}
                          >
                            {verificationData[doc.id]?.loading ? (
                              <Spinner size="sm" animation="border" />
                            ) : (
                              "Verify OTP"
                            )}
                          </Button>
                        </div>
                        <Form.Text className="text-muted">
                          OTP valid for: {Math.floor(verificationData[doc.id].countdown / 60)}:
                          {(verificationData[doc.id].countdown % 60).toString().padStart(2, "0")}
                        </Form.Text>
                      </Form.Group>
                      {verificationData[doc.id].countdown <= 240 && (
                        <div className="text-end">
                          <Button
                            variant="link"
                            onClick={handleResendOTP}
                            disabled={verificationData[doc.id].loading}
                          >
                            Resend OTP
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  );
}