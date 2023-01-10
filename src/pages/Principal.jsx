import React, { useEffect } from "react";

import { Container } from "react-bootstrap";
// componentes
import Banner from '../components/Banner';
import Novedades from "../components/Novedades";
export default function Principal() {
    
    return (
        <>

            {/* <Banner /> */}
            <Container>
                <Novedades />
            </Container>
            
        </>
    );
}