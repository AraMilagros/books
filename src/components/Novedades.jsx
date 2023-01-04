import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Novedades() {

    const [termino, setTermino] = useState('the lord of the rings');
    const [libros, setLibros] = useState([]);
    const url = `http://openlibrary.org/search.json?title=${termino}`;

    useEffect(() => {
        const peticion = async () => {
            // const response = await busqueda.get(termino);
            const response = await axios.get(url);
            console.log(response);
            setLibros(response.data.docs);
        }
        peticion();

    }, [termino]);

    const buscar = () => {
        let termino = document.getElementById("buscador").value;
        setTermino(termino);
    }

    return (
        <>
            <input type="text" id="buscador"></input>
            <input type="button" value="Buscar" onClick={buscar} />
            <ul>
                {libros.length !== 0 && <p>Cargando...</p>}
                {
                    libros.slice(0, 10).map((item, i) => {
                        return (
                            <li key={i}>
                                <h4>{item.title}</h4>
                            </li>
                        )
                    })
                }

            </ul>


        </>
    );
}