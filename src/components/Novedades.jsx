import ItemLibro from "./ItemLibro";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useLibrosContext } from "../context/ContextLibros";
import coverImg from '../assets/img/covernot.jpg';

export default function Novedades() {
//Aqui accedemos a la variable que contenga los datos que necesitemos consumir, en este caso, los detalles de los libros que regresa la peticion get
    const librosNov = useLibrosContext();
    return (
        <>
            <Row>
                {librosNov && librosNov.slice(0, 10).map((item, i) => {
                    // console.log(item.title);
                    return (
                        <Col key = { i }>
                            <ItemLibro index={i}
                            //por el momento se pondra una imagen por defecto
                                portada = { coverImg }
                                titulo={item.title}
                                sipnopsis={"Año de publicacion " + item.publish_year[0]}
                            />
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}

