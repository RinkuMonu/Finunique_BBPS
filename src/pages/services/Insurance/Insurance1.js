import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQInsurancePayment from "./FAQInsurancePayment";
import "./Insurancee.css";
import LoginModal from "../../Login/LoginModal";

const Insurance1 = ({ 
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
    policyNumber: "",
    dateOfBirth: "",
    mobileNumber: "",
  });
  const [currentOperator, setCurrentOperator] = useState(null);
  const [additionalFields, setAdditionalFields] = useState([]);
  const [isValidating, setIsValidating] = useState(false);
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

  // Set up additional fields based on operator
  useEffect(() => {
    if (currentOperator) {
      const fields = [];
      if (currentOperator.ad1_name) {
        fields.push({
          id: currentOperator.ad1_name,
          label: currentOperator.ad1_d_name || "Additional Field 1",
          type: currentOperator.ad1_name === 'dateofBirth' ? 'date' : 'text',
          regex: currentOperator.ad1_regex
        });
      }
      // Add more fields if needed (ad2, ad3)
      setAdditionalFields(fields);
    }
  }, [currentOperator]);

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    setFormData({
      operator: value,
      policyNumber: "",
      dateOfBirth: "",
      mobileNumber: ""
    });
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
    
    const operator = operators.find(op => op.id === value);
    setCurrentOperator(operator);
  };

  const handlePolicyNumberChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, policyNumber: value }));
    setAccountNumber(value);
    
    // Validate input if operator has regex
    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(value)) {
          setInputError(`Please enter a valid ${currentOperator.displayname || "policy number"}`);
        } else {
          setInputError("");
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
      }
    }
  };

  const handleAdditionalFieldChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, mobileNumber: value }));
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
      setInputError("Please select an insurance provider");
      setIsValidating(false);
      return;
    }

    // 3. Validate policy number
    if (!formData.policyNumber) {
      setInputError(
        `Please enter your ${currentOperator?.displayname || "policy number"}`
      );
      setIsValidating(false);
      return;
    }

    // 4. Validate against regex pattern if exists
    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(formData.policyNumber)) {
          setInputError(
            `Please enter a valid ${currentOperator.displayname || "policy number"}`
          );
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

    // 5. Validate mobile number
    if (!formData.mobileNumber || formData.mobileNumber.length !== 10) {
      setInputError("Please enter a valid 10-digit mobile number");
      setIsValidating(false);
      return;
    }

    // 6. Validate additional required fields
    for (const field of additionalFields) {
      if (!formData[field.id]) {
        setInputError(`Please enter ${field.label}`);
        setIsValidating(false);
        return;
      }
    }

    // All validations passed
    setInputError("");
    onProceed({
      ...formData,
      additionalData: additionalFields.reduce((acc, field) => {
        acc[field.id] = formData[field.id] || '';
        return acc;
      }, {})
    });
    setIsValidating(false);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    if (loginCallback) {
      loginCallback();
    }
  };

  const isFormValid = () => {
    return formData.operator && 
           formData.policyNumber && 
           formData.mobileNumber?.length === 10 &&
           additionalFields.every(field => formData[field.id]) &&
           !inputError;
  };

  return (
    <>
     <div className="p-5 hero-section" >
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Insurance Payment Solution
            </h2>
            <h3>Pay Your Insurance Premiums Securely and On Time with ABDKS</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Insurance.svg"
                alt="insurance"
                height="300"
                className="item-center InsuranceeSideImg"
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
                Insurance Premium Payment Online
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
                  <>
                    <Form.Group className="mb-3" controlId="policyNumber">
                      <Form.Label>
                        {currentOperator?.displayname || "Policy Number"}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={
                          currentOperator?.displayname 
                            ? `Enter ${currentOperator.displayname}`
                            : "Enter Policy Number"
                        }
                        value={formData.policyNumber}
                        onChange={handlePolicyNumberChange}
                        required
                      />
                      {/* {currentOperator?.regex && (
                        <Form.Text className="text-muted">
                          Required format: {currentOperator.regex}
                        </Form.Text>
                      )} */}
                      {inputError && (
                        <div className="text-danger">{inputError}</div>
                      )}
                    </Form.Group>

                    {additionalFields.map(field => (
                      <Form.Group key={field.id} className="mb-3" controlId={field.id}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type={field.type}
                          value={formData[field.id] || ''}
                          onChange={handleAdditionalFieldChange}
                          required
                        />
                      </Form.Group>
                    ))}

                    <Form.Group className="mb-3" controlId="mobileNumber">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        value={formData.mobileNumber}
                        onChange={handleMobileNumberChange}
                        maxLength={10}
                        required
                      />
                    </Form.Group>
                  </>
                )}

                {formData.operator && (
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: "#001e50", color: "white" }}
                    disabled={!isFormValid() || isValidating}
                  >
                    {isValidating ? "Validating..." : "Confirm"}
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQInsurancePayment />
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Insurance1;