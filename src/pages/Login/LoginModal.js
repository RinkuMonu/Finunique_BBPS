import React from 'react';
import { Modal } from 'react-bootstrap';
import Login1 from './Login1';

const LoginModal = ({ show, onClose, onLoginSuccess }) => {
 const modalStyle = {

  overflowY: "hidden",
};
  return (
    <Modal show={show} onHide={onClose} size="lg" centered backdrop="static"  dialogClassName="custom-modal-height">
      <Modal.Body className="p-0"style={modalStyle} >
        <Login1 onClose={onClose} onLoginSuccess={onLoginSuccess} />
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;