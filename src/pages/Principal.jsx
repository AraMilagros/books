import React, { useEffect } from "react";

import { Container } from "react-bootstrap";
// componentes
import Banner from '../components/Banner';
import ListaLibros from "../components/ListaLibros";
export default function Principal() {
    
    return (
        <>

            <Banner />
            <Container>
                {/* <Novedades /> */}
                <ListaLibros />
            </Container>
            
        </>
    );
}