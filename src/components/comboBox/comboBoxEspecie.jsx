import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxEspecie = ( { setEspecie, especie, obtenerFiltrado} ) => {
  const [llenarEspecie, setLlenarEspecie] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [especie])

  // useEffect(() => {
  //   obtenerValores();
  // },[])

  const eleccion = (valor) => {
    setEspecie(valor);      
  }

  const obtenerValores = () => {
        fetch('http://localhost:1234/pastura/valores/especie')
        .then(response => response.json())
        .then(data => {
            setLlenarEspecie(data);
        });
  }  

  return (
    <select class="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione una Especie</option>
      { llenarEspecie != null ? llenarEspecie.map((arr) => 
        <option key={makeRandomId(10)} value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};
