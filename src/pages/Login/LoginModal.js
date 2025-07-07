import React from 'react';
import { Modal } from 'react-bootstrap';
import Login1 from './Login1';


const LoginModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="lg" centered backdrop="static">
      <Modal.Body className="p-0">
        <Login1 onClose={onClose} />
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
