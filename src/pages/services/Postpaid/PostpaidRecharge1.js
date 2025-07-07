import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQPostpaid from "./FAQPostpaid";
import Swal from "sweetalert2";
import Login1 from "../../Login/Login1";

const PostpaidRecharge1 = ({
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
    mobileNumber: "",
  });
  const [currentOperator, setCurrentOperator] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
 const [showLoginModal, setShowLoginModal] = useState(false);

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
    setFormData(prev => ({ ...prev, operator: value, mobileNumber: "" }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
  };

  const handleMobileChange = (e) => {
    let value = e.target.value;
    
    // Remove any non-digit characters if this is a mobile number field
    if (currentOperator?.type === "mobile") {
      value = value.replace(/\D/g, '');
    }
    
    setFormData(prev => ({ ...prev, mobileNumber: value }));
    setAccountNumber(value);

    // Real-time validation
    if (currentOperator?.regex && value) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(value)) {
          setInputError(`Please enter a valid ${currentOperator.displayname || "mobile number"}`);
        } else {
          setInputError("");
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
        setInputError("Invalid validation pattern. Please contact support.");
      }
    } else if (!value) {
      setInputError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValidating(true);

    // 1. Check if user is logged in
    const token = localStorage.getItem("token");
   if (!token) {
  setShowLoginModal(true);
  setIsValidating(false);
  return;
}

    // 2. Validate operator is selected
    if (!formData.operator) {
      setInputError("Please select an operator");
      setIsValidating(false);
      return;
    }

    // 3. Validate mobile number/account number is entered
    if (!formData.mobileNumber) {
      setInputError(`Please enter your ${currentOperator?.displayname || "mobile number"}`);
      setIsValidating(false);
      return;
    }

    // 4. Validate against regex pattern if exists
    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(formData.mobileNumber)) {
          setInputError(`Please enter a valid ${currentOperator.displayname || "mobile number"}`);
          setIsValidating(false);
          return;
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
        setInputError("Invalid validation pattern. Please contact support.");
        setIsValidating(false);
        return;
      }
    }

    // 5. Clear any previous errors if all validations pass
    setInputError("");

    // 6. Only proceed if all validations pass
    if (formData.operator && formData.mobileNumber && !inputError) {
      onProceed();
    }

    setIsValidating(false);
  };

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#F5F9FF" }}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#002244" }}>
              Postpaid Mobile Recharge
            </h2>
            <h3>Pay Your Postpaid Bills Instantly with ABDKS</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Mobile Recharge.svg" 
                alt="Postpaid Recharge"
                height="300"
                className="item-center postpaidSideImg"
              />
            </div>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3 className="mb-4" style={{ color: "#002244", fontWeight: "bold" }}>
                Pay Your Mobile Postpaid Bill
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
                  <Form.Group className="mb-3" controlId="mobileNumber">
                    <Form.Label>
                      {currentOperator?.displayname || "Mobile Number"}
                    </Form.Label>
                    <Form.Control
                      type={currentOperator?.inputType || "text"}
                      placeholder={
                        currentOperator?.displayname
                          ? `Enter ${currentOperator.displayname}`
                          : "Enter Mobile Number (e.g., 9876543210)"
                      }
                      value={formData.mobileNumber}
                      onChange={handleMobileChange}
                      maxLength={currentOperator?.maxLength || 10}
                      required
                    />
                    {currentOperator?.regex && (
                      <Form.Text className="text-muted">
                        Format: {currentOperator.regex}
                      </Form.Text>
                    )}
                    {inputError && (
                      <div className="text-danger">{inputError}</div>
                    )}
                  </Form.Group>
                )}

                {formData.operator && formData.mobileNumber && (
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: "#002244", color: "white" }}
                    disabled={!!inputError || isValidating}
                  >
                    {isValidating ? "Validating..." : "Confirm"}
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQPostpaid />
      {showLoginModal && (
  <Login1 onClose={() => setShowLoginModal(false)} />
)}
    </>
  );
};

export default PostpaidRecharge1;