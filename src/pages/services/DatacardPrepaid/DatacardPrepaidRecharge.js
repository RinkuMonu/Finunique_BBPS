import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import FAQDatacardPrepaid from "./FAQDatacardPrepaid"; // <-- Adjust to your actual FAQ component
import Swal from "sweetalert2";

const DatacardPrepaidRecharge = ({
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
    datacardNumber: "",
  });

  const [currentOperator, setCurrentOperator] = useState(null);

  const filteredOperators = operators.filter(
    (op) =>
      op.category &&
      op.category.trim().toLowerCase() === "datacard prepaid"
  );

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
    setFormData(prev => ({ ...prev, operator: value, datacardNumber: "" }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
  };

  const handleDatacardChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, datacardNumber: value }));
    setAccountNumber(value);

    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
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

  const handleSubmit = (e) => {
    e.preventDefault();

     const token = localStorage.getItem("token");
      if (!token) {
    Swal.fire({
      title: "Login Required",
      text: "Please login to continue with Datacard Prepaid bill payment.",
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
    if (formData.operator && formData.datacardNumber && !inputError) {
      onProceed();
    }
  };

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#EFF8FF" }}>
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
                    {filteredOperators.map((operator) => (
                      <option key={operator.id} value={operator.id}>
                        {operator.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {formData.operator && (
                  <Form.Group className="mb-3" controlId="datacardNumber">
                    <Form.Label>
                      {currentOperator?.displayname || "Datacard Number"}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={
                        currentOperator?.displayname
                          ? `Enter ${currentOperator.displayname}`
                          : "Enter Datacard Number"
                      }
                      value={formData.datacardNumber}
                      onChange={handleDatacardChange}
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

                {formData.operator && formData.datacardNumber && (
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

      <FAQDatacardPrepaid />
    </>
  );
};

export default DatacardPrepaidRecharge;
