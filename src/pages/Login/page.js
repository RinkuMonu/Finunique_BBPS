import React, { useState } from "react";
import { Check } from "lucide-react";
import BusinessDetailsForm from "./form-steps/business-details-form.js";
import VerifyDocumentsForm from "./form-steps/verify-documents-form.js";
import BankDetailsForm from "./form-steps/bank-details-form.js";
import ContactDetailsForm from "./form-steps/contact-details-form.js";
import "./login.css";

const steps = [
  {
    id: "contact-details",
    title: "Contact Details",
    component: ContactDetailsForm,
  },
  {
    id: "business-details",
    title: "Business Details",
    component: BusinessDetailsForm,
  },
  {
    id: "verify-documents",
    title: "Verify Documents",
    component: VerifyDocumentsForm,
  },
  { id: "bank-details", title: "Bank Details", component: BankDetailsForm },
];

export default function CreateAccount() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);

  const [formData, setFormData] = useState({
    contactDetails: {
      name: "",
      phone: "",
      email: "",
      accountType: "",
      isValid: false,
    },

    businessDetails: {
      businessName: "",
      businessType: "",
      address: "",
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
  // console.log(formData);

  const updateFormData = (step, data) => {
    setFormData((prev) => ({ ...prev, [step]: { ...prev[step], ...data } }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
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

  return (
    <>
      <div className="container py-5 signin-container">
        <div className="card shadow">
          <div
            className="card-header"
            style={{
              backgroundColor: "#FFB300",
              color: "#000",
              padding: "10px 20px",
              letterSpacing: "1px",
              fontWeight: "700",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h5 className="my-1 text-black">{steps[currentStep].title}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {/* Sidebar Stepper */}
              <div className="col-md-3 border-end stpeIndicater">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="mb-3 position-relative stepItem"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className={`rounded-circle border d-flex justify-content-center align-items-center`}
                        style={{
                          width: "24px",
                          height: "24px",
                          backgroundColor:
                            index < currentStep ? "#28a745" : "#fff",
                          color: index < currentStep ? "#fff" : "#6c757d",
                          fontSize: "12px",
                        }}
                      >
                        {index < currentStep ? (
                          <Check size={12} />
                        ) : index === currentStep ? (
                          <div
                            className="rounded-circle bg-secondary"
                            style={{ width: 8, height: 8 }}
                          ></div>
                        ) : (
                          ""
                        )}
                      </div>
                      <span
                        className={`small fw-medium ${
                          index <= currentStep ? "text-dark" : "text-muted"
                        }`}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {step.title}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Optional: Animation section */}
                <div className="mt-4 text-center animationImage">
                  <iframe
                    title="Step Animation"
                    className="w-100"
                    style={{ height: 150 }}
                    src="https://lottie.host/embed/7d592695-a3a1-4b28-9e6f-fdac6e2ee857/PyJR1ErHxJ.lottie"
                  />
                </div>
              </div>

              {/* Step Form Content */}
              <div className="col-md-9">
                <CurrentStepComponent
                  formData={formData}
                  updateFormData={updateFormData}
                />

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-end mt-4">
                  {currentStep > 0 && (
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  )}
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#FFB300",
                      color: "#000",
                      padding: "10px 20px",
                      letterSpacing: "1px",
                      fontWeight: "700",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      transition: "background-color 0.3s, transform 0.2s",
                    }}
                    onClick={handleNext}
                  >
                    {currentStep === steps.length - 1 ? "Submit" : "Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Popup */}
        {showSubmissionPopup && (
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
            <div
              className="bg-white p-4 rounded shadow text-center"
              style={{ maxWidth: 500 }}
            >
              <h5 className="text-success mb-3">Submission Successful 🎉</h5>
              <iframe
                title="Success Animation"
                src="https://lottie.host/embed/a2ddd7b3-368a-4a30-be2a-0c9eb12acf34/dIjlqZVvEe.lottie"
                className="w-100"
                style={{ height: 180 }}
              />
              <p className="text-muted mt-3">
                Your details have been submitted successfully!
              </p>
              <button
                className="btn btn-warning mt-2"
                onClick={() => setShowSubmissionPopup(false)}
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
