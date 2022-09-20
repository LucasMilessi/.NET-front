import React, { useEffect } from "react";

export const ComboBoxEspecie = ( { setEspecie, especie, todos, obtenerFiltrado} ) => {

  useEffect(() => {
    obtenerFiltrado();
  }, [especie])

  const eleccion = (valor) => {
    setEspecie(valor);      
  }

  return (
    <select onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione una Especie</option>
      { todos.pasturaMap != null ? todos.pasturaMap.map((arr) => 
        <option key={arr._id}  value={arr.especie} >{ arr.especie }</option>
      ) : null };
    </select>
  );
};
