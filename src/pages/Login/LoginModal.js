import React from 'react';
import { Modal } from 'react-bootstrap';
import Login1 from './Login1';

const LoginModal = ({ show, onClose, onLoginSuccess }) => {
  return (
    <Modal show={show} onHide={onClose} size="lg" centered backdrop="static">
      <Modal.Body className="p-0">
        <Login1 onClose={onClose} onLoginSuccess={onLoginSuccess} />
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;