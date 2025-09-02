import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQElectricityBill from "./FAQElectricityBill";
import "./elebillpay.css";
import LoginModal from "../../Login/LoginModal";

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
  const [isValidating, setIsValidating] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginCallback, setLoginCallback] = useState(null);

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

  const validateInput = (value, regexPattern, fieldName) => {
    if (!value) return { isValid: false, error: `Please enter your ${fieldName}` };
    if (!regexPattern) return { isValid: true, error: "" };
    
    try {
      const regex = new RegExp(regexPattern);
      const isValid = regex.test(value);
      return {
        isValid,
        error: isValid ? "" : `Please enter a valid ${fieldName} (Format: ${regexPattern})`
      };
    } catch (err) {
      console.error("Invalid regex pattern:", regexPattern);
      return {
        isValid: false,
        error: "Invalid validation pattern. Please contact support."
      };
    }
  };

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, operator: value, consumerNumber: "" }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
    setHasTyped(false);
    
    const operator = operators.find(op => op.id === value);
    setCurrentOperator(operator);
  };

  const handleConsumerNumberChange = (e) => {
    let value = e.target.value;
    setHasTyped(true);
    
    if (currentOperator?.inputType === "number") {
      value = value.replace(/\D/g, '');
    }
    
    setFormData(prev => ({ ...prev, consumerNumber: value }));
    setAccountNumber(value);
    
    const validation = validateInput(
      value,
      currentOperator?.regex,
      currentOperator?.displayname || "consumer number"
    );
    setInputError(validation.error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValidating(true);

    // 1. Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      // Store the callback function to proceed after login
      setLoginCallback(() => () => {
        validateAndProceed();
      });
      setShowLoginModal(true);
      setIsValidating(false);
      return;
    }

    // If user is logged in, proceed with validation
    validateAndProceed();
  };

  const validateAndProceed = () => {
    // 2. Validate operator is selected
    if (!formData.operator) {
      setInputError("Please select an electricity provider");
      setIsValidating(false);
      return;
    }

    // 3. Validate consumer number
    const validation = validateInput(
      formData.consumerNumber,
      currentOperator?.regex,
      currentOperator?.displayname || "consumer number"
    );
    if (!validation.isValid) {
      setInputError(validation.error);
      setIsValidating(false);
      return;
    }

    // All validations passed
    setInputError("");
    onProceed();
    setIsValidating(false);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    if (loginCallback) {
      loginCallback();
    }
  };

  return (
    <>
     <div className="p-5 hero-section" >
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Electricity bill payment online- BBPS- Powered, safe, and immediate
            </h2>
            <h3>
              Immediately pay electricity bills across India with the Finunique
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
                    required
                    isInvalid={!formData.operator && formData.consumerNumber}
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
                      type={currentOperator?.inputType || "text"}
                      placeholder={
                        currentOperator?.displayname 
                          ? `Enter ${currentOperator.displayname} (Format: ${currentOperator.regex})`
                          : "Enter Consumer Number"
                      }
                      value={formData.consumerNumber}
                      onChange={handleConsumerNumberChange}
                      maxLength={currentOperator?.maxLength || 16}
                      required
                      isInvalid={!!inputError}
                    />
                    {/* {currentOperator?.regex && (
                      <Form.Text className="text-muted">
                        Required format: {currentOperator.regex}
                      </Form.Text>
                    )} */}
                    <Form.Control.Feedback type="invalid">
                      {inputError}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                {(hasTyped || formData.consumerNumber) && (
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-3"
                    style={{ backgroundColor: "#001e50", color: "white" }}
                    disabled={!formData.operator || !!inputError || isValidating}
                  >
                    {isValidating ? "Validating..." : "Confirm"}
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQElectricityBill />
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default ElectricityBillPayment1;