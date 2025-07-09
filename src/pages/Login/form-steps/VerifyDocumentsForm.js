import { useState, useEffect } from "react";
import axiosInstance from "../../../axiosinstanse/axiosInstance";
import { Card, ListGroup, Form, Button, Badge, Alert, Row, Col } from 'react-bootstrap';

const documents = [
  { id: "verifyPAN", label: "PAN Card", required: true },
  { id: "aadhar-verify", label: "Aadhaar Card", required: true },
];

export default function VerifyDocumentsForm({ formData, updateFormData, registeredUserId }) {
  const [activeDocument, setActiveDocument] = useState("verifyPAN");
  const [verificationData, setVerificationData] = useState({
    "verifyPAN": { value: "", verified: false, loading: false, error: "" },
    "aadhar-verify": { value: "", verified: false, loading: false, error: "", otpSent: false, otp: "", clientId: "" },
  });

  // Handle PAN verification
  const handlePanVerify = async (docId, number) => {
    try {
      const res = await axiosInstance.post(`/kyc/${docId}`, {
        id_number: number,
        userId: registeredUserId
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  // Handle Aadhaar OTP sending
  const handleAadhaarSendOTP = async (aadharNumber) => {
    try {
      const response = await axiosInstance.post("/kyc/aadhar-verify", { aadharNumber });
      return {
        success: true,
        clientId: response.data.data.data.data.client_id
      };
    } catch (error) {
      throw error;
    }
  };

  // Handle Aadhaar verification with OTP
  const handleAadhaarVerifyWithOTP = async (docId, aadharNumber, otp, clientId) => {
    try {
      const response = await axiosInstance.post("/kyc/submit-aadhar-otp", {
        aadharNumber,
        otp,
        client_id: clientId,
        userId: registeredUserId
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleVerify = async (docId) => {
    const number = verificationData[docId].value.trim();
    
    if (!number) {
      setVerificationData((prev) => ({
        ...prev,
        [docId]: { ...prev[docId], error: "Please enter a valid number" },
      }));
      return;
    }

    // Special handling for Aadhaar (OTP flow)
    if (docId === "aadhar-verify") {
      if (!number.match(/^\d{12}$/)) {
        setVerificationData((prev) => ({
          ...prev,
          [docId]: { ...prev[docId], error: "Please enter 12 Digit Aadhaar Number" },
        }));
        return;
      }

      // If OTP not sent yet, send OTP
      if (!verificationData[docId].otpSent) {
        setVerificationData((prev) => ({
          ...prev,
          [docId]: { ...prev[docId], loading: true, error: "" },
        }));

        try {
          const { clientId } = await handleAadhaarSendOTP(number);
          setVerificationData((prev) => ({
            ...prev,
            [docId]: {
              ...prev[docId],
              loading: false,
              otpSent: true,
              clientId,
              error: ""
            },
          }));
        } catch (error) {
          setVerificationData((prev) => ({
            ...prev,
            [docId]: {
              ...prev[docId],
              loading: false,
              error: "Failed to send OTP. Please try again."
            },
          }));
        }
        return;
      }

      // If OTP is sent but not verified yet
      if (!verificationData[docId].verified) {
        if (!verificationData[docId].otp) {
          setVerificationData((prev) => ({
            ...prev,
            [docId]: { ...prev[docId], error: "Please enter OTP" },
          }));
          return;
        }

        setVerificationData((prev) => ({
          ...prev,
          [docId]: { ...prev[docId], loading: true, error: "" },
        }));

        try {
          const result = await handleAadhaarVerifyWithOTP(
            docId,
            number,
            verificationData[docId].otp,
            verificationData[docId].clientId
          );

          if (result.success) {
            setVerificationData((prev) => ({
              ...prev,
              [docId]: { ...prev[docId], verified: true, loading: false },
            }));
          } else {
            setVerificationData((prev) => ({
              ...prev,
              [docId]: {
                ...prev[docId],
                loading: false,
                error: result.message || "Verification failed",
              },
            }));
          }
        } catch (err) {
          setVerificationData((prev) => ({
            ...prev,
            [docId]: { ...prev[docId], loading: false, error: "Verification failed. Please try again." },
          }));
        }
      }
      return;
    }

    // Handle PAN verification (normal flow)
    setVerificationData((prev) => ({
      ...prev,
      [docId]: { ...prev[docId], loading: true, error: "" },
    }));

    try {
      const result = await handlePanVerify(docId, number);
      if (result.success) {
        setVerificationData((prev) => ({
          ...prev,
          [docId]: { ...prev[docId], verified: true, loading: false },
        }));
      } else {
        setVerificationData((prev) => ({
          ...prev,
          [docId]: {
            ...prev[docId],
            loading: false,
            error: result.message || "Verification failed",
          },
        }));
      }
    } catch (err) {
      setVerificationData((prev) => ({
        ...prev,
        [docId]: { ...prev[docId], loading: false, error: "Network error" },
      }));
    }
  };

  useEffect(() => {
    const allVerified = documents.every(doc => 
      verificationData[doc.id]?.verified === true
    );

    updateFormData("verifyDocuments", {
      consensus: documents.map(doc => ({
        id: doc.id,
        verified: verificationData[doc.id]?.verified,
        value: verificationData[doc.id]?.value
      })),
      isValid: allVerified
    });
  }, [verificationData]);

  return (
    <Row>
      {/* Sidebar (Desktop) */}
      <Col md={4} className="d-none d-md-block">
        <Card className="h-100">
          <ListGroup variant="flush">
            {documents.map((doc) => (
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

      {/* Mobile dropdown */}
      <Col xs={12} className="d-md-none mb-3">
        <Form.Select
          value={activeDocument}
          onChange={(e) => setActiveDocument(e.target.value)}
        >
          {documents.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.label} {verificationData[doc.id]?.verified ? "(Verified)" : ""}
            </option>
          ))}
        </Form.Select>
      </Col>

      {/* Active document content */}
      <Col md={8}>
        {documents.map(
          (doc) =>
            activeDocument === doc.id && (
              <Card key={doc.id} className="mb-4">
                <Card.Body>
                  <Card.Title>
                    {doc.label} <span className="text-danger">*</span>
                  </Card.Title>

                  {verificationData[doc.id]?.verified ? (
                    <Alert variant="success" className="py-2">
                      {doc.label} verified successfully!
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
                            onChange={(e) =>
                              setVerificationData((prev) => ({
                                ...prev,
                                [doc.id]: {
                                  ...prev[doc.id],
                                  value: e.target.value.toUpperCase(),
                                  error: "",
                                },
                              }))
                            }
                            disabled={doc.id === "aadhar-verify" && verificationData[doc.id]?.otpSent}
                          />
                          <Button
                            variant="primary"
                            disabled={verificationData[doc.id]?.loading}
                            onClick={() => handleVerify(doc.id)}
                          >
                            {verificationData[doc.id]?.loading
                              ? "Processing..."
                              : doc.id === "aadhar-verify" && verificationData[doc.id]?.otpSent
                              ? "Resend OTP"
                              : doc.id === "aadhar-verify"
                              ? "Send OTP"
                              : "Verify"}
                          </Button>
                        </div>
                      </Form.Group>

                      {/* Aadhaar OTP input (only shown after OTP is sent) */}
                      {doc.id === "aadhar-verify" && verificationData[doc.id]?.otpSent && (
                        <Form.Group className="mb-3">
                          <Form.Label>Enter OTP</Form.Label>
                          <div className="d-flex gap-2 align-items-end">
                            <Form.Control
                              type="text"
                              placeholder="Enter OTP"
                              value={verificationData[doc.id]?.otp || ""}
                              onChange={(e) =>
                                setVerificationData((prev) => ({
                                  ...prev,
                                  [doc.id]: {
                                    ...prev[doc.id],
                                    otp: e.target.value,
                                    error: "",
                                  },
                                }))
                              }
                            />
                            <Button
                              variant="success"
                              disabled={verificationData[doc.id]?.loading}
                              onClick={() => handleVerify(doc.id)}
                            >
                              {verificationData[doc.id]?.loading ? "Verifying..." : "Verify OTP"}
                            </Button>
                          </div>
                        </Form.Group>
                      )}

                      {verificationData[doc.id]?.error && (
                        <Alert variant="danger" className="py-2">
                          {verificationData[doc.id].error}
                        </Alert>
                      )}
                    </>
                  )}
                </Card.Body>
              </Card>
            )
        )}
      </Col>
    </Row>
  );
}