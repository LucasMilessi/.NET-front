import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxCicloDeVida = ( { ciclo_de_vida, setCiclo_de_vida, obtenerFiltrado} ) => {

  const [llenarCiclo_de_vida, setLlenarCiclo_de_vida] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [ciclo_de_vida])

  // useEffect(() => {
  //   obtenerValores();
  // })

  const eleccion = (valor) => {
    setCiclo_de_vida(valor);      
  }

  const obtenerValores = () => {
    fetch('https://Pasturas-Back.fernandoh11.repl.co/pastura/valores/ciclo_de_vida')
    .then(response => response.json())
    .then(data => {
      setLlenarCiclo_de_vida(data);
    });
  } 

  return (
    <select class="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione un Ciclo De Vida</option>
      { llenarCiclo_de_vida != null ? llenarCiclo_de_vida.map((arr) => 
        <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};