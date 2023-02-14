import React, { useEffect } from "react";

import { Container } from "react-bootstrap";
// componentes
// import Novedades from "../components/Novedades";
// import { ContextLibros } from "../context/ContextLibros";

import Libros from "../components/Libros";
export default function Principal() {
    
    return (
        <>
            <Container>
                {/* <ContextLibros>
                    <Novedades />
                </ContextLibros> */}
               <Libros /> 
            </Container>
            
        </>
    );
}