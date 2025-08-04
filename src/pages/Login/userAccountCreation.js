"use client";

import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { BsPhone, BsPerson } from "react-icons/bs";
import axiosInstance from "../../axiosinstanse/axiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import statesCities from "../../states-cities.json";

export default function UserAccountCreation() {
  const { seo } = useUser();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "",
    name: "",
    email: "",
    mpin: "",
    role: "User",
    fullAddress: "",
    city: "",
    state: "",
    country: "India",
    pinCode: "",
  });
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [cities, setCities] = useState([]);

  const steps = [
    { number: 1, title: "Mobile Verification", icon: BsPhone },
    { number: 2, title: "Complete Registration", icon: BsPerson },
  ];

  // Get all states from the JSON data
  const states = Object.keys(statesCities);

  // Handle state selection
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData({
      ...formData,
      state: selectedState,
      city: "", // Reset city when state changes
    });

    // Update cities based on selected state
    if (selectedState && statesCities[selectedState]) {
      setCities(statesCities[selectedState]);
    } else {
      setCities([]);
    }
  };

  // Handle city selection
  const handleCityChange = (e) => {
    setFormData({
      ...formData,
      city: e.target.value,
    });
  };

  const handleSendOtp = async () => {
    if (formData.mobile.length === 10) {
      try {
        setIsSendingOtp(true);
        await axiosInstance.post("/v1/auth/send-otp", {
          mobileNumber: formData.mobile,
        });
        setShowOtpInput(true);
        Swal.fire({ title: "OTP Sent Successfully!", icon: "success" });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message || "Failed to send OTP",
        });
      } finally {
        setIsSendingOtp(false);
      }
    }
  };

  const handleVerifyOtp = async () => {
    if (formData.otp.length === 6) {
      try {
        setIsVerifyingOtp(true);
        await axiosInstance.post("/v1/auth/verify-otp", {
          mobileNumber: formData.mobile,
          otp: formData.otp,
        });
        setMobileVerified(true);
        Swal.fire({ title: "Mobile Verified!", icon: "success" });
        setCurrentStep(2);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message || "Invalid OTP",
        });
      } finally {
        setIsVerifyingOtp(false);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        mobileNumber: formData.mobile,
        mpin: Number(formData.mpin),
        pinCode: formData.pinCode,
        address: {
          fullAddress: formData.fullAddress,
          city: formData.city,
          state: formData.state,
          country: formData.country,
        },
      };

      const response = await axiosInstance.post("/v1/auth/register", payload);

      if (response.status === 200) {
        setShowSuccessPopup(true);
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "Registration failed",
      });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isFormValid =
    formData.name &&
    validateEmail(formData.email) &&
    formData.role &&
    formData.mpin.length === 6 &&
    formData.pinCode.length === 6 &&
    formData.fullAddress &&
    formData.city &&
    formData.state;

  const handleNumericInput = (e, fieldName) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

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

      <div
        className="container max-w-4xl mx-auto p-4 user-account-creation"
        style={{ marginTop: "200px" }}
      >
        {/* Stepper Header */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div
                  key={step.number}
                  className="d-flex flex-column align-items-center flex-grow-1"
                >
                  <div className="d-flex align-items-center w-100">
                    <div
                      className={`d-flex align-items-center justify-content-center rounded-circle border-2 ${
                        isCompleted
                          ? "bg-success border-success text-white"
                          : isActive
                          ? "bg-primary border-primary text-white"
                          : "border-secondary text-secondary"
                      }`}
                      style={{ width: "40px", height: "40px" }}
                    >
                      {isCompleted ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Icon size={20} />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-grow-1 mx-2 ${
                          isCompleted ? "bg-success" : "bg-light"
                        }`}
                        style={{ height: "2px" }}
                      />
                    )}
                  </div>
                  <span
                    className={`mt-2 small fw-medium ${
                      isActive
                        ? "text-primary"
                        : isCompleted
                        ? "text-success"
                        : "text-muted"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="card">
         <div className="card-header">
            <h5 className="card-title mb-1">
              Step {currentStep}: {steps[currentStep - 1].title}
            </h5>
          </div>
          <div className="card-body">
            {currentStep === 1 && (
              <Container className="">
                <Card className=" border-0" style={{ minHeight: "250px" }}>
                  <Card.Body className="p-4 h-100 d-flex flex-column justify-content-center">
                    <Row className="align-items-center h-100">
                      <Col xs={12} md={6} className="text-center mb-4 mb-md-0 d-none d-md-block">
                        <img
                          src="../assets/register.png"
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
                            value={formData.mobile}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                mobile: e.target.value.replace(/\D/g, ""),
                              })
                            }g
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
                            disabled={formData.mobile.length !== 10 || isSendingOtp}
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
                                value={formData.otp}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    otp: e.target.value.replace(/\D/g, ""),
                                  })
                                }
                                placeholder="Enter 6-digit OTP"
                                maxLength={6}
                                className="py-2"
                              />
                            </Form.Group>
                            <Button
                              onClick={handleVerifyOtp}
                              variant="success"
                              className="w-100 py-2 fw-semibold"
                              disabled={formData.otp.length !== 6 || isVerifyingOtp}
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
            )}

            {currentStep === 2 && (
              <>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">MPIN (6 digits)</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter 6-digit MPIN"
                      value={formData.mpin}
                      onChange={(e) => handleNumericInput(e, "mpin")}
                      maxLength={6}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Pincode (6 digits)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter 6-digit pincode"
                      value={formData.pinCode}
                      onChange={(e) => handleNumericInput(e, "pinCode")}
                      maxLength={6}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Select State</label>
                    <select
                      className="form-select"
                      value={formData.state}
                      onChange={handleStateChange}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Select City</label>
                    <select
                      className="form-select"
                      value={formData.city}
                      onChange={handleCityChange}
                      disabled={!formData.state}
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Full Address</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Enter your full address"
                    value={formData.fullAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, fullAddress: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  className="btn btn-success text-white w-100 mt-3"
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowSuccessPopup(false)}
                  ></button>
                </div>
                <div className="modal-body text-center py-4">
                  <div className="d-flex justify-content-center mb-4">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <CheckCircle size={32} className="text-success" />
                    </div>
                  </div>
                  <h5 className="modal-title mb-3">Registration Successful!</h5>
                  <p className="text-muted">
                    Your account has been registered successfully. You can now
                    login and start using the services.
                  </p>
                </div>
                <div className="modal-footer border-0 justify-content-center">
                  <button
                    className="btn btn-warning text-white"
                    onClick={() => setShowSuccessPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}