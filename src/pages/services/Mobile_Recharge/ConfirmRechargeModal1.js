import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axiosInstance from "../../../components/services/AxiosInstance";
import Swal from "sweetalert2";
import { useUser } from "../../../context/UserContext";

const ConfirmRechargeModal1 = ({ show, handleClose, formData }) => {
  const [showMpinModal, setShowMpinModal] = useState(false);
  const [mpin, setMpin] = useState("");
  const {fetchUserfree} = useUser();
  const handleRechargeNow = () => {
    setShowMpinModal(true);
  };

  const handleMpinSubmit = async () => {
    if (!mpin) {
      Swal.fire("Error", "Please enter your MPIN.", "error");
      return;
    }

    try {
      const payload = {
        amount: formData.amount,
        canumber: formData.mobileNumber,
        category: "mobile",
        mpin: mpin,
        operator: formData.operator,
      };

      const res = await axiosInstance.post("/v1/s3/recharge/dorecharge", payload);

      if (res.data.status === "success") {
        Swal.fire("Success ✅", `${res.data.message}\nRef ID: ${res.data.refid}`, "success");
        setShowMpinModal(false);
        handleClose();
        setMpin("");
        fetchUserfree()
      } else {
        Swal.fire("Failed ❌", res.data.message, "error");
      }
    } catch (error) {
      console.error("Recharge API Error:", error);
      Swal.fire("Error", "Something went wrong during recharge!", "error");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Recharge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Number: {formData.mobileNumber}</p>
          <p>Operator: {formData.operator}</p>
          <p>Circle: {formData.circle}</p>
          <p>Amount: ₹{formData.amount}</p>
          {formData.planDescription && <p>{formData.planDescription}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleRechargeNow}>
            Recharge Now
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MPIN Modal */}
      <Modal show={showMpinModal} onHide={() => setShowMpinModal(false)} centered>
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
          <Button variant="primary" onClick={handleMpinSubmit}>
            Submit MPIN
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmRechargeModal1;
