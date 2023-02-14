import { useState } from "react";

export function apiBook() {

    const url = `http://openlibrary.org/search.json?title=the lord of the rings`;
    const [libros, setLibros] = useState('');

    useEffect(() => {
        const peticion = async () => {
            // const response = await busqueda.get(termino);
            // Aqui se consume un api de libros con axios
            const response = await axios.get(url);
            let librosList = response.data.docs;
            setLibros(librosList);
        }
        peticion();//se llama la funcion para realizar la peticion
        console.log("cargo")
    }, []);

    console.log("librs: "+libros);
}
