import React, { useState } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQHousingBillPayments from './FAQHousingBillPayments';

const HousingBillPayment = () => {
  const [formData, setFormData] = useState({
    city: "",
    societyName: "",
    serviceType: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.city && formData.societyName && formData.serviceType && formData.amount.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add form submission logic here
    }
  };

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{color:"#001e50"}}>Simplify Your Housing Bill Payments</h2>
            <h3>
              Enhance your living experience by managing housing bills with ease, ensuring comfort and convenience.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="images/electricity.png"
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
              <h3 className="mb-4" style={{color:"#001e50",fontWeight:"bold"}}>Online Housing Society Electricity Bill Payment</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Select id="city" value={formData.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    <option value="City1">City 1</option>
                    <option value="City2">City 2</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="societyName">
                  <Form.Label>Society Name</Form.Label>
                  <Form.Select id="societyName" value={formData.societyName} onChange={handleChange}>
                    <option value="">Select Society</option>
                    <option value="Society1">Society 1</option>
                    <option value="Society2">Society 2</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="serviceType">
                  <Form.Label>Service Type</Form.Label>
                  <Form.Select id="serviceType" value={formData.serviceType} onChange={handleChange}>
                    <option value="">Select Service Type</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Water">Water</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="₹ Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: '#001e50', color: 'white' }}
                  disabled={!isFormValid} // Disable the button if the form is not valid
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQHousingBillPayments />
    </>
  );
};

export default HousingBillPayment;
