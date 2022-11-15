import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxPelos = ( { pelos, setPelos, obtenerFiltrado} ) => {

  const [llenarPelos, setLlenarPelos] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [pelos])

  const eleccion = (valor) => {
    setPelos(valor);      
  }

  const obtenerValores = () => {
    fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/pelos')
    .then(response => response.json())
    .then(data => {
        setLlenarPelos(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione Pelos</option>
      { llenarPelos != null ? llenarPelos.map((arr) => 
      arr === pelos ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr}</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr}</option>
      ) : null };
    </select>
  );
};