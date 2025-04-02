import React, { useState } from 'react';
import {  Row, Col, Form, Button } from "react-bootstrap";
import FAQMunicipality from './FAQMunicipality';

const Municipality = () => {
  const [formData, setFormData] = useState({
    operator: "Asianet Digital",
    houseNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Check if all fields are filled
  const isFormValid = formData.operator && formData.houseNumber.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add form submission logic here (e.g., API call)
    }
  };

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#001e50"}}>Simplify Municipal Bill Payments</h2>
            <h3>Simplify urban life with convenient municipality bill payments.</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="images/municipality.png"
                alt="Image"
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
              <h3 className="mb-4" style={{color:"#001e50",fontWeight:"bold"}}>
                Online Municipal Property Tax Payment
              </h3>
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
                    {/* Add more operators here if needed */}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="houseNumber">
                  <Form.Label>House Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="House Number"
                    value={formData.houseNumber}
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
      <FAQMunicipality />
    </>
  );
};

export default Municipality;
