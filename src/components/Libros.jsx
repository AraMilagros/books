import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
//Componentes creados
import ItemLibro from "./ItemLibro"; // es cada uno de los libros que se cargaran
import Buscador from "./general/Buscador"; //es el input donde se puede ingresar otros libros a buscar
import NotFound from './NotFound'; //muestra un gif de carga mientras se cargue la info de los libros

// para bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//En caso de que la portada del libro no este disponible, se mostrara la sgte img
import coverImg from '../assets/img/covernot.jpg';

export default function Libros() {

    //servira de guia para saber qué mostrar segun este disnible la info de los libros
    const [loanding, setLoanding] = useState(false);
    const [listaLibros, setListaLibros] = useState(null);
    const [termino, setTermino] = useState('the lord of the rings');
    const url = `http://openlibrary.org/search.json?title=${termino}`;
    
    useEffect(() => {
        const peticion = async () => {
            // Aqui se consume un api de libros con axios
            const response = await axios.get(url);//se realiza la peticion y se guardara la respuesta en response
            let librosList = response.data.docs;//luego se accede directamente a los datos que queremos utilizar para recien guardarlos en librosList y setearlo a listaLibros
            setListaLibros(librosList);
            setLoanding(true);//una vez que se haya capturado los datos para trabajar, se cambiara de estado loanding para mostrar los datos
        }
        peticion();//se llama la funcion para realizar la peticion
    }, [termino, ''])


    const cambiarTermino = (tn) => {
        setLoanding(false);//se cambia de estado para mostrar al usser que se esta cargando la pag
        setTermino(tn);//es el termino que ingreso el user para una nueva busqueda
    }

    return (
        <>
            {/* Componente que muestra el buscador, es decir donde el user ingresa el libro a buscador
            El componente tiene un props que se encargara de reconocer que se ha ingresado un nuevo valor
                En este caso se pasa a props 'actualizarBusqueda' un metodo (declarado en este componente: cambiarTermino) que recibe un parametro
                Entonces en el componente de Buscador, este metodo (cambiarTermino ) recibira el nuevo termino que ingrese el user en el input para luego, en este componente (Libros), actualizar termino*/}
            <Buscador actualizarBusqueda={ cambiarTermino } />

            <Row>
                {(loanding) ? //en caso de que el estado de loanding sea false, mostrara un componente que regresa un gif de carga, pero cuando el estado sea true, enlistara los datos de los libros que se hayan obtenido
                    listaLibros.slice(0, 10).map((item, i) => {
                        return (
                            <Col key={i}>
                                <ItemLibro index={i}
                                    //por el momento se pondra una imagen por defecto, debido a que al momento de cargar las imagenes, hay algunas que no aparecen.
                                    // Nota: trate de capturar los errores que pudieran surgir para que, en vez de no cargar nada, se cargara una imagen por defecto (la cual se esta cargado actualmente) pero no salta ningun error en consola
                                    // portada={`https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-L.jpg`}
                                    portada = { coverImg }
                                    titulo={item.title}
                                    sipnopsis={item.author_name}
                                />
                            </Col>
                        )
                    }) : <NotFound />
                }
            </Row>

        </>
    );
}