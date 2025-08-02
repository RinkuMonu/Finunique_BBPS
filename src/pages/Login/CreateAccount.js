import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import Swal from "sweetalert2";
import { useSearchParams } from "react-router-dom";
import PersonalAndBusinessDetailsForm from "./form-steps/PersonalAndBusinessDetailsForm";
import VerifyDocumentsForm from "./form-steps/VerifyDocumentsForm";
import BankDetailsForm from "./form-steps/BankDetailsForm";
import axiosInstance from "../../axiosinstanse/axiosInstance";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";

const steps = [
  {
    id: "contact-details",
    title: "Contact Details",
    component: PersonalAndBusinessDetailsForm,
  },
  {
    id: "verify-documents",
    title: "Verify Documents",
    component: VerifyDocumentsForm,
  },
  { id: "bank-details", title: "Bank Details", component: BankDetailsForm },
];

const MobileVerification = ({ onVerified }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  const handleSendOtp = async () => {
    if (mobile.length !== 10) return;

    setIsSendingOtp(true);
    try {
      await axiosInstance.post("/v1/auth/send-otp", { mobileNumber: mobile });
      Swal.fire({ title: "OTP Sent Successfully!", icon: "success" });
      setShowOtpInput(true);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "Failed to send OTP",
      });
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      return Swal.fire({ title: "Enter valid 6-digit OTP!", icon: "error" });
    }

    setIsVerifyingOtp(true);
    try {
      await axiosInstance.post("/v1/auth/verify-otp", {
        mobileNumber: mobile,
        otp: otp,
      });
      Swal.fire({ title: "Mobile Verified!", icon: "success" });
      onVerified(mobile);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response?.data?.message || "Invalid OTP",
      });
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  return (
    <Container className="py-5 mt-5">
      <Card
        className="rounded-4 shadow border-0"
        style={{  height: "100%", minHeight: "450px" }}
      >
        <Card.Body className="p-4 h-100 d-flex flex-column justify-content-center">
          <Row className="align-items-center h-100">
            <Col
              xs={12}
              md={6}
              className="text-center mb-4 mb-md-0 d-none d-md-block"
            >
              <img
                src="/assets/register.png"
                alt="OTP Verification Animation"
                className="img-fluid"
                style={{
                  maxHeight: "300px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Card.Title className="text-center text-md-start mb-4 fs-3">
                📱 Mobile Verification
              </Card.Title>

              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  required={true}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  className="py-2"
                />
              </Form.Group>

              {!showOtpInput ? (
                <Button
                  onClick={handleSendOtp}
                  variant="warning"
                  className="w-100 py-2 fw-semibold"
                  disabled={mobile.length !== 10 || isSendingOtp}
                >
                  {isSendingOtp && (
                    <span className="spinner-border spinner-border-sm me-2" />
                  )}
                  Send OTP
                </Button>
              ) : (
                <>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, ""))
                      }
                      placeholder="Enter 6-digit OTP"
                        required={true}
                      maxLength={6}
                      className="py-2"
                    />
                  </Form.Group>
                  <Button
                    onClick={handleVerifyOtp}
                    variant="success"
                    className="w-100 py-2 fw-semibold"
                    disabled={otp.length !== 6 || isVerifyingOtp}
                  >
                    {isVerifyingOtp && (
                      <span className="spinner-border spinner-border-sm me-2" />
                    )}
                    Verify OTP
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

const CreateAccount = () => {
  const { seo } = useUser();
  const [searchParams] = useSearchParams();
  const roleFromParams = searchParams.get("role") || "User";

  const [mobileVerified, setMobileVerified] = useState(false);
  const [verifiedMobile, setVerifiedMobile] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);
  const [registeredUserId, setRegisteredUserId] = useState(null);
  const [role, setRole] = useState(roleFromParams);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    contactDetails: {
      name: "",
      phone: "",
      email: "",
      accountType: "",
      mpin: "",
      pincode: "",
      isValid: false,
    },
    businessDetails: {
      businessName: "",
      businessType: "",
      address: "",
      ownerPhoto: null,
      shopPhotos: [],
      isValid: false,
    },
    verifyDocuments: {
      uploadedFiles: {},
      consensus: [],
      isValid: false,
    },
    bankDetails: {
      accountNumber: "",
      ifscCode: "",
      isValid: false,
    },
  });

  useEffect(() => {
    // Update the role if it changes in the URL
    const currentRole = searchParams.get("role") || "User";
    setRole(currentRole);
  }, [searchParams]);

  const updateFormData = (step, data) => {
    setFormData((prev) => ({ ...prev, [step]: { ...prev[step], ...data } }));
  };

  const handleNext = async () => {
    if (currentStep === 0) {
      const { contactDetails, businessDetails } = formData;

      if (!contactDetails.isValid || !businessDetails.isValid) {
        Swal.fire(
          "Please fill all required fields correctly before proceeding.",
          "",
          "warning"
        );
        return;
      }

      // Validate file sizes before upload
      if (
        businessDetails.ownerPhoto &&
        businessDetails.ownerPhoto.size > 2 * 1024 * 1024
      ) {
        Swal.fire("Owner photo should be less than 2MB", "", "warning");
        return;
      }

      if (
        businessDetails.shopPhotos.some((file) => file.size > 2 * 1024 * 1024)
      ) {
        Swal.fire("Shop photos should be less than 2MB each", "", "warning");
        return;
      }

      setIsSubmitting(true);
      try {
        const form = new FormData();
        form.append("name", contactDetails.name);
        form.append("email", contactDetails.email);
        form.append("mobileNumber", contactDetails.phone);
        form.append("businessName", businessDetails.businessName);
        form.append("businessType", businessDetails.businessType);
        form.append("address", businessDetails.address);
        form.append("pinCode", contactDetails.pincode);
        form.append("mpin", contactDetails.mpin);
        form.append("role", role);
        if (businessDetails.ownerPhoto) {
          form.append("ownerPhoto", businessDetails.ownerPhoto);
        }

        if (businessDetails.shopPhotos.length > 0) {
          businessDetails.shopPhotos.forEach((file) => {
            form.append("shopPhotos", file);
          });
        }
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axiosInstance.post(
          "/v1/auth/register",
          form,
          config
        );
        const userId = response.data?.newUser?._id;
        // localStorage.setItem('token', response.data.token);
        setRegisteredUserId(userId);

        Swal.fire(
          "User Registered",
          "User has been successfully registered!",
          "success"
        );
        setCurrentStep(currentStep + 1);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Registration failed";
        Swal.fire("Registration Failed", errorMessage, "error");
      } finally {
        setIsSubmitting(false);
      }
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSubmissionPopup(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  if (!mobileVerified) {
    return (
      <MobileVerification
        onVerified={(mobile) => {
          setVerifiedMobile(mobile);
          setMobileVerified(true);
          setFormData((prev) => ({
            ...prev,
            contactDetails: { ...prev.contactDetails, phone: mobile },
          }));
        }}
      />
    );
  }

  return (
    <>
      <SEO
        meta_title={seo?.meta_title}
        meta_description={seo?.meta_description}
        meta_keywords={seo?.meta_keywords}
        og_title={seo?.og_title}
        og_description={seo?.og_description}
        og_type={seo?.og_type}
        og_url={seo?.og_url}
        og_image={seo?.og_image}
        og_site_name={seo?.og_site_name}
        canonical_tag={seo?.canonical_tag}
      />
      <Container className="py-5 mt-5">
        <Card className="shadow border-0 overflow-hidden">
          <Card.Header className="bg-gradient bg-warning text-white fs-5 fw-semibold">
            {steps[currentStep].title}
          </Card.Header>

          <Card.Body>
            <Row>
              <Col md={3} className="border-end pe-3">
                <div className="d-flex flex-column gap-4">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="d-flex align-items-center gap-3"
                    >
                      <div
                        className={`d-flex align-items-center justify-content-center rounded-circle ${
                          index < currentStep
                            ? "bg-success text-white"
                            : index === currentStep
                            ? "bg-dark text-white"
                            : "bg-light text-secondary"
                        }`}
                        style={{
                          width: "28px",
                          height: "28px",
                          fontSize: "12px",
                        }}
                      >
                        {index < currentStep ? <Check size={14} /> : index + 1}
                      </div>
                      <span
                        className={`small fw-medium ${
                          index <= currentStep ? "text-dark" : "text-muted"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <iframe
                    title="Step Animation"
                    className="w-100"
                    style={{ height: "150px" }}
                    src="https://lottie.host/embed/7d592695-a3a1-4b28-9e6f-fdac6e2ee857/PyJR1ErHxJ.lottie"
                  />
                </div>
              </Col>

              <Col md={9}>
                <div className="transition-opacity">
                  <CurrentStepComponent
                    formData={formData}
                    updateFormData={updateFormData}
                    registeredUserId={registeredUserId}
                    role={role}
                  />
                </div>

                <div className="d-flex justify-content-between justify-content-md-end mt-4">
                  {currentStep > 0 && (
                    <Button
                      onClick={handleBack}
                      variant="light"
                      className="border me-2"
                      disabled={isSubmitting}
                    >
                      ← Back
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    variant="warning"
                    className="text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="spinner-border spinner-border-sm me-2" />
                    ) : null}
                    {currentStep === steps.length - 1 ? "Submit" : "Next →"}
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {showSubmissionPopup && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
            style={{ zIndex: 1050 }}
          >
            <Card className="w-100" style={{ maxWidth: "500px" }}>
              <Card.Body className="text-center p-4">
                <Card.Title className="text-success mb-3 fs-4 fw-bold">
                  🎉 Submission Successful!
                </Card.Title>
                <iframe
                  title="Success Animation"
                  src="https://lottie.host/embed/a2ddd7b3-368a-4a30-be2a-0c9eb12acf34/dIjlqZVvEe.lottie"
                  className="w-100"
                  style={{ height: "200px" }}
                />
                <Card.Text className="text-muted mt-3">
                  Your details have been submitted successfully!
                </Card.Text>
                <Button
                  variant="warning"
                  className="text-white mt-3"
                  onClick={() => (window.location.href = "/login")}
                >
                  Go to Login
                </Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </>
  );
};

export default CreateAccount;
