import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxTipoVegetativo = ( { tipo_vegetativo, setTipo_vegetativo , obtenerFiltrado } ) => {

    const [llenarTipo_vegetativo, setLlenarTipo_vegetativo] = useState([]);

    useEffect(() => {
        obtenerValores();
        obtenerFiltrado();
    }, [tipo_vegetativo])

    // useEffect(() => {
    //     obtenerValores();
    // })

    const eleccion = (valor) => {
        setTipo_vegetativo(valor);      
    }

    const obtenerValores = () => {
        fetch('http://localhost:1234/pastura/valores/tipo_vegetativo')
        .then(response => response.json())
        .then(data => {
            setLlenarTipo_vegetativo(data);
        });
    }
    
    return (
        <select class="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
        <option>Seleccione un Tipo Vegetativo</option>
        { llenarTipo_vegetativo != null ? llenarTipo_vegetativo.map((arr) => 
            <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
        ) : null };
        </select>
    );
};
