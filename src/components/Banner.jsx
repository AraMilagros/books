import React from "react";

// componentes bootstrap
import Carousel from 'react-bootstrap/Carousel';
// imports estilos css
import '../assets/css/banner.css';

export default function Banner() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 card-img"
                    src="./img/libro1.jfif"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 card-img"
                    src="./img/libro3.jfif"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 card-img"
                    src="./img/libro4.jfif"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
