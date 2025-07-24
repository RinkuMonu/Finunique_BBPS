import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQDatacardPrepaid from "./FAQDatacardPrepaid";
import LoginModal from "../../Login/LoginModal";

const DatacardPrepaidRecharge = ({
  selectedCategory,
  onProceed,
  selectedOperator,
  setSelectedOperator,
  accountNumber,
  setAccountNumber,
  inputError,
  setInputError,
  operators = [] // Default to empty array to prevent undefined errors
}) => {
  const [formData, setFormData] = useState({
    operator: "",
    datacardNumber: "",
  });
  const [currentOperator, setCurrentOperator] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginCallback, setLoginCallback] = useState(null);

  // Enhanced debugging logs
  useEffect(() => {
  console.log("Operators received:", operators);
  console.log("Operators type:", typeof operators);
  if (operators && operators.length > 0) {
    console.log("First operator sample:", operators[0]);
    console.log(
      "All operators with categories:",
      operators.map(op => ({ id: op.id, name: op.name, category: op.category }))
    );
  }
}, [operators]);


  // Normalize regex to make sure it starts with ^ for accurate validation
  const normalizeRegex = (pattern) => {
    if (!pattern) return null;
    return pattern.startsWith("^") ? pattern : "^" + pattern;
  };

  // Format hints for common regex patterns
  const formatHints = {
    "^[0-9]{10}$": "10-digit number (e.g., 9876543210)",
    "^[6789][0-9]{9}$": "10-digit Indian mobile number",
    "[0-9]{10}$": "10-digit number (e.g., 1234567890)"
  };

  // Filter operators with case-insensitive comparison and null checks
  const filteredOperators = operators.filter(op => 
    op && 
    op.category && 
    op.category.toString().trim().toLowerCase() === "datacard prepaid"
  );

  console.log("Filtered operators:", filteredOperators);

  useEffect(() => {
    if (selectedOperator) {
      const operator = operators.find(op => 
        op && String(op.id) === String(selectedOperator)
      );
      console.log("Setting current operator:", operator);
      setCurrentOperator(operator);
    } else {
      setCurrentOperator(null);
    }
  }, [selectedOperator, operators]);

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    console.log("Operator changed to:", value);
    setFormData(prev => ({ ...prev, operator: value, datacardNumber: "" }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
  };

  const handleDatacardChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, datacardNumber: value }));
    setAccountNumber(value);

    if (!currentOperator) return;

    const pattern = normalizeRegex(currentOperator.regex);
    if (pattern) {
      try {
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          setInputError(
            `Please enter a valid ${currentOperator.displayname || "Datacard Number"}`
          );
        } else {
          setInputError("");
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValidating(true);

    const token = localStorage.getItem("token");
    if (!token) {
      setLoginCallback(() => () => validateAndProceed());
      setShowLoginModal(true);
      setIsValidating(false);
      return;
    }

    validateAndProceed();
  };

  const validateAndProceed = () => {
    if (!formData.operator) {
      setInputError("Please select a datacard provider");
      setIsValidating(false);
      return;
    }

    if (!formData.datacardNumber) {
      setInputError(
        `Please enter your ${currentOperator?.displayname || "datacard number"}`
      );
      setIsValidating(false);
      return;
    }

    const pattern = normalizeRegex(currentOperator?.regex);
    if (pattern) {
      try {
        const regex = new RegExp(pattern);
        if (!regex.test(formData.datacardNumber)) {
          setInputError(
            `Please enter a valid ${currentOperator.displayname || "datacard number"}`
          );
          setIsValidating(false);
          return;
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator?.regex);
        setInputError("Invalid validation pattern. Please contact support.");
        setIsValidating(false);
        return;
      }
    }

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
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Datacard Prepaid Recharge
            </h2>
            <h3>Recharge Datacard Instantly with ABDKS</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/datacard.svg"
                alt="Datacard"
                height="300"
                className="item-center landlineSideImg"
                loading="lazy"
              />
            </div>
          </Col>

          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3 className="mb-4" style={{ color: "#001e50", fontWeight: "bold" }}>
                Online Datacard Recharge
              </h3>
              
              {filteredOperators.length === 0 && (
                <div className="alert alert-warning">
                  No datacard prepaid operators available. Please check back later.
                </div>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    <img
                      height={25}
                      src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                      alt="BBPS"
                      loading="lazy"
                    />
                  </div>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleOperatorChange}
                    required
                    disabled={filteredOperators.length === 0}
                  >
                    <option value="">Select Operator</option>
                    {filteredOperators.map((operator) => (
                      <option key={operator.id} value={operator.id}>
                        {operator.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {formData.operator && currentOperator && (
                  <Form.Group className="mb-3" controlId="datacardNumber">
                    <Form.Label>
                      {currentOperator.displayname || "Datacard Number"}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={
                        currentOperator.displayname
                          ? `Enter ${currentOperator.displayname}`
                          : "Enter Datacard Number"
                      }
                      value={formData.datacardNumber}
                      onChange={handleDatacardChange}
                      required
                      isInvalid={!!inputError}
                    />
                    {currentOperator.regex && (
                      <Form.Text className="text-muted">
                        {formatHints[normalizeRegex(currentOperator.regex)] || 
                         `Format: ${currentOperator.regex}`}
                      </Form.Text>
                    )}
                    <Form.Control.Feedback type="invalid">
                      {inputError}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#001e50", color: "white" }}
                  disabled={
                    !formData.operator || 
                    !formData.datacardNumber || 
                    !!inputError || 
                    isValidating
                  }
                >
                  {isValidating ? "Validating..." : "Confirm"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>

      <FAQDatacardPrepaid />
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default DatacardPrepaidRecharge;