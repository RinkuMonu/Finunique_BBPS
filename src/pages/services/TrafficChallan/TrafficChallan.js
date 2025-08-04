import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import FAQeChallanPayments from "./FAQeChallanPayments";
import ShimmerUI from "../../ShimmerUI/ShimmerUI";

const TrafficChallan = () => {
  const [formData, setFormData] = useState({
    operator: "Asianet Digital",
    subscriberCode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.subscriberCode.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      // Add your form submission logic here
    }
  };

  return (
    <>
     <div className="p-5 hero-section" >
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Pay Traffic Challans Online Safely and Instantly with ABDKS
            </h2>
            <h3>Clear Traffic Fines in Just a Few Clicks</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Gas Bill Solution.svg"
                alt="piped gas"
                height="300"
                className="item-center pipegasSideImg"
              />
            </div>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3
                className="mb-4"
                style={{ color: "#001e50", fontWeight: "bold" }}
              >
                Online Traffic Challan Payment
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select
                    id="operator"
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option>Asianet Digital</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="subscriberCode">
                  <Form.Label>Subscriber Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subscriber Code"
                    value={formData.subscriberCode}
                    onChange={handleChange}
                  />
                </Form.Group>

                <button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#664A86", color: "white" }}
                  disabled={!isFormValid} // Disable button if form is not valid
                >
                  Confirm
                </button>
              </Form>
              <ShimmerUI />
            </div>
          </Col>
        </Row>
      </div>
      <FAQeChallanPayments />
    </>
  );
};

export default TrafficChallan;
