import React, { useEffect } from "react";

export const ComboBoxTipoVegetativo = ( { tipo_vegetativo, setTipo_vegetativo , todos, obtenerFiltrado } ) => {

    useEffect(() => {
        obtenerFiltrado();
    }, [tipo_vegetativo])

    const eleccion = (valor) => {
        setTipo_vegetativo(valor);      
    }
    
    return (
        <select onChange={(e) => eleccion(e.target.value)}>
        <option>Seleccione un Tipo Vegetativo</option>
        { todos.pasturaMap != null ? todos.pasturaMap.map((arr) => 
            <option key={arr._id}  value={arr.tipo_vegetativo} >{ arr.tipo_vegetativo }</option>
        ) : null };
        </select>
    );
};
