import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQElectricityBill from "./FAQElectricityBill";
import "./elebillpay.css";
import Swal from "sweetalert2";

const ElectricityBillPayment1 = ({ 
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
    consumerNumber: "",
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
    setFormData(prev => ({ ...prev, operator: value, consumerNumber: "" }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
    
    const operator = operators.find(op => op.id === value);
    setCurrentOperator(operator);
  };

  const handleConsumerNumberChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, consumerNumber: value }));
    setAccountNumber(value);
    
    // Validate input if operator has regex
    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(value)) {
          setInputError(`Please enter a valid ${currentOperator.displayname || "consumer number"}`);
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

  const token = localStorage.getItem("token");
  if (!token) {
    Swal.fire({
          title: "Login Required",
          text: "Please login to continue with Electricity bill payment.",
          icon: "warning",
          confirmButtonColor: "#001e50",
          confirmButtonText: "Login Now",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login"; 
          }
        });
    return;
  }

  if (formData.operator && formData.consumerNumber && !inputError) {
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
              Electricity bill payment online- BBPS- Powered, safe, and immediate
            </h2>
            <h3>
              Immediately pay electricity bills across India with the ABDKS
              reliable BBPS platform that offers real-time updates, zero
              additional fees, and multi-operator coverage.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Electricity Bill.svg"
                alt="electricity bill"
                height="300"
                className="item-center elebillpaySideImg"
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
                Electricity Bill Payment
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
                  <Form.Group className="mb-3" controlId="consumerNumber">
                    <Form.Label>
                      {currentOperator?.displayname || "Consumer Number"}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={
                        currentOperator?.displayname 
                          ? `Enter ${currentOperator.displayname}`
                          : "Enter Consumer Number"
                      }
                      value={formData.consumerNumber}
                      onChange={handleConsumerNumberChange}
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

                {formData.operator && formData.consumerNumber && (
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
      <FAQElectricityBill />
    </>
  );
};

export default ElectricityBillPayment1;