import React from 'react';
import { Button, Card, Image, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardModal(props) {
    const { currentUser } = useAuth();
    const { image, product, description, price, category } = props;
    // Hooks para el Modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [products, setProducts] = useState([])
    // Mandando llamar API
    useEffect(() => {
            const URL_API_ECOMMERCE = 'https://ecomerce-master.herokuapp.com/api/v1/item/5fbc19a65a3f794d72471163';
            axios
                .get(URL_API_ECOMMERCE)
                .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <>
        <Button size="sm" className="me-auto" onClick={handleShow}>Details</Button>
        <Modal show={show} onHide={ handleClose } centered>
            <Modal.Header closeButton><span style={{ fontWeight:'bold'}} >{ products.product_name }</span></Modal.Header>
            <Modal.Body>
                {/* <Image src={ products.image } style={{ width: '5rem', height: '5rem', display: 'inline-flex' }}/> */}
                <p>{ products.description }</p>
                <p>Price: ${ products.price }</p>
                <p>Category: { products.category }</p>
            </Modal.Body>
            <Modal.Footer>
                    {
                    currentUser
                    ? ''
                    : <Card.Link as={ Link } to="/login">Login</Card.Link>
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