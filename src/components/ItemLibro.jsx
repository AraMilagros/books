import React from "react";
// estilo de css
import '../assets/css/itemLibro.css';
import Button from 'react-bootstrap/Button';
import { useLibrosContext } from "../context/ContextLibros";

export default function ItemLibro(props) {
    const ver = useLibrosContext();
    return (
        <>
            <div key={props.index} className="item m-auto mb-5 mt-3"
                style={{
                    background: `url(${props.portada})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                <div className="content">
                    <h2>{props.titulo}</h2>
                    <p>{props.sipnopsis}</p>
                </div>
                <Button variant="outline-success" className="rounded-0 mt-1 w-100">
                    Leer más...
                </Button>

            </div>

        </>

    );
}

