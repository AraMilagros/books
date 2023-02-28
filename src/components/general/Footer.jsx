import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="w-75 nav nav-fill align-items-center naver nav-justified m-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Preguntas frecuentes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Contáctanos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Prensa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Conferencias</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Términos y condiciones</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Privacidad</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Estudiantes</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
}