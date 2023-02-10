import React, { useState, useContext, useEffect} from "react";
import axios from "axios";

const librosContext = React.createContext();
const terminoContext = React.createContext();

const url = `http://openlibrary.org/search.json?title=the lord of the rings`;


//esto me permitira acceder a la info desde otros componentes
export function useLibrosContext(){
    // console.log("ver: "+librosContext)
    return useContext(librosContext);
}

export function useTerminoContext(){
    return useContext(terminoContext);
}

export function ContextLibros(props){
    const [libros, setLibros] = useState(null);
    //Esta pensando para usar cuando el user busque otro libro, ingresando su nombre en un input
    const cambioTermino = () => {
        console.log("cambio");
    }

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
    }, [])

    return (
        <librosContext.Provider value={libros} >
            {/* <terminoContext.Provider value={cambioTermino}> */}
                {props.children}
            {/* </terminoContext.Provider> */}
        </librosContext.Provider >
    );
}