import React from "react";
// estilo de css
import '../assets/css/itemLibro.css';
import Button from 'react-bootstrap/Button';
import { busqueda, libros } from "../api/busqueda";
export default function ItemLibro(props) {
    return (
        <>
            {/* <div key={props.index} className="item m-auto mb-5"
                style={{
                    background: `url(${props.portada})`
                }}>
                <div className="content">
                    <h2>{props.titulo}</h2>
                    <p>{props.sipnopsis}</p>
                </div>
                <div className="d-grid gap-2 m-auto mt-2 mb-5 w-auto">
                    <Button variant="outline-success" className="rounded-0">
                        Leer más...
                    </Button>
                </div>
            </div> */}
            <div key={props.index} className="item m-auto mb-5 mt-3"
                style={{
                    background: `url(${props.portada})`
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