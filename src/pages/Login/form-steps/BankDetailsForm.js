import React, { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import Swal from "sweetalert2";
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axiosInstance from "../../../axiosinstanse/axiosInstance";

export default function BankDetailsForm({
  formData,
  updateFormData,
  registeredUserId
}) {
  const [accountNumber, setAccountNumber] = useState(formData.bankDetails.accountNumber || "");
  const [ifscCode, setIfscCode] = useState(formData.bankDetails.ifscCode || "");
  const [bankVerified, setBankVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateIfsc = (ifsc) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc);
  const validateAccountNumber = (num) => num.length >= 9 && num.length <= 18;

  const handleBankVerify = async () => {
    if (!registeredUserId) {
      return Swal.fire("Error", "User not registered", "error");
    }

    if (!validateAccountNumber(accountNumber) || !validateIfsc(ifscCode)) {
      return Swal.fire("Error", "Please enter valid account number and IFSC code", "error");
    }

    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/kyc/verifybank", {
        id_number: accountNumber,
        ifsc: ifscCode,
        userId: registeredUserId,
      });

      const accountData = response?.data?.pandata?.data?.data;
      setBankVerified(true);

      updateFormData("bankDetails", {
        accountNumber,
        ifscCode,
        isValid: true,
        bankVerified: true,
        accountData,
      });

      Swal.fire("Success", "Bank verified successfully!", "success");
    } catch (error) {
      Swal.fire("Error", "Bank verification failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Sync updates (validation only)
  useEffect(() => {
    const isValid = validateAccountNumber(accountNumber) && validateIfsc(ifscCode) && bankVerified;
    updateFormData("bankDetails", {
      accountNumber,
      ifscCode,
      isValid,
      bankVerified,
    });
  }, [accountNumber, ifscCode, bankVerified]);

  return (
    <div className="mt-4">
      <Row className="mb-3">
        {/* Account Number */}
        <Col md={6}>
          <Form.Group controlId="accountNumber">
            <Form.Label>
              Account Number <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter account number"
              disabled={bankVerified}
              isValid={bankVerified}
            />
          </Form.Group>
        </Col>

        {/* IFSC Code */}
        <Col md={6}>
          <Form.Group controlId="ifscCode">
            <Form.Label>
              IFSC Code <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
              placeholder="Enter IFSC code"
              disabled={bankVerified}
              isValid={bankVerified}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Verify Button */}
      <div className="mt-4">
        {!bankVerified ? (
          <Button
            variant="primary"
            onClick={handleBankVerify}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="d-flex align-items-center gap-2">
                <Loader2 className="animate-spin" size={16} />
                Verifying...
              </span>
            ) : (
              "Verify Bank"
            )}
          </Button>
        ) : (
          <Alert variant="success" className="d-flex align-items-center gap-2 mb-0">
            <Check size={16} />
            Bank Verified
          </Alert>
        )}
      </div>
    </div>
  );
}