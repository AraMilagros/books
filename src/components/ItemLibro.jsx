import React from "react";
// estilo de css
import '../assets/css/itemLibro.css';
import Button from 'react-bootstrap/Button';
import { useLibrosContext } from "../context/ContextLibros";

export default function ItemLibro(props) {
    // const ver = useLibrosContext();
    return (
        <div className="contenedor-total mb-5 mt-3 w-auto">
            <div key={props.index} className="contenedor-item">
                <div className="description">
                    <h2>{props.titulo}</h2>
                    <p>{props.sipnopsis}</p>
                </div>
                <img alt={props.titulo} src={props.portada} className="portada" />
            </div>
            <Button variant="outline-success" className="rounded-0 w-auto m-2">
                Leer más...
            </Button>
        </div>

    );
}

