import React from 'react';
import { Button, Card, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';

function CardModal(props) {
    const { currentUser } = useAuth();

    // Hooks para el Modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
      <>
      <Button size="sm" onClick={handleShow}>Details</Button>
      <Modal show={show} onHide={ handleClose }>
          <Modal.Header closeButton>Modal Header</Modal.Header>
          <Modal.Body>Body del Modal</Modal.Body>
          <Modal.Footer>
                {
                currentUser
                ? ''
                : <Card.Link className="ms-auto" as={ Link } to="/login">Login</Card.Link>
                }
                {
                currentUser
                ? ''
                : <Card.Link as={ Link } to="/signup">Signup</Card.Link>
                }
                {
                currentUser
                ? <Button variant="primary" size="sm">Buy</Button>
                : <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">You have to login to buy!</Tooltip>}>
                    <span className="d-inline-block">
                        <Button className="ms-auto" variant="primary" size="sm" disabled style={{ pointerEvents: 'none' }}>
                            Buy
                        </Button>
                    </span>
                </ OverlayTrigger>
                }
          </Modal.Footer>
      </Modal>
      </>
    );
}

export default CardModal