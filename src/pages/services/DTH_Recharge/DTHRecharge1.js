/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import FAQDthRecharge from "./FAQDthRecharge";
import Swal from "sweetalert2";
import axiosInstance from "../../../components/services/AxiosInstance";
import { useUser } from "../../../context/UserContext";
import LoginModal from "../../Login/LoginModal";

const DTHRecharge1 = () => {
  const [operators, setOperators] = useState([]);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showMpinModal, setShowMpinModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mpin, setMpin] = useState("");
  const [planInfo, setPlanInfo] = useState(null);
  const [isDetectingOperator, setIsDetectingOperator] = useState(false);
  const { fetchUserfree } = useUser();

  const [formData, setFormData] = useState({
    operator: "",
    customerId: "",
    amount: "",
  });

  // Operator name mappings for better matching
  const operatorAliases = {
    'Airtel Digital TV': ['Airtel', 'Airtel DTH', 'Airtel Digital'],
    'Tata Sky': ['TataSky', 'Tata Play', 'Tata'],
    'Dish TV': ['Dish', 'DishTV'],
    'Sun Direct': ['Sun', 'SunDirect'],
  };

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const res = await axiosInstance.get("/v1/s3/recharge/opertor");
        if (res.data.status === "success") {
          const dthOps = res.data.data.filter((op) => op.category === "DTH");
          setOperators(dthOps);
        }
      } catch (err) {
        console.error("Operator API Error:", err);
      }
    };

    fetchOperators();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if ((id === "customerId" || id === "amount") && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleNumberBlur = async () => {
    if (!formData.customerId || formData.customerId.length < 5) return;

    setIsDetectingOperator(true);
    try {
      const payload = {
        number: formData.customerId,
        type: "dth",
      };

      const res = await axiosInstance.post("/v1/s3/recharge/hlrcheck", payload);

      if (res.data?.data?.status) {
        const detectedOperator = res.data.data.info.operator;
        
        // Try different matching strategies
        const matchedOp = operators.find(op => {
          // Exact match (case insensitive)
          if (op.name.toLowerCase() === detectedOperator.toLowerCase()) {
            return true;
          }
          
          // Partial match (remove spaces)
          const opNameNormalized = op.name.toLowerCase().replace(/\s+/g, '');
          const detectedNormalized = detectedOperator.toLowerCase().replace(/\s+/g, '');
          if (opNameNormalized === detectedNormalized) {
            return true;
          }
          
          // Contains match
          if (detectedOperator.toLowerCase().includes(op.name.toLowerCase())) {
            return true;
          }
          
          // Check aliases
          const aliases = operatorAliases[op.name] || [];
          return aliases.some(alias => 
            detectedOperator.toLowerCase().includes(alias.toLowerCase())
          );
        });

        if (matchedOp) {
          setFormData(prev => ({
            ...prev,
            operator: matchedOp.name,
          }));
        } else {
          // Try to find a partial match to suggest
          const suggestedOp = operators.find(op => 
            detectedOperator.toLowerCase().includes(op.name.toLowerCase().split(' ')[0])
          );
          
          if (suggestedOp) {
            setFormData(prev => ({
              ...prev,
              operator: suggestedOp.name,
            }));
            Swal.fire({
              title: "Operator Detected",
              text: `We think this might be ${suggestedOp.name}. Please confirm or select manually.`,
              icon: "info"
            });
          } else {
            Swal.fire(
              "Warning",
              `Operator detected (${detectedOperator}) but not matched with our list. Please select manually.`,
              "warning"
            );
          }
        }
      } else {
        Swal.fire("Error", res?.data?.data?.message || "Could not detect operator", "error");
      }
    } catch (err) {
      console.error("HLR API Error:", err);
      const errorMessage =
        err?.response?.data?.message || "An unexpected error occurred.";
      Swal.fire("Error", errorMessage, "error");
    } finally {
      setIsDetectingOperator(false);
    }
  };

  const handlePlanModalOpen = async () => {
    if (!formData.customerId || !formData.operator) {
      Swal.fire("Error", "Please enter Customer ID first.", "error");
      return;
    }

    try {
      const payload = {
        canumber: formData.customerId,
        op: formData.operator,
      };

      const res = await axiosInstance.post("/v1/s3/recharge/dthPlan", payload);

      if (res.data.status) {
        setPlanInfo(res.data.info[0]);
        setShowPlanModal(true);
      } else {
        Swal.fire(
          "Error",
          res.data.message || "Unable to fetch plan.",
          "error"
        );
      }
    } catch (err) {
      console.error("DTH Plan API Error:", err);
      Swal.fire("Error", "Failed to fetch plan info.", "error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginModal(true);
      return;
    }

    setShowConfirmModal(true);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setShowConfirmModal(true);
  };

  const handleRecharge = async () => {
    if (!mpin) {
      Swal.fire("Error", "Please enter MPIN.", "error");
      return;
    }

    try {
      const payload = {
        amount: formData.amount,
        canumber: formData.customerId,
        category: "dth",
        mpin: mpin,
        operator: formData.operator,
      };

      const res = await axiosInstance.post(
        "/v1/s3/recharge/dorecharge",
        payload
      );

      if (res.data.status === "success") {
        Swal.fire(
          "Success ✅",
          `${res.data.message}\nRef ID: ${res.data.refid}`,
          "success"
        );
        setShowMpinModal(false);
        setShowConfirmModal(false);
        setMpin("");
        setFormData({ operator: "", customerId: "", amount: "" });
        setPlanInfo(null);
        fetchUserfree();
      } else {
        Swal.fire("Failed ❌", res.data.message, "error");
      }
    } catch (error) {
      console.error("Recharge API Error:", error);
      Swal.fire("Error", "Something went wrong during recharge!", "error");
    }
  };

  const isFormValid =
    formData.operator && formData.customerId && formData.amount;

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              DTH Recharge Services
            </h2>
            <h3>Recharge your DTH connection instantly and securely.</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img src="/assets/DTH.svg" alt="DTH Image" height="300" />
            </div>
          </Col>

          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3
                className="mb-4"
                style={{ color: "#001e50", fontWeight: "bold" }}
              >
                DTH Recharge
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="customerId">
                  <Form.Label>Customer ID</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Enter Customer ID"
                      value={formData.customerId}
                      onChange={handleChange}
                      onBlur={handleNumberBlur}
                    />
                    {isDetectingOperator && (
                      <div className="position-absolute top-50 end-0 translate-middle-y me-2">
                        <div className="spinner-border spinner-border-sm" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option value="">Select Operator</option>
                    {operators.map((op) => (
                      <option key={op.id} value={op.name}>
                        {op.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="₹ Amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handlePlanModalOpen}
                    >
                      Check Plan
                    </button>
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#001e50" }}
                  disabled={!isFormValid}
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>

      <FAQDthRecharge />

      {/* Plan Modal */}
      <Modal
        show={showPlanModal}
        onHide={() => setShowPlanModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Customer Plan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {planInfo ? (
      <>
        {planInfo.status === 0 && planInfo.desc === "Customer Not Found" ? (
          <div className="text-center text-danger">
            <h5>Customer Not Found</h5>
            <p>Please check the customer ID and try again.</p>
          </div>
        ) : (
          <>
            <p><b>Customer Name:</b> {planInfo.customerName || 'N/A'}</p>
            <p><b>Status:</b> {planInfo.status || 'N/A'}</p>
            <p><b>Balance:</b> ₹{planInfo.Balance || 'N/A'}</p>
            <p><b>Next Recharge Date:</b> {planInfo.NextRechargeDate || 'N/A'}</p>
            <p><b>Plan Name:</b> {planInfo.planname || 'N/A'}</p>
            <p><b>Monthly Recharge:</b> ₹{planInfo.MonthlyRecharge || 'N/A'}</p>
          </>
        )}
      </>
    ) : (
      <p>No plan information available.</p>
    )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPlanModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirm Modal */}
      <Modal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Recharge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Operator: {formData.operator}</p>
          <p>Customer ID: {formData.customerId}</p>
          <p>Amount: ₹{formData.amount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowMpinModal(true);
              setShowConfirmModal(false);
            }}
          >
            Proceed to MPIN
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MPIN Modal */}
      <Modal
        show={showMpinModal}
        onHide={() => setShowMpinModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter MPIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="mpin">
            <Form.Label>MPIN</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter MPIN"
              value={mpin}
              onChange={(e) => setMpin(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMpinModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleRecharge}>
            Submit MPIN
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default DTHRecharge1;