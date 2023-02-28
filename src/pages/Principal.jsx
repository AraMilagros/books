import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Libros from "../components/Libros";
export default function Principal() {
    
    return (
        <>
            <Container>
               <Libros /> 
            </Container>
            
        </>
    );
}