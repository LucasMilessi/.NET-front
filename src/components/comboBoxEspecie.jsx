import React from "react";

export const ComboBoxEspecie = ( { setEspecie, todos, obtenerFiltrado} ) => {


  const eleccion = (valor) => {
        setEspecie(valor);
        obtenerFiltrado();
  }

  return (
    <select onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione una Especie</option>
      { todos.pasturaMap != null ? todos.pasturaMap.map((arr) => 
        <option  value={arr.especie} >{ arr.especie }</option>
      ) : null };
    </select>
  );
};
