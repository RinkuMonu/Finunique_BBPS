import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQWaterBillPayment from "./FAQWaterBillPayment";

const Water1 = ({ 
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
    rrNumber: "",
  });
  const [currentOperator, setCurrentOperator] = useState(null);

  // Set default operator if only one exists
  useEffect(() => {
    if (operators.length === 1 && !selectedOperator) {
      setSelectedOperator(operators[0].id);
      setFormData(prev => ({ ...prev, operator: operators[0].id }));
      setCurrentOperator(operators[0]);
    } else if (selectedOperator) {
      const operator = operators.find(op => op.id === selectedOperator);
      setCurrentOperator(operator);
    }
  }, [operators, selectedOperator, setSelectedOperator]);

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, operator: value, rrNumber: "" }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
    
    const operator = operators.find(op => op.id === value);
    setCurrentOperator(operator);
  };

  const handleRrNumberChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, rrNumber: value }));
    setAccountNumber(value);
    
    // Validate input if operator has regex
    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(value)) {
          setInputError(`Please enter a valid ${currentOperator.displayname || "RR number"}`);
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
    if (formData.operator && formData.rrNumber && !inputError) {
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
              Pay your water bills online - safe, fast and discomfort free
            </h2>
            <h3>Simplified Water Bill Payments Across India</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Water Bill.svg"
                alt="water bill"
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
              <h3
                className="mb-4"
                style={{ color: "#001e50", fontWeight: "bold" }}
              >
                Online Water Bill Payment
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
                  <Form.Group className="mb-3" controlId="rrNumber">
                    <Form.Label>
                      {currentOperator?.displayname || "RR Number"}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={
                        currentOperator?.displayname 
                          ? `Enter ${currentOperator.displayname}`
                          : "Enter RR Number"
                      }
                      value={formData.rrNumber}
                      onChange={handleRrNumberChange}
                    />
                    {currentOperator?.regex && (
                      <Form.Text className="text-muted">
                        Required format: {currentOperator.regex}
                      </Form.Text>
                    )}
                    {inputError && (
                      <div className="text-danger">{inputError}</div>
                    )}
                  </Form.Group>
                )}

                {formData.operator && formData.rrNumber && (
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
      <FAQWaterBillPayment />
    </>
  );
};

export default Water1;