import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQLandline from "./FAQLandline";
import "./landline.css";

const Landline1 = ({ 
  selectedCategory,
  onProceed,
  selectedOperator,
  setSelectedOperator,
  accountNumber,
  setAccountNumber,
  inputError,
  setInputError,
  operators
}) => {
  const [formData, setFormData] = useState({
    operator: "",
    landlineNumber: "",
  });
  const [currentOperator, setCurrentOperator] = useState(null);

  useEffect(() => {
    if (selectedOperator) {
      const operator = operators.find(op => op.id === selectedOperator);
      setCurrentOperator(operator);
    } else {
      setCurrentOperator(null);
    }
  }, [selectedOperator, operators]);

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, operator: value, landlineNumber: "" }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
  };

  const handleLandlineChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, landlineNumber: value }));
    setAccountNumber(value);
    
    // Validate input if operator has regex
    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(value)) {
          setInputError(`Please enter a valid ${currentOperator.displayname || "landline number"}`);
        } else {
          setInputError("");
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.operator && formData.landlineNumber && !inputError) {
      onProceed();
    }
  };

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Landline Bill Payment
            </h2>
            <h3>Pay Landline Bills Online Quickly & Securely with ABDKS</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Landline .svg"
                alt="Landline"
                height="300"
                className="item-center landlineSideImg"
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
                Online Landline Bill Payment
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
                    onChange={handleOperatorChange}
                  >
                    <option value="">Select Operator</option>
                    {operators.map((operator) => (
                      <option key={operator.id} value={operator.id}>
                        {operator.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {formData.operator && (
                  <Form.Group className="mb-3" controlId="landlineNumber">
                    <Form.Label>
                      {currentOperator?.displayname || "Landline Number"} (with STD Code)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={
                        currentOperator?.displayname 
                          ? `Enter ${currentOperator.displayname}`
                          : "Enter Landline Number (with STD Code)"
                      }
                      value={formData.landlineNumber}
                      onChange={handleLandlineChange}
                    />
                    {currentOperator?.regex && (
                      <Form.Text className="text-muted">
                        Format: {currentOperator.regex} (e.g., 11 digits for BSNL)
                      </Form.Text>
                    )}
                    {inputError && (
                      <div className="text-danger">{inputError}</div>
                    )}
                  </Form.Group>
                )}

                {formData.operator && formData.landlineNumber && (
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: "#001e50", color: "white" }}
                    disabled={!!inputError}
                  >
                    Confirm
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQLandline />
    </>
  );
};

export default Landline1;