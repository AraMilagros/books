import React, { useEffect } from "react";

import { Container } from "react-bootstrap";
// componentes
import Novedades from "../components/Novedades";

import { ContextLibros } from "../context/ContextLibros";

export default function Principal() {
    
    return (
        <>
            <Container>
                <ContextLibros>
                    <Novedades />
                </ContextLibros>
            </Container>
            
        </>
    );
}