import React, { useState, useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxTipoProductivo = ( { tipo_productivo, setTipo_productivo , obtenerFiltrado } ) => {

    const [llenarTipo_productivo, setLlenarTipo_productivo] = useState([]);

    useEffect(() => {
        obtenerValores();
        obtenerFiltrado();
    }, [tipo_productivo])

    // useEffect(() => {
    //     obtenerValores();
    // },[])

    const eleccion = (valor) => {
        setTipo_productivo(valor);      
    }

    const obtenerValores = () => {
        fetch('http://localhost:1234/pastura/valores/tipo_productivo')
        .then(response => response.json())
        .then(data => {
            setLlenarTipo_productivo(data);
        });
    }
    
    return (
        <select class="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
        <option>Seleccione un Tipo Productivo</option>
        { llenarTipo_productivo != null ? llenarTipo_productivo.map((arr) => 
            <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
        ) : null };
        </select>
    );
};
