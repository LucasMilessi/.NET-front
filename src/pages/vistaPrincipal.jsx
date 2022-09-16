import React, { useState, useEffect } from 'react'
import { ComboBoxFamilia } from '../components/comboBoxFamilia'


function vistaPrincipal() {

    const [familia, setFamilia] = useState([]);

    const array = [
        {
            id : '123we',
            nombre : 'Lucas',
            edad : 23 
        },
        {
            id : '123weqqw',
            nombre: 'Ana',
            edad : 23
        }
    ]

    // const obtenerFamilia = () => {

    // fetch('http://localhost:1234/pastura/mostrar')
    // .then(response => response.json())
    // .then(data => //seteamos valor a un estado);
    // };


    return (
        <>
            <h1>Hola soy vistaPrincipal</h1>
            <ComboBoxFamilia array={ array } />
        </>
    );

};

export default vistaPrincipal;