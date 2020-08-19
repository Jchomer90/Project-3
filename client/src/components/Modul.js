import React, { useState } from "react";
// import Modal from 'react-bootstrap/Modal';
import submissionForm from "./Form";
import {ModalHeader, MoralBody, Modal, Button} from 'reactstrap';

function MapsModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Incident Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <submissionForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
//   render(<MapsModal />);

  export default MapsModal;