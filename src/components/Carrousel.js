import { Carousel } from "react-bootstrap";
import React from 'react'
import carrousel1 from '../images/carrousel1.png'
import carrousel2 from '../images/carrousel2.png'
import carrousel3 from '../images/carrousel3.png'

function Carrousel() {
    return (
        <div>
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carrousel1}
                alt="First slide"
                fluid
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carrousel2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carrousel3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrousel
