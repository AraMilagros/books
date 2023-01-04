import React, {useState, useEffect} from 'react';
const URL = "http://openlibrary.org/search.json?title=";

const busqueda = (term) => {

    const [termino, setTermino] = useState({term});
    const [libros, setLibros] = useState([]);
    const item = null;
    const getLibros = async () =>{
        const url = `http://openlibrary.org/search.json?title=${termino}`;
        const result = await axios.get(url);

        item = result.data.docs;
        return item;
    }

    useEffect(() => {
        getLibros();

    }, [termino])
}

export {
    busqueda
}