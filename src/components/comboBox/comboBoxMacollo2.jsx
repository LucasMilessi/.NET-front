import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxMacollo2 = ( { macollo2, setMacollo2, obtenerFiltrado} ) => {

  const [llenarMacollo2, setLlenarMacollo2] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [macollo2])

  const eleccion = (valor) => {
    setMacollo2(valor);      
  }

  const obtenerValores = () => {
    fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/macollo2')
    .then(response => response.json())
    .then(data => {
      setLlenarMacollo2(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione un Macollo [2]</option>
      { llenarMacollo2 != null ? llenarMacollo2.map((arr) => 
      arr === macollo2 ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr }</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};