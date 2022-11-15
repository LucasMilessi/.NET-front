import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxCicloDeVida = ( { ciclo_de_vida, setCiclo_de_vida, obtenerFiltrado} ) => {

  const [llenarCiclo_de_vida, setLlenarCiclo_de_vida] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [ciclo_de_vida])

  const eleccion = (valor) => {
    setCiclo_de_vida(valor);      
  }

  const obtenerValores = () => {
    fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/ciclo_de_vida')
    .then(response => response.json())
    .then(data => {
      setLlenarCiclo_de_vida(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione un Ciclo de Vida</option>
      { llenarCiclo_de_vida != null ? llenarCiclo_de_vida.map((arr) => 
      arr === ciclo_de_vida ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr }</option>
      :
        <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};