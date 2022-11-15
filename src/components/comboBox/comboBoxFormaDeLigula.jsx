import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxFormaDeLigula = ( { forma_de_la_ligula, setForma_de_la_ligula, obtenerFiltrado} ) => {

  const [llenarForma_de_la_ligula, setLlenarForma_de_la_ligula] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [forma_de_la_ligula])

  const eleccion = (valor) => {
    setForma_de_la_ligula(valor);      
  }

  const obtenerValores = () => {
    fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/forma_de_la_ligula')
    .then(response => response.json())
    .then(data => {
        setLlenarForma_de_la_ligula(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione Forma de Ligula</option>
      { llenarForma_de_la_ligula != null ? llenarForma_de_la_ligula.map((arr) => 
      arr === forma_de_la_ligula ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr}</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr}</option>
      ) : null };
    </select>
  );
};