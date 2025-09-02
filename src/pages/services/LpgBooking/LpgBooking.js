import React, { useState } from 'react';
import {  Row, Col, Form, Button } from "react-bootstrap";
import FAQLpgGasBooking from './FAQLpgGasBooking';

const LpgBooking = () => {
  const [formData, setFormData] = useState({
    operator: "",
    registeredContactNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.registeredContactNumber.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add submission logic here
    }
  };

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#001e50"}}>Book Your LPG Gas Cylinder Online – Fast, Secure, and Anytime with Finunique</h2>
            <h3>
            Hassle-Free LPG Refill Booking in Just a Few Clicks
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/LPG Booking.svg"
                alt="Lpg booking"
                height="300"
                className="item-center"
              />
            </div>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3 className="mb-4" style={{color:"#001e50",fontWeight:"bold"}}>Gas Booking Online</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    <img
                      height={25}
                      src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                      alt="BBPS"
                    />
                  </div>
                  <Form.Select
                    id="operator"
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option value="">Select Operator</option>
                    <option value="Bharat Gas(BPCL)">Bharat Gas (BPCL)</option>
                    <option value="Indane Gas">Indane Gas</option>
                    <option value="HP Gas">HP Gas</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="registeredContactNumber">
                  <Form.Label>Registered Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    id="registeredContactNumber"
                    placeholder="Registered Contact Number"
                    value={formData.registeredContactNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: '#001e50', color: 'white' }}
                  disabled={!isFormValid} 
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQLpgGasBooking />
    </>
  );
};

export default LpgBooking;
