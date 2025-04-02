/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import FAQDthRecharge from "./FAQDthRecharge";
import DTHBrowsePlans from "./DTHBrowsePlans";

const DTHRecharge = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    operator: "Airtel",
    customerId: "",
    amount: "",
  });

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const isFormValid =
    formData.operator && formData.customerId && formData.amount;

  const getCustomerIdLabel = () => {
    switch (formData.operator) {
      case "Airtel":
        return "Customer Id";
      case "DishTv":
        return "Registered Mobile Number/Viewing Card Number";
      case "SunDirectTv":
        return "Subscriber Number";
      case "TataPlay":
        return "Mobile No./Subscriber No.";
      case "d2h":
        return "Mobile No./Customer ID";
      default:
        return "Customer ID";
    }
  };

  const renderCustomerIdField = () => {
    switch (formData.operator) {
      case "Airtel":
        return (
          <Form.Control
            type="number"
            placeholder="Enter 10-digit Airtel DTH ID"
            value={formData.customerId}
            onChange={handleChange}
            id="customerId"
          />
        );
      case "DishTv":
        return (
          <Form.Control
            type="number"
            maxLength={16}
            placeholder="Registered Mobile Number/Viewing Card Number"
            value={formData.customerId}
            onChange={handleChange}
            id="customerId"
          />
        );
      case "SunDirectTv":
        return (
          <Form.Control
            type="number"
            placeholder="Subscriber Number"
            value={formData.customerId}
            onChange={handleChange}
            id="customerId"
          />
        );
      case "TataPlay":
        return (
          <Form.Control
            type="number"
            placeholder="Mobile No./Subscriber No."
            value={formData.customerId}
            onChange={handleChange}
            id="customerId"
          />
        );
      case "d2h":
        return (
          <Form.Control
            type="text"
            placeholder="Mobile No./Customer ID"
            value={formData.customerId}
            onChange={handleChange}
            id="customerId"
          />
        );
      default:
        return (
          <Form.Control
            type="text"
            placeholder="Enter Customer ID"
            value={formData.customerId}
            onChange={handleChange}
            id="customerId"
          />
        );
    }
  };

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: " #001e50" }}>
              DTH Recharge: Uninterrupted Entertainment!
            </h2>
            <h3>Elevate your entertainment with hassle-free DTH recharges.</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img src="images/dth.png" alt="DTH Image" height="300" />
            </div>
          </Col>

          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3
                className="mb-4"
                style={{ color: " #001e50", fontWeight: "bold" }}
              >
                DTH Recharge
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    {formData.operator === "Airtel" && (
                      <img
                        height={25}
                        src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                        alt="BBPS"
                      />
                    )}
                  </div>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option value="Airtel">Airtel DTH</option>
                    <option value="DishTv">Dish TV</option>
                    <option value="SunDirectTv">Sun Direct TV</option>
                    <option value="TataPlay">TATA Play</option>
                    <option value="d2h">d2h</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="customerId">
                  <Form.Label>{getCustomerIdLabel()}</Form.Label>
                  {renderCustomerIdField()}
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type="number"
                      placeholder="₹ Amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                    {(formData.operator === "Airtel" ||
                      formData.operator === "SunDirectTv") && (
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={handleModalOpen}
                      >
                        Check Plans
                      </button>
                    )}
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#001e50" }}
                  disabled={!isFormValid}
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>

      <FAQDthRecharge />

      <Modal show={showModal} onHide={handleModalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Browse Plans</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DTHBrowsePlans />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DTHRecharge;
