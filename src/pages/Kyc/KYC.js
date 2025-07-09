import "./kyc.css";
import AadharCard from "./AadharCard";
import BankDetails from "./BankDetails";
import React from "react";

import PanDetails from "./PanDetails";
import axios from "axios";

import { useLocation, useParams } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
// import axios from "../../../Component/services/axios";
import { useState } from "react";
import axiosInstance from "../../axiosinstanse/axiosInstance";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";



export default function UserAccountCreation() {
  // const routeLocation = useLocation();
  // const userId = routeLocation.state?.user;
   const userId= localStorage.getItem("userid")
   console.log(userId,"Usr iddddddddd")
  const [currentStep, setCurrentStep] = useState(1);
  const [showAadharDetails, setShowAadharDetails] = useState(false);
  const [data, setData] = useState("");
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showPanDetails, setShowPanDetails] = useState(false);
  const [aadharNumber, setAadhaarNumber] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [panCard, setPanCard] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [clientId, setClientId] = useState(null);
  const [message, setMessage] = useState("");
  const [pandata, setpandata] = useState("");
  const [bankData, setBankData] = useState("");
  const [color, setColor] = useState("#872d67");
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    aadharNumber: "",
    otp: "",
    bankAccount: "",
    panCard: "",
  });

  const [otpSent, setOtpSent] = useState(false);
 const {seo} = useUser()
  const location = useNavigate();

  const steps = [
    { id: 1, label: "Aadhar Details" },
    { id: 2, label: "Bank Details" },
    { id: 3, label: "Pan Card Details" },
    { id: 4, label: "Submit" },
  ];

  // Validation for Next Button
  const isStepValid = () => {
    if (currentStep === 1)
      return aadharNumber.length === 12 && otp.length === 6;
    if (currentStep === 2) return bankAccount.length >= 9;
    if (currentStep === 3) return panCard.length === 10;
    return true;
  };

  const handleNext = () => {
    // if (isStepValid() && currentStep < steps.length) {
    // }
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
    }
  };

  const handleSendOTP = async () => {
    // if (formData.aadharNumber.length === 12) {
    //     setOtpSent(true);
    // }
    if (!aadharNumber.match(/^\d{12}$/)) {
      setMessage("Please enter 12 Digit Number of Adhar");
      return;
    }
    setMessage("");

    setSendingOtp(true);

    try {
      const response = await axiosInstance.post("kyc/aadhar-verify", { aadharNumber });
      // console.log("responseeeeee", response.data);
      // console.log("data", response.data.data.data.data.client_id);

      setClientId(response.data.data.data.data.client_id);
      setMessage("OTP Send sucessfully");
    } catch (error) {
      setMessage("Please try again for OTP ");
    }
    setSendingOtp(false);
    setOtpSent(true);
  };

  const handleVerifyOTP = async () => {
    if (!otp.match(/^\d{6}$/)) {
      setMessage("Please Enter 6 Digit OTP");
      return;
    }
    setMessage("");

    setColor("#ededed");
    setVerifyingOtp(true);

    try {
      const response = await axiosInstance.post("kyc/submit-aadhar-otp",
        { aadharNumber, otp, client_id: clientId, userId },
        {
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );
      console.log("responseeeeee", response);
      console.log("data", response.data.data.data.client_id);
      setMessage("OTP Sucessfull submited");
      setData(response.data.data.data.data);
    } catch (error) {
      setMessage("❌ OTP Verfication Failed");
    }

    setVerifyingOtp(false);
    setShowAadharDetails(true);
  };

  const handleSubmitBankDetails = async () => {
    setLoading(false);
    if (formData.bankAccount.length >= 9) {
      setShowBankDetails(true);
    }
    setLoading(true);
    try {
      const response = await axiosInstance.post("kyc/verifybank",
        { id_number: bankAccount, ifsc, userId }
      );
      setBankData(response?.data?.pandata?.data?.data);
      console.log("resonse from bank", response?.data?.pandata?.data?.data);
      Swal.fire({
        title: "! Sucessfully Verfiy your Bank",
        text: "",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "! error Verfiy your Bank",
        text: "",
        icon: "error",
      });
    }
    setLoading(false);
    setShowBankDetails(true);
  };

  const handleSubmitPANCardDetails = async () => {
    if (formData.panCard.length === 10) {
      setShowPanDetails(true);
    }
    setLoading(true);
    try {
      const response = await axiosInstance.post("kyc/verifyPAN",
        { id_number: panCard, userId }
      );
      console.log(".....pan", response);
      setpandata(response?.data?.name?.data);

      Swal.fire({
        title: "! Sucessfully Verfiy your Pan",
        text: "",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "! Error Verfiy your Pan",
        text: "",
        icon: "error",
      });
    }
    setLoading(false);
    setShowPanDetails(true);
  };

  const handleSubmiytKYC = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("kyc/verifyUser",
        {
          userId: userId,
        }
      );

      if (!response.data) {
        console.log("User not found");
        return "User not found";
      }

      console.log("User verified successfully:", response.data);
      Swal.fire({
        title: "Kyc Submited!",
        text: "",
        icon: "success",
      });
      location("/dashboard");

      return "User verified successfully";
    } catch (error) {
      console.error("Error verifying user:", error);
      return "Error verifying user";
    }
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
      <section className="hero-section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="kyc_section">
                {/* <h1>KYC</h1> */}
                {/* Stepper UI */}
                <div className="container my-4 text-center">
                  <div className="d-flex justify-content-center align-items-center mb-4">
                    {steps.map((step, index) => (
                      <React.Fragment key={step.id}>
                        <div className="d-flex flex-row align-items-center w-100 gap-3">
                          <div
                            className={`step-circle d-flex align-items-center justify-content-center ${
                              step.id < currentStep
                                ? "bg-success text-white"
                                : step.id === currentStep
                                ? "border border-primary text-primary"
                                : "bg-light text-secondary"
                            }`}
                          >
                            {step.id < currentStep ? "✔" : step.id}
                          </div>
                          <div
                            className={`${
                              step.id <= currentStep
                                ? "text-primary"
                                : "text-secondary"
                            }`}
                          >
                            {step.label}
                          </div>
                        </div>
                        {index !== steps.length - 1 && (
                          <div
                            className={`step-line ${
                              step.id < currentStep ? "bg-success" : "bg-light"
                            }`}
                          ></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Dynamic Forms Based on Steps */}
                  <div className="form-section">
                    {currentStep === 1 && (
                      <div className="container text-left">
                        <div className="aadhar_card">
                          <h3 className="mb-3">Aadhar Details</h3>

                          <div className="row">
                            {/* Aadhar Input Section */}
                            <div className="col-md-6 d-flex align-items-center gap-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter 12-digit Aadhar Number"
                                maxLength={12}
                                value={aadharNumber}
                                onChange={(e) =>
                                  setAadhaarNumber(e.target.value)
                                }
                              />
                              <button
                                className="otpBtn d-flex align-items-center justify-content-center"
                                onClick={handleSendOTP}
                                disabled={loading}
                                style={{ minWidth: "120px", height: "40px" }}
                              >
                                {sendingOtp ? (
                                  <DotLottieReact
                                    src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                                    height={30}
                                    width={30}
                                    loop
                                    autoplay
                                  />
                                ) : (
                                  "Send OTP"
                                )}
                              </button>
                            </div>
                            {/* Display Message */}
                            <p className="mt-2 d-flex align-items-start">
                              {message}
                            </p>

                            {/* OTP Input Section */}
                            {otpSent && (
                              <div className="col-md-6 d-flex align-items-center gap-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter OTP"
                                  maxLength={6}
                                  value={otp}
                                  onChange={(e) => setOtp(e.target.value)}
                                />
                                {/* <div>{message}</div> */}
                                <button
                                  className="otpBtn d-flex align-items-center justify-content-center"
                                  onClick={handleVerifyOTP}
                                  disabled={loading}
                                  style={{ minWidth: "100px", height: "40px" }}
                                >
                                  {verifyingOtp ? (
                                    <DotLottieReact
                                      src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                                      height={30}
                                      width={30}
                                      loop
                                      autoplay
                                    />
                                  ) : (
                                    "Verify"
                                  )}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Aadhar Details Display */}
                        {showAadharDetails && <AadharCard data={data} />}
                      </div>
                    )}
                    {currentStep === 2 && (
                      <div
                        className="container p-3"
                        style={{ textAlign: "left" }}
                      >
                        <div className="bank_card p-4 shadow-sm rounded">
                          <h3 className="mb-4">Bank Details</h3>

                          <div className="row">
      
                            <div className="col-md-6 mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Bank Account Number"
                                value={bankAccount}
                                onChange={(e) => setBankAccount(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter IFSC Code"
                                value={ifsc}
                                onChange={(e) => setIfsc(e.target.value)}
                              />
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                              <button
                                className="submitBtn px-4"
                                onClick={handleSubmitBankDetails}
                                disabled={loading}
                              >
                                {loading ? (
                                  <DotLottieReact
                                    src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                                    autoplay
                                    loop
                                    style={{ width: 25, height: 25 }}
                                  />
                                ) : (
                                  "Submit"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Display Bank Details if Available */}
                        {showBankDetails && <BankDetails bankData={bankData} />}
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="container" style={{ textAlign: "left" }}>
                        <div className="pan_card">
                          <h3>PAN Card Details</h3>
                          <div className="row">
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter PAN Card Number"
                                maxLength={10}
                                value={panCard}
                                onChange={(e) => setPanCard(e.target.value)}
                              />
                            </div>
                            <div className="col-md-4 mt-1">
                              <button
                                className="submitBtn"
                                onClick={handleSubmitPANCardDetails}
                                disabled={loading}
                              >
                                {loading ? (
                                  <DotLottieReact
                                    src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                                   autoplay      
                                    loop
                                    style={{ width: 30, height: 30 }}
                                  />
                                ) : (
                                  "Submit"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                        {showPanDetails && <PanDetails pandata={pandata} />}
                      </div>
                    )}
                    {currentStep === 4 && (
                      <div>
                        <h3>Submit KYC</h3>
                        <p>All details have been entered correctly.</p>
                        <button
                          className="btn btn-success"
                          onClick={handleSubmiytKYC}
                        >
                          Submit
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      className="btn btn-secondary BackBtn me-2"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-primary NextkBtn me-2"
                      
                      onClick={handleNext}
                      // disabled={!isStepValid || currentStep === steps.length}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

