import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">

                <Navbar.Brand href="#home" className="ms-5">
                    I Love Books
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto  me-5 p-1">
                        <Nav.Item>
                            <Nav.Link href="/" className="ms-1">Novedades</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" className="ms-1 me-2">Recomendaciones</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="ms-1 me-1 ps-1 pe-1">
                            <Nav.Link href="/login">Ingresar</Nav.Link>
                        </Nav.Item>
                        {/* border border-2 */}
                        <Nav.Item className="ps-1 pe-1 ms-1 me-1">
                            <Nav.Link href="/registrar">Registrar</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    );
}
