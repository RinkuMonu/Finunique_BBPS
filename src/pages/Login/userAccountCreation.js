import { CheckCircle } from "lucide-react";
import { useState } from "react";
import {
  BsPhone,
  BsEnvelope,
  BsCreditCard,
  BsBuilding,
  BsPerson,
} from "react-icons/bs";

export default function UserAccountCreation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    aadhar: "",
    pan: "",
    accountNumber: "",
    ifscCode: "",
    accountHolderName: "",
  });
  // Step 1 states
  const [mobileOtp, setMobileOtp] = useState("");
  const [showMobileOtp, setShowMobileOtp] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  // Step 2 states
  const [emailVerified, setEmailVerified] = useState(false);
  // Step 3 states
  const [aadharOtp, setAadharOtp] = useState("");
  const [showAadharOtp, setShowAadharOtp] = useState(false);
  const [aadharVerified, setAadharVerified] = useState(false);
  // Step 4 states
  const [panVerified, setPanVerified] = useState(false);
  const steps = [
    { number: 1, title: "Mobile Verification", icon: BsPhone },
    { number: 2, title: "Email Verification", icon: BsEnvelope },
    { number: 3, title: "Aadhar Verification", icon: BsCreditCard },
    { number: 4, title: "PAN Verification", icon: BsPerson },
    { number: 5, title: "Account Details", icon: BsBuilding },
  ];
  const handleGetMobileOtp = () => {
    if (formData.mobile.length === 10) {
      setShowMobileOtp(true);
      console.log("OTP sent to", formData.mobile);
    }
  };

  const handleVerifyMobileOtp = () => {
    if (mobileOtp.length === 6) {
      setMobileVerified(true);
      console.log("Mobile OTP verified");
    }
  };

  const handleVerifyEmail = () => {
    if (formData.email.includes("@")) {
      setEmailVerified(true);
      console.log("Email verified");
    }
  };

  const handleGetAadharOtp = () => {
    if (formData.aadhar.length === 12) {
      setShowAadharOtp(true);
      console.log("Aadhar OTP sent");
    }
  };

  const handleVerifyAadharOtp = () => {
    if (aadharOtp.length === 6) {
      setAadharVerified(true);
      console.log("Aadhar OTP verified");
    }
  };

  const handleVerifyPan = () => {
    if (formData.pan.length === 10) {
      setPanVerified(true);
      console.log("PAN verified");
    }
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    setShowSuccessPopup(true);
    console.log("Form submitted:", formData);
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 1:
        return mobileVerified;
      case 2:
        return emailVerified;
      case 3:
        return aadharVerified;
      case 4:
        return panVerified;
      case 5:
        return (
          formData.accountNumber &&
          formData.ifscCode &&
          formData.accountHolderName
        );
      default:
        return false;
    }
  };

  const canProceedToNext = () => {
    return isStepComplete(currentStep);
  };

  return (
    <div
      className="container max-w-4xl mx-auto p-4 user-account-creation"
      style={{
        margintop: "200px",
      }}
    >
      {/* Stepper Header */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = isStepComplete(step.number);
            const isAccessible = step.number <= currentStep;

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
                        : isAccessible
                        ? "border-secondary text-secondary"
                        : "border-light text-light"
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
          <p className="card-text text-muted small">
            {currentStep === 1 && "Verify your mobile number with OTP"}
            {currentStep === 2 && "Verify your email address"}
            {currentStep === 3 && "Verify your Aadhar number with OTP"}
            {currentStep === 4 && "Verify your PAN card details"}
            {currentStep === 5 && "Enter your bank account details"}
          </p>
        </div>
        <div className="card-body">
          {/* Step 1: Mobile Verification */}
          {currentStep === 1 && (
            <div className="mb-4">
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
                    onClick={handleGetMobileOtp}
                    disabled={
                      formData.mobile.length !== 10 ||
                      showMobileOtp ||
                      mobileVerified
                    }
                  >
                    Get OTP
                  </button>
                </div>
              </div>

              {showMobileOtp && !mobileVerified && (
                <div className="mb-3">
                  <label htmlFor="mobileOtp" className="form-label">
                    Enter OTP
                  </label>
                  <div className="d-flex gap-2">
                    <input
                      id="mobileOtp"
                      type="text"
                      className="form-control"
                      placeholder="Enter 6-digit OTP"
                      value={mobileOtp}
                      onChange={(e) => setMobileOtp(e.target.value)}
                      maxLength={6}
                    />
                    <button
                      className="btn btn-warning text-white"
                      onClick={handleVerifyMobileOtp}
                      disabled={mobileOtp.length !== 6}
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
            </div>
          )}

          {/* Step 2: Email Verification */}
          {currentStep === 2 && (
            <div className="mb-4">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="d-flex gap-2">
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={emailVerified}
                  />
                  <button
                    className="btn btn-warning text-white"
                    onClick={handleVerifyEmail}
                    disabled={!formData.email.includes("@") || emailVerified}
                  >
                    Verify Email
                  </button>
                </div>
              </div>

              {emailVerified && (
                <div className="d-flex align-items-center gap-2 text-success">
                  <CheckCircle size={20} />
                  <span>Email verified successfully!</span>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Aadhar Verification */}
          {currentStep === 3 && (
            <div className="mb-4">
              <div className="mb-3">
                <label htmlFor="aadhar" className="form-label">
                  Aadhar Number
                </label>
                <div className="d-flex gap-2">
                  <input
                    id="aadhar"
                    type="text"
                    className="form-control"
                    placeholder="Enter 12-digit Aadhar number"
                    value={formData.aadhar}
                    onChange={(e) =>
                      setFormData({ ...formData, aadhar: e.target.value })
                    }
                    maxLength={12}
                    disabled={aadharVerified}
                  />
                  <button
                    className="btn btn-warning text-white"
                    onClick={handleGetAadharOtp}
                    disabled={
                      formData.aadhar.length !== 12 ||
                      showAadharOtp ||
                      aadharVerified
                    }
                  >
                    Get OTP
                  </button>
                </div>
              </div>

              {showAadharOtp && !aadharVerified && (
                <div className="mb-3">
                  <label htmlFor="aadharOtp" className="form-label">
                    Enter OTP
                  </label>
                  <div className="d-flex gap-2">
                    <input
                      id="aadharOtp"
                      type="text"
                      className="form-control"
                      placeholder="Enter 6-digit OTP"
                      value={aadharOtp}
                      onChange={(e) => setAadharOtp(e.target.value)}
                      maxLength={6}
                    />
                    <button
                      className="btn btn-warning text-white"
                      onClick={handleVerifyAadharOtp}
                      disabled={aadharOtp.length !== 6}
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
              )}

              {aadharVerified && (
                <div className="d-flex align-items-center gap-2 text-success">
                  <CheckCircle size={20} />
                  <span>Aadhar verified successfully!</span>
                </div>
              )}
            </div>
          )}

          {/* Step 4: PAN Verification */}
          {currentStep === 4 && (
            <div className="mb-4">
              <div className="mb-3">
                <label htmlFor="pan" className="form-label">
                  PAN Number
                </label>
                <div className="d-flex gap-2">
                  <input
                    id="pan"
                    type="text"
                    className="form-control"
                    placeholder="Enter PAN number (e.g., ABCDE1234F)"
                    value={formData.pan}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pan: e.target.value.toUpperCase(),
                      })
                    }
                    maxLength={10}
                    disabled={panVerified}
                  />
                  <button
                    className="btn btn-warning text-white"
                    onClick={handleVerifyPan}
                    disabled={formData.pan.length !== 10 || panVerified}
                  >
                    Verify PAN
                  </button>
                </div>
              </div>

              {panVerified && (
                <div className="d-flex align-items-center gap-2 text-success">
                  <CheckCircle size={20} />
                  <span>PAN verified successfully!</span>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Account Details */}
          {currentStep === 5 && (
            <div className="mb-4">
              <div className="mb-3">
                <label htmlFor="accountNumber" className="form-label">
                  Account Number
                </label>
                <input
                  id="accountNumber"
                  type="text"
                  className="form-control"
                  placeholder="Enter bank account number"
                  value={formData.accountNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, accountNumber: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ifscCode" className="form-label">
                  IFSC Code
                </label>
                <input
                  id="ifscCode"
                  type="text"
                  className="form-control"
                  placeholder="Enter IFSC code (e.g., SBIN0001234)"
                  value={formData.ifscCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ifscCode: e.target.value.toUpperCase(),
                    })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="accountHolderName" className="form-label">
                  Account Holder Name
                </label>
                <input
                  id="accountHolderName"
                  type="text"
                  className="form-control"
                  placeholder="Enter account holder name"
                  value={formData.accountHolderName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      accountHolderName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-end pt-4 gap-2">
            <button
              className={`btn btn-outline-secondary ${
                currentStep === 1 ? "d-none" : ""
              }`}
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                className="btn btn-warning text-white"
                onClick={handleNextStep}
                disabled={!canProceedToNext()}
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceedToNext()}
                className="btn btn-success text-white"
              >
                Submit
              </button>
            )}
          </div>
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
                <h5 className="modal-title mb-3">
                  Form Submitted Successfully!
                </h5>
                <p className="text-muted">
                  Your verification process has been completed successfully. All
                  your details have been submitted and will be processed
                  shortly.
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
