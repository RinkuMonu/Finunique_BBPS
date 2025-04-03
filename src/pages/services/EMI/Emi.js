import React, { useState } from 'react';
import {  Row, Col, Form, Button } from "react-bootstrap";
import FAQLoanEMIPayments from './FAQLoanEMIPayments';

const Emi = () => {
  const [formData, setFormData] = useState({
    operator: "Asianet Digital",
    applicationId: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.applicationId.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add your form submission logic here (e.g., API call)
    }
  };

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#001e50"}}>Seamless online EMI payments.</h2>
            <h3>
              Streamline your financial commitments with effortless online loan
              EMI payments.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/EMI payments.svg"
                alt="EMI"
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
              <h3 className="mb-4" style={{color:"#001e50",fontWeight:"bold"}}>Loan EMI Payment Online</h3>
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
                    value={formData.operator}
                    onChange={handleChange}
                    id="operator"
                  >
                    <option>Asianet Digital</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="applicationId">
                  <Form.Label>Application ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Application ID"
                    value={formData.applicationId}
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
      <FAQLoanEMIPayments />
    </>
  );
};

export default Emi;
