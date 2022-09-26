import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxEspecie = ( { setEspecie, especie, obtenerFiltrado} ) => {
  const [llenarEspecie, setLlenarEspecie] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [especie])

  const eleccion = (valor) => {
    setEspecie(valor);      
  }

  const obtenerValores = () => {
        fetch('https://Pasturas-Back.fernandoh11.repl.co/pastura/valores/especie')
        .then(response => response.json())
        .then(data => {
            setLlenarEspecie(data);
        });
  }  

  return (
    <select class="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione una Especie</option>
      { llenarEspecie != null ? llenarEspecie.map((arr) => 
        arr == especie ?
          <option selected key={makeRandomId(10)} value={arr} >{ arr }</option>
        : 
          <option key={makeRandomId(10)} value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};
