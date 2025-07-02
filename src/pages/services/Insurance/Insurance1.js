import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQInsurancePayment from "./FAQInsurancePayment";
import "./Insurancee.css";

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
    const value = e.target.value;
    setFormData(prev => ({ ...prev, mobileNumber: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.operator && formData.policyNumber && !inputError) {
      onProceed({
        ...formData,
        additionalData: additionalFields.reduce((acc, field) => {
          acc[field.id] = formData[field.id] || '';
          return acc;
        }, {})
      });
    }
  };

  const isFormValid = () => {
    return formData.operator && 
           formData.policyNumber && 
           (!currentOperator?.ad1_name || formData.dateofBirth) &&
           formData.mobileNumber &&
           !inputError;
  };

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#EFF8FF" }}>
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
                        type="text"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleMobileNumberChange}
                        pattern="[0-9]{10}"
                        required
                      />
                      <Form.Text className="text-muted">
                        10 digit mobile number
                      </Form.Text>
                    </Form.Group>
                  </>
                )}

                {formData.operator && (
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: "#001e50", color: "white" }}
                    disabled={!isFormValid()}
                  >
                    Confirm
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQInsurancePayment />
    </>
  );
};

export default Insurance1;