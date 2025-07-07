import React, { useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import FAQMoneyTransfer from "./FAQMoneyTransfer";
import "./transfer.css";

const TransferToBank = () => {
  const [formData, setFormData] = useState({
    beneficiaryName: "",
    accountNumber: "",
    ifscCode: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const formattedValue = id === "ifscCode" ? value.toUpperCase() : value;
    setFormData({ ...formData, [id]: formattedValue });
    setErrors({ ...errors, [id]: "" });
  };

  // Input restrictions
  const restrictToLetters = (e) => {
    if (!/^[a-zA-Z\s]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const restrictToDigits = (e) => {
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const restrictToAmount = (e) => {
    if (!/^\d|\.$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.beneficiaryName.trim()) {
      newErrors.beneficiaryName = "Beneficiary name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.beneficiaryName.trim())) {
      newErrors.beneficiaryName =
        "Name should only contain letters and spaces.";
    }

    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = "Account number is required.";
    } else if (!/^\d{9,18}$/.test(formData.accountNumber)) {
      newErrors.accountNumber = "Account number must be 9–18 digits.";
    }

    if (!formData.ifscCode.trim()) {
      newErrors.ifscCode = "IFSC code is required.";
    } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifscCode.trim())) {
      newErrors.ifscCode = "Enter a valid IFSC code (e.g. HDFC0001234).";
    }

    if (!formData.amount.trim()) {
      newErrors.amount = "Amount is required.";
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.amount)) {
      newErrors.amount = "Enter a valid amount.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      // handle form submission
    } else {
      setSubmitted(false);
    }
  };

  return (
    <>
      <div className="p-5 mt-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#664A86" }}>
              Send Money Securely Across India – Powered by ABDKS
            </h2>
            <h3>Fast, Reliable & Compliant Domestic Money Transfers</h3>
            <div className="d-flex justify-content-center align-items-center transferBankSideImg">
              <img
                src="/assets/Transfer to Bank.svg"
                alt="Transfer to Bank"
                height="300"
                className="item-center transferBankSideImg"
              />
            </div>
          </Col>

          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              {submitted && (
                <Alert variant="success">Form submitted successfully!</Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="beneficiaryName">
                  <Form.Label>Beneficiary Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name on Bank Account"
                    value={formData.beneficiaryName}
                    onChange={handleChange}
                    onKeyPress={restrictToLetters}
                    isInvalid={!!errors.beneficiaryName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.beneficiaryName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Account Number"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    onKeyPress={restrictToDigits}
                    isInvalid={!!errors.accountNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.accountNumber}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="IFSC Code"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    isInvalid={!!errors.ifscCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.ifscCode}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="₹ Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    onKeyPress={restrictToAmount}
                    isInvalid={!!errors.amount}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.amount}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#664A86", color: "white" }}
                >
                  Go
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQMoneyTransfer />
    </>
  );
};

export default TransferToBank;
