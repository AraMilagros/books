import React, { useEffect, useState } from "react";

// import { busqueda } from "../api/busqueda";
import axios from "axios";

export default function Novedades() {

    const [libros, setLibros] = useState([]);
    const [termino, setTermino] = useState("the lord of the rings");
    useEffect(() => {
        `http://openlibrary.org/search.json?title=the+lord+of+the+rings`
        const obtenerLibros = async () => {
            const url = `http://openlibrary.org/search.json?title=${termino}`;
            const result = await axios.get(url);

            // console.log(result.data.docs);
            setLibros(result.data.docs);
            // console.log("Libros: " + libros);
        }
        obtenerLibros();

    }, []);
    const obtenerText = () => {
        let termino = document.getElementById("txtName").value;
        console.log("input: " + termino);
    }
    return (
        <>
            <input type="text" id="txtName"></input>
            <input type="button" value="Buscar" onClick={obtenerText} />
            <ul>
                {libros.length === 0 && <p>Cargando...</p>}
                {
                    libros.slice(0, 10).map((item, i) => {
                        return (
                            <li key={i}>
                                <h4>{item.title}</h4>
                                
                                <img src={`https://covers.openlibrary.org/b/id/${i}-L.jpg`} alt="imagen aqui" style={{ 'border': '1px solid black'}}/>
                                
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}