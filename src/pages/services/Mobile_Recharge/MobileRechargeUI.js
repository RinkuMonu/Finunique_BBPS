/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import FAQMobileRecharge from "./FAQMobileRecharge";
import MobileBrowsePlans from "./MobileBrowsePlans";
import ConfirmRechargeModal from "./ConfirmRechargeModal";
import ViewBillModal from "./ViewBillModal";
import axios from "axios";




const MobileRechargeUI = () => {

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [showViewBillModal, setShowViewBillModal] = useState(false)
  const[billdata,  setBillData] = useState(null)
  
  const handleConfirmModalOpen = () => setShowConfirmModal(true);
  const handleConfirmModalClose = () => setShowConfirmModal(false);

  const handleViewBillModalOpen = () => setShowViewBillModal(true);
  const handleViewBillModalClose = () => setShowViewBillModal(false);

  const handlePlansModalOpen = () => setShowPlansModal(true);
  const handlePlansModalClose = () => setShowPlansModal(false);
  
  const [formData, setFormData] = useState({
    mobileNumber: "",
    operator: "",
    circle: "",
    amount: "",
    connectionType: "",
  });



  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      connectionType: e.target.value,
    }));
  };

  const isFormValid =
    formData.mobileNumber &&
    formData.operator &&
    formData.circle &&
    formData.amount &&
    formData.connectionType;

  const handlePlanSelect = (plan) => {
    setFormData((prevData) => ({
      ...prevData,
      amount: plan.amount.toString(), // Store amount as string for input compatibility
      planDescription: plan.planDescription,
      validity: plan.validity,
      talktime: plan.talktime,
    }));
    handlePlansModalClose();
  };

  const handleViewBill = async () => {
    try {
      const payload = {
        cir: "19",
        cn: "9351760762",
        op: "29",
      };
  
      const response = await axios.post("https://finpay-b2c-backend.onrender.com/api/recharge/viewbill", payload);
      setBillData(response.data.data[0]);
      setShowViewBillModal(true); 
      console.log("Bill Data:", response.data.data[0]);
    } catch (error) {
      console.error("Error fetching bill:", error.response?.data || error.message);
      setBillData(null); 
    handleViewBillModalOpen();

    }
  };

  return (
    <>
      <div className="py-5 px-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: " #001e50" }}>
              Instant Prepaid Mobile Recharge Solution
            </h2>
            <h3>
              Empower your connectivity with seamless prepaid mobile recharges,
              where convenience meets innovation.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="images/mobile_recharge.png"
                alt="Image"
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
                Mobile Recharge
              </h3>
              <Form>
                <Form.Group className="mb-3" controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                {formData.mobileNumber && (
                  <Form.Group className="mb-3">
                    <div>
                      <Form.Check
                        type="radio"
                        id="prepaid"
                        label="Prepaid"
                        value="Prepaid"
                        checked={formData.connectionType === "Prepaid"}
                        onChange={handleRadioChange}
                        inline
                      />
                      <Form.Check
                        type="radio"
                        id="postpaid"
                        label="Postpaid"
                        value="Postpaid"
                        checked={formData.connectionType === "Postpaid"}
                        onChange={handleRadioChange}
                        inline
                      />
                    </div>
                  </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    {formData.connectionType === "Postpaid" && (
                      <img
                        height={20}
                        src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                        alt="BBPS"
                        className="mt-2"
                      />
                    )}
                  </div>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option value="">Select Operator</option>
                    <option value="1">Airtel</option>
                    <option value="140">Jio</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="circle">
                  <Form.Label>Circle</Form.Label>
                  <Form.Select value={formData.circle} onChange={handleChange}>
                    <option value="">Select Circle</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type="number"
                      placeholder="₹ Amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                    {formData.connectionType !== "Postpaid" && (
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        aria-label="Check Plans"
                        onClick={handlePlansModalOpen}
                      >
                        Check Plans
                      </button>
                    )}
                  </div>
                </Form.Group>
                    {formData.connectionType === "Prepaid" &&
                <Button
                  variant="primary"
                  type="button"
                  className="w-100"
                  style={{ backgroundColor: "#001e50", color: "white" }}
                  disabled={!isFormValid}
                  onClick={handleConfirmModalOpen}
                >
                  Confirm
                </Button>}
               {formData.connectionType === "Postpaid" && <Button   disabled={!isFormValid} style={{ backgroundColor: "#001e50", color: "white" }} className="w-100" onClick={handleViewBill}>Confirm</Button>}
              </Form>
            </div>
          </Col>
        </Row>
      </div>

      {/* FAQ Section */}
      <FAQMobileRecharge />

      {/* Confirm Recharge Modal */}
      <ConfirmRechargeModal
        show={showConfirmModal}
        handleClose={handleConfirmModalClose}
        formData={formData} // Pass form data for displaying
        modalTitle={
          <div
            className="d-flex justify-content-between align-items-center w-100"
           
          >
            <span>Confirm Recharge</span>
            {formData.connectionType === "Postpaid" && (
              <img
                height={25}
                src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                alt="BBPS"
                className="mt-1"
              />
            )}
          </div>
        }
      />

     <ViewBillModal 
      show={showViewBillModal}
      handleClose={handleViewBillModalClose}
      billdata={billdata}
     />

      {/* Plans Modal */}
      <Modal
        show={showPlansModal}
        onHide={handlePlansModalClose}
        size="lg"
        centered
        className="slide-in-right"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "25px" }}>Browse Plans </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MobileBrowsePlans onPlanSelect={handlePlanSelect} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePlansModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MobileRechargeUI;