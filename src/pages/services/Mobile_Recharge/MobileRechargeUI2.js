/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import FAQMobileRecharge from "./FAQMobileRecharge";
import MobileBrowsePlans1 from "./MobileBrowsePlans1";
import ConfirmRechargeModal1 from "./ConfirmRechargeModal1";
import axiosInstance from "../../../components/services/AxiosInstance";
import LoginModal from "../../Login/LoginModal";


const rechargeOperators = [
  "Airtel",
  "BSNL",
  "Jio",
  "Vi (Vodafone Idea)",
  "MTNL",
  "Tata Docomo",
  "Telenor",
  "Reliance GSM",
  "Reliance CDMA",
  "Aircel",
  "MTS",
];

const circles = [
  "Andhra Pradesh",
  "Assam",
  "Bihar & Jharkhand",
  "Chennai",
  "Delhi NCR",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Karnataka",
  "Kerala",
  "Kolkata",
  "Madhya Pradesh & Chhattisgarh",
  "Maharashtra & Goa",
  "Mumbai",
  "North East",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "UP East",
  "UP West & Uttarakhand",
  "West Bengal",
];

const MobileRechargeUI2 = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: "",
    operator: "",
    circle: "",
    amount: "",
    planDescription: "",
    validity: "",
  });

  const [errors, setErrors] = useState({
    mobileNumber: "",
    amount: "",
  });

  const validateMobileNumber = (number) => /^[6-9]\d{9}$/.test(number);
  const validateAmount = (amount) => {
    const num = Number(amount);
    return !isNaN(num) && num > 0;
  };

  const isFormValid =
    validateMobileNumber(formData.mobileNumber) &&
    validateAmount(formData.amount) &&
    formData.operator &&
    formData.circle;

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Custom logic for mobileNumber input
    if (id === "mobileNumber") {
      if (/^\d*$/.test(value)) {
        setFormData((prev) => ({ ...prev, mobileNumber: value }));

        if (value.length === 10 && !validateMobileNumber(value)) {
          setErrors((prev) => ({
            ...prev,
            mobileNumber: "Invalid mobile number format.",
          }));
        } else if (value.length !== 10) {
          setErrors((prev) => ({
            ...prev,
            mobileNumber: "Mobile number must be 10 digits.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, mobileNumber: "" }));
        }
      }
      return;
    }

    // Amount validation
    if (id === "amount") {
      setFormData((prev) => ({ ...prev, amount: value }));

      if (!validateAmount(value)) {
        setErrors((prev) => ({
          ...prev,
          amount: "Please enter a valid amount.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, amount: "" }));
      }
      return;
    }

    // For operator and circle
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePlanSelect = (plan) => {
    setFormData((prevData) => ({
      ...prevData,
      amount: plan.amount.toString(),
      planDescription: plan.planDescription,
      validity: plan.validity,
    }));
    setShowPlansModal(false);
    setErrors((prev) => ({ ...prev, amount: "" }));
  };

  const handleConfirmModalOpen = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginModal(true); // Show login modal instead of redirecting
      return;
    }

    setShowConfirmModal(true);
  };

  const handleConfirmModalClose = () => setShowConfirmModal(false);

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setShowConfirmModal(true); // Show confirm modal after successful login
  };

  const handleNumberBlur = async () => {
    if (!validateMobileNumber(formData.mobileNumber)) return;

    try {
      const res = await axiosInstance.post("/v1/s3/recharge/hlrcheck", {
        number: formData.mobileNumber,
        type: "mobile",
      });

      if (res.data?.data?.status) {
        setFormData((prev) => ({
          ...prev,
          operator: res.data.data.info.operator,
          circle: res.data.data.info.circle,
        }));
      } else {
        console.error("Failed to fetch operator and circle");
      }
    } catch (err) {
      console.error("HLR API Error:", err);
    }
  };

  return (
    <>
      <div className="py-5 px-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Instant Mobile Recharge
            </h2>
            <h3>Recharge your mobile number securely and instantly.</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Mobile Recharge.svg"
                alt="Image"
                height="300"
                className="item-center"
              />
            </div>
          </Col>

          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3
                className="mb-4"
                style={{ color: "#001e50", fontWeight: "bold" }}
              >
                Mobile Recharge
              </h3>
              <Form>
                <Form.Group className="mb-3" controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    onBlur={handleNumberBlur}
                    isInvalid={!!errors.mobileNumber}
                    maxLength={10}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobileNumber}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option value="">Select Operator</option>
                    {rechargeOperators.map((op) => (
                      <option key={op} value={op}>
                        {op}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="circle">
                  <Form.Label>Circle</Form.Label>
                  <Form.Select
                    value={formData.circle}
                    onChange={handleChange}
                  >
                    <option value="">Select Circle</option>
                    {circles.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type="number"
                      placeholder="₹ Amount"
                      value={formData.amount}
                      onChange={handleChange}
                      isInvalid={!!errors.amount}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setShowPlansModal(true)}
                    >
                      Check Plans
                    </button>
                    <Form.Control.Feedback type="invalid">
                      {errors.amount}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  type="button"
                  className="w-100"
                  style={{ backgroundColor: "#001e50", color: "white" }}
                  disabled={!isFormValid}
                  onClick={handleConfirmModalOpen}
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>

      <FAQMobileRecharge />

      <ConfirmRechargeModal1
        show={showConfirmModal}
        handleClose={handleConfirmModalClose}
        formData={formData}
      />

      <Modal
        show={showPlansModal}
        onHide={() => setShowPlansModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Browse Plans</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MobileBrowsePlans1
            operator={formData.operator}
            circle={formData.circle}
            onPlanSelect={handlePlanSelect}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPlansModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default MobileRechargeUI2;