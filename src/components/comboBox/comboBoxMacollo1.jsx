import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxMacollo1 = ( { macollo1, setMacollo1, obtenerFiltrado} ) => {

  const [llenarMacollo1, setLlenarMacollo1] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [macollo1])

  const eleccion = (valor) => {
    setMacollo1(valor);      
  }

  const obtenerValores = () => {
    fetch('https://Pasturas-Back.fernandoh11.repl.co/pastura/valores/macollo1')
    .then(response => response.json())
    .then(data => {
      setLlenarMacollo1(data);
    });
  }  

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione un Macollo [1]</option>
      { llenarMacollo1 != null ? llenarMacollo1.map((arr) => 
      arr === macollo1 ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr }</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};