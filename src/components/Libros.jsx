import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import ItemLibro from "./ItemLibro";
import Buscador from "./Buscador";

// para bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import coverImg from '../assets/img/covernot.jpg';

export default function Libros() {

    const [sipnopsis, setSipnopsis] = useState('Sin fechas registradas');
    const [listaLibros, setListaLibros] = useState(null);
    const [termino, setTermino] = useState('the lord of the rings');
    const url = `http://openlibrary.org/search.json?title=${termino}`;

    useEffect(() => {
        const peticion = async () => {
            // const response = await busqueda.get(termino);
            // Aqui se consume un api de libros con axios
            const response = await axios.get(url);
            let librosList = response.data.docs;
            setListaLibros(librosList);
        }
        peticion();//se llama la funcion para realizar la peticion
        console.log("cargo");
        console.log(listaLibros)
    }, [termino, ''])


    const cambiarTermino = (tn) => {
        setTermino(tn);
    }

    const mostrarMsjItem = (item) => {
        return item ? item[0] : sipnopsis
    }
    return (
        // Aqui ira las peticiones get
        // Y se llamara al componente itemLibro para mostrarlos+
        <>
            <Buscador actualizarBusqueda = { cambiarTermino } />

            <Row>
                {listaLibros && listaLibros.slice(0, 10).map((item, i) => {
                    // console.log(item.title);
                    return (
                        <Col key={i}>
                            <ItemLibro index={i}
                                //por el momento se pondra una imagen por defecto
                                portada={coverImg}
                                titulo={item.title}
                                // sipnopsis={"Año de publicacion " + item.publish_year ? item.publish_year[0] : "sin fecha registrada"}
                                sipnopsis = { mostrarMsjItem(item.publish_year) }
                            />
                        </Col>
                    )
                })}
            </Row>

        </>
    );
}