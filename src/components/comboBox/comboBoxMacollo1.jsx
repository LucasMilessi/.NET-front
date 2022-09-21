import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxMacollo1 = ( { macollo1, setMacollo1, obtenerFiltrado} ) => {

  const [llenarMacollo1, setLlenarMacollo1] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [macollo1])

  // useEffect(() => {
  //   obtenerValores();
  // },[])

  const eleccion = (valor) => {
    setMacollo1(valor);      
  }

  const obtenerValores = () => {
    fetch('http://localhost:1234/pastura/valores/macollo1')
    .then(response => response.json())
    .then(data => {
      setLlenarMacollo1(data);
    });
  }  

  return (
    <select class="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione un Macollo [1]</option>
      { llenarMacollo1 != null ? llenarMacollo1.map((arr) => 
        <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};