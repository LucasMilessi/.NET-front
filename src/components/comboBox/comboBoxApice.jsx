import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxApice = ( { apice, setApice, obtenerFiltrado} ) => {

  const [llenarApice, setLlenarApice] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [apice])

  const eleccion = (valor) => {
    setApice(valor);      
  }

  const obtenerValores = () => {
    fetch('https://Pasturas-Back.fernandoh11.repl.co/pastura/valores/apice')
    .then(response => response.json())
    .then(data => {
      setLlenarApice(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione Apice</option>
      { llenarApice != null ? llenarApice.map((arr) => 
      arr == apice ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr }</option>
      :
        <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};