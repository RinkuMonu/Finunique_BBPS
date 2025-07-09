import React, { useState, useEffect } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
import axiosInstance from "../../../axiosinstanse/axiosInstance";

export default function VerifyPanAadhaarForm({
  formData,
  updateFormData,
  registeredUserId
}) {
  const [panNumber, setPanNumber] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [aadhaarOTP, setAadhaarOTP] = useState("");
  const [clientId, setClientId] = useState("");
  console.log(registeredUserId,"User Register id ==>")
  const [panVerified, setPanVerified] = useState(false);
  const [aadhaarVerified, setAadhaarVerified] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState("start");

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  // PAN Verification (no OTP required)
  const verifyPan = async () => {
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber)) {
      return Swal.fire("Invalid PAN", "Enter a valid PAN number", "error");
    }

    if (!registeredUserId) {
      return Swal.fire("Missing User", "Please complete registration first", "error");
    }

    try {
      setIsLoading(true);
      await axiosInstance.post(
        "/kyc/verifyPAN",
        {
          id_number: panNumber,
          userId: registeredUserId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPanVerified(true);
      Swal.fire("Success", "PAN verified successfully", "success");
    } catch (error) {
      Swal.fire("Failed", "PAN verification failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Aadhaar - Send OTP
  const sendAadhaarOTP = async () => {
    if (!/^\d{12}$/.test(aadhaarNumber)) {
      return Swal.fire("Invalid Aadhaar", "Enter a valid 12-digit Aadhaar number", "error");
    }

    try {
      setIsLoading(true);

      const res = await axiosInstance.post(
        "/kyc/aadhar-verify",
        { aadharNumber: aadhaarNumber },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      await Swal.fire("OTP Sent", "OTP has been sent to the Aadhaar-linked mobile number", "success");
      setStep("aadhaar-otp");
    } catch (error) {
      Swal.fire("Error", "Failed to send Aadhaar OTP", "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Aadhaar - Submit OTP
  const verifyAadhaarOTP = async () => {
    try {
      setIsLoading(true);
      await axios.post(
        "/kyc/submit-aadhar-otp",
        {
          aadharNumber: aadhaarNumber,
          otp: aadhaarOTP,
          userId: registeredUserId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAadhaarVerified(true);
      setStep("start");
      Swal.fire("Success", "Aadhaar verified successfully", "success");
    } catch (error) {
      Swal.fire("Error", "Invalid OTP or verification failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Sync to parent
  useEffect(() => {
    updateFormData("panAadhaarVerification", {
      panNumber,
      aadhaarNumber,
      panVerified,
      aadhaarVerified,
      isValid: panVerified && aadhaarVerified,
    });
  }, [panNumber, aadhaarNumber, panVerified, aadhaarVerified]);

  if (!registeredUserId) {
    return (
      <div className="text-center text-gray-500 py-8">
        Registering user... please wait
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* PAN Section */}
      <div>
        <label className="block mb-1">
          PAN Number <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            disabled={panVerified}
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
            placeholder="ABCDE1234F"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {!panVerified && (
            <button
              disabled={isLoading}
              onClick={verifyPan}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verify"}
            </button>
          )}
          {panVerified && <CheckCircle className="text-green-500 w-5 h-5" />}
        </div>
      </div>

      {/* Aadhaar Section */}
      <div>
        <label className="block mb-1">
          Aadhaar Number <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            disabled={aadhaarVerified}
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            placeholder="123412341234"
            maxLength={12}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {!aadhaarVerified && (
            <button
              disabled={isLoading}
              onClick={sendAadhaarOTP}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verify"}
            </button>
          )}
          {aadhaarVerified && <CheckCircle className="text-green-500 w-5 h-5" />}
        </div>

        {step === "aadhaar-otp" && !aadhaarVerified && (
          <div className="mt-2 space-y-2">
            <label>Enter Aadhaar OTP</label>
            <input
              type="text"
              value={aadhaarOTP}
              onChange={(e) => setAadhaarOTP(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <button
              disabled={isLoading}
              onClick={verifyAadhaarOTP}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit OTP"}
            </button>
          </div>
        )} 
      </div>
    </div>
  );
}