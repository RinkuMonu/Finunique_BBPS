"use client";

import { CheckCircle } from "lucide-react";
import { useState } from "react";
import {
  BsPhone,
  BsPerson,
  BsLock,
  BsEnvelope,
  BsBuilding,
} from "react-icons/bs";
import axiosInstance from "../../axiosinstanse/axiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function UserAccountCreation() {
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
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);

  const steps = [
    { number: 1, title: "Mobile Verification", icon: BsPhone },
    { number: 2, title: "Complete Registration", icon: BsPerson },
  ];

  const handleGetOtp = async () => {
    if (formData.mobile.length === 10) {
      try {
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
      }
    }
  };

  const handleVerifyOtp = async () => {
    if (formData.otp.length === 6) {
      try {
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
        console.log("Registered:", response.data);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "Registration failed",
      });
    }
  };

  return (
    <div
      className="container max-w-4xl mx-auto p-4 user-account-creation"
      style={{ margintop: "200px" }}
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
          {/* Step 1: Mobile Verification */}
          {currentStep === 1 && (
            <>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <div className="d-flex gap-2">
                  <input
                    id="mobile"
                    type="tel"
                    className="form-control"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    maxLength={10}
                    disabled={mobileVerified}
                  />
                  <button
                    className="btn btn-warning text-white"
                    style={{ width: "150px" }}
                    onClick={handleGetOtp}
                    disabled={
                      formData.mobile.length !== 10 ||
                      showOtpInput ||
                      mobileVerified
                    }
                  >
                    Get OTP
                  </button>
                </div>
              </div>

              {showOtpInput && !mobileVerified && (
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">
                    Enter OTP
                  </label>
                  <div className="d-flex gap-2">
                    <input
                      id="otp"
                      type="text"
                      className="form-control"
                      placeholder="Enter 6-digit OTP"
                      value={formData.otp}
                      onChange={(e) =>
                        setFormData({ ...formData, otp: e.target.value })
                      }
                      maxLength={6}
                    />
                    <button
                      className="btn btn-warning text-white"
                      style={{ width: "150px" }}
                      onClick={handleVerifyOtp}
                      disabled={formData.otp.length !== 6}
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
              )}

              {mobileVerified && (
                <div className="d-flex align-items-center gap-2 text-success">
                  <CheckCircle size={20} />
                  <span>Mobile number verified successfully!</span>
                </div>
              )}
            </>
          )}

          {/* Step 2: Registration Form */}
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
                  <label className="form-label">MPIN</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter 6-digit MPIN"
                    value={formData.mpin}
                    onChange={(e) =>
                      setFormData({ ...formData, mpin: e.target.value })
                    }
                    maxLength={6}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter pincode"
                    value={formData.pinCode}
                    onChange={(e) =>
                      setFormData({ ...formData, pinCode: e.target.value })
                    }
                    maxLength={6}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  />
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
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.role ||
                  formData.mpin.length !== 6 ||
                  !formData.fullAddress ||
                  !formData.city ||
                  !formData.state ||
                  !formData.pinCode
                }
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
  );
}
