"use client";

import axios from "axios";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { BsPhone, BsPerson } from "react-icons/bs";
import axiosInstance from "../../components/services/AxiosInstance";

export default function UserAccountCreation() {
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
        await axiosInstance.post("/v1/auth/send-otp", { mobileNumber: formData.mobile });
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
    <div className="container py-4">
      {/* Stepper */}
      <div className="d-flex justify-content-between mb-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div className="text-center flex-fill" key={step.number}>
              <div className="d-flex align-items-center justify-content-center">
              <div className="rounded-circle border d-flex align-items-center justify-content-center me-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: isCompleted ? "#28a745" : isActive ? "#0d6efd" : "transparent",
                    color: isCompleted || isActive ? "#fff" : "#6c757d",
                    borderColor: isCompleted || isActive ? "transparent" : "#ced4da"
                  }}>
                  {isCompleted ? <CheckCircle size={20} /> : <Icon size={20} />}
                </div>
                {index < steps.length - 1 && <div className="flex-grow-1 border-top mx-2"></div>}
              </div>
              <small className={isCompleted ? "text-success" : isActive ? "text-primary" : "text-muted"}>
                {step.title}
              </small>
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Step {currentStep}: {steps[currentStep - 1].title}</h5>

          {currentStep === 1 && (
            <>
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter 10-digit mobile"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value.replace(/[^0-9]/g, "") })
                    }
                    disabled={mobileVerified}
                  />
                  <button
                    className="btn btn-warning"
                    disabled={formData.mobile.length !== 10 || showOtpInput || mobileVerified}
                    onClick={handleGetOtp}
                  >
                    Get OTP
                  </button>
                </div>
              </div>

              {showOtpInput && !mobileVerified && (
                <div className="mb-3">
                  <label className="form-label">Enter OTP</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      maxLength={6}
                      value={formData.otp}
                      placeholder="Enter 6-digit OTP"
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    />
                    <button
                      className="btn btn-warning"
                      onClick={handleVerifyOtp}
                      disabled={formData.otp.length !== 6}
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
              )}

              {mobileVerified && (
                <div className="text-success d-flex align-items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Mobile number verified successfully!</span>
                </div>
              )}
            </>
          )}

          {currentStep === 2 && (
            <>
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "MPIN", name: "mpin", type: "password", maxLength: 6 },
                { label: "Full Address", name: "fullAddress", type: "textarea" },
                { label: "City", name: "city", type: "text" },
                { label: "State", name: "state", type: "text" },
                { label: "Pincode", name: "pinCode", type: "text", maxLength: 6 },
              ].map((field) => (
                <div className="mb-3" key={field.name}>
                  <label className="form-label">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      className="form-control"
                      rows="2"
                      value={formData[field.name]}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      placeholder={field.label}
                    />
                  ) : (
                    <input
                      type={field.type}
                      className="form-control"
                      value={formData[field.name]}
                      placeholder={field.label}
                      maxLength={field.maxLength || undefined}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    />
                  )}
                </div>
              ))}

              <button
                className="btn btn-success"
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

      {/* Success Modal */}
      {showSuccessPopup && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Registration Successful!</h5>
                <button type="button" className="btn-close" onClick={() => setShowSuccessPopup(false)}></button>
              </div>
              <div className="modal-body text-center">
                <div className="mb-3">
                  <CheckCircle size={32} className="text-success" />
                </div>
                <p>Your account has been registered successfully. You can now login and start using the services.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-warning" onClick={() => setShowSuccessPopup(false)}>
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