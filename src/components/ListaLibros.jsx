import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import libros from '../assets/json/libros.json';
import ItemLibro from './ItemLibro';

export default function ListaLibros(){
   return(
    <>
    <Row lg={4} className="bg-light">
        {libros.map((item, index) => (
          <Col key={index}>
            <ItemLibro 
                key={index}
                titulo={item.titulo}
                sipnopsis={item.sipnopsis}
                portada={item.portada}/>

          </Col>
        ))}
      </Row>
    </>
   ); 
}