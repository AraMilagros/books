import React, { useEffect, useState } from "react";
import axios from "axios";

import ItemLibro from "./ItemLibro";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Novedades() {

    const [termino, setTermino] = useState('the lord of the rings');
    const [libros, setLibros] = useState([]);
    const url = `http://openlibrary.org/search.json?title=${termino}`;

    useEffect(() => {
        const peticion = async () => {
            // const response = await busqueda.get(termino);
            // Aqui se consume un api de libros con axios
            const response = await axios.get(url);
            console.log(response.data.docs);
            setLibros(response.data.docs);//con los datos obtenidos se setea el useState de libros
        }
        peticion();//se llama la funcion para realizar la peticion

    }, [termino]);

    const buscar = () => {
        //cuando se ingrese algun termino en el input, se seteara termino, lo cual, servira para que useeffect se ejecute y vuelva a realizar una peticion a la api
        let termino = document.getElementById("buscador").value;
        setTermino(termino);
    }

    return (
        <>
            <input type="text" id="buscador"></input>
            <input type="button" value="Buscar" onClick={buscar} />

            <Row>
                {libros.length !== 0 && <p>Cargando...</p>}
                {libros.slice(0, 10).map((item, i) => {
                    return (
                        <Col key={i}>
                        {/* No actualiza las imagenes 
                        tambien hay que hacer otra peticion para poder obtener la sipnopsis de cada libro*/}
                            <ItemLibro index={i}
                                portada={`https://covers.openlibrary.org/b/id/${i}-S.jpg`}
                                titulo={item.title}
                                sipnopsis={"Año de publicación: "+item.first_publish_year}
                            />
                        </Col>
                    );
                })}

            </Row>
        </>
    );
}