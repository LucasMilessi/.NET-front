import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxConsistenciaDeLigula = ( { consistecia_de_la_ligula, setConsistecia_de_la_ligula, obtenerFiltrado} ) => {

  const [llenarConsistecia_de_la_ligula, setLlenarConsistecia_de_la_ligula] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [consistecia_de_la_ligula])

  const eleccion = (valor) => {
    setConsistecia_de_la_ligula(valor);      
  }

  const obtenerValores = () => {
    fetch('https://Pasturas-Back.fernandoh11.repl.co/pastura/valores/consistecia_de_la_ligula')
    .then(response => response.json())
    .then(data => {
        setLlenarConsistecia_de_la_ligula(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione Consistecia Ligula</option>
      { llenarConsistecia_de_la_ligula != null ? llenarConsistecia_de_la_ligula.map((arr) => 
      arr === consistecia_de_la_ligula ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr}</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr}</option>
      ) : null };
    </select>
  );
};