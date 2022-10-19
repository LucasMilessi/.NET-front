import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxTipoVegetativo = ( { tipo_vegetativo, setTipo_vegetativo , obtenerFiltrado } ) => {

    const [llenarTipo_vegetativo, setLlenarTipo_vegetativo] = useState([]);

    useEffect(() => {
        obtenerValores();
        obtenerFiltrado();
    }, [tipo_vegetativo])

    const eleccion = (valor) => {
        setTipo_vegetativo(valor);      
    }

    const obtenerValores = () => {
        fetch('https://Pasturas-Back.fernandoh11.repl.co/pastura/valores/tipo_vegetativo')
        .then(response => response.json())
        .then(data => {
            setLlenarTipo_vegetativo(data);
        });
    }
    
    return (
        <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
        <option>Seleccione un Tipo Vegetativo</option>
        { llenarTipo_vegetativo != null ? llenarTipo_vegetativo.map((arr) => 
        arr == tipo_vegetativo ?
            <option selected key={makeRandomId(10)}  value={arr} >{ arr }</option>
            :
            <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
        ) : null };
        </select>
    );
};
