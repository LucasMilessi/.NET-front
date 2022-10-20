import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxNervadura = ( { nervadura_central_marcada, setNervadura_central_marcada, obtenerFiltrado} ) => {

  const [llenarNervadura_central_marcada, setLlenarNervadura_central_marcada] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [nervadura_central_marcada])

  const eleccion = (valor) => {
    setNervadura_central_marcada(valor);      
  }

  const obtenerValores = () => {
    fetch('https://Pasturas-Back.fernandoh11.repl.co/pastura/valores/nervadura_central_marcada')
    .then(response => response.json())
    .then(data => {
        setLlenarNervadura_central_marcada(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione Nervadura</option>
      { llenarNervadura_central_marcada != null ? llenarNervadura_central_marcada.map((arr) => 
      arr === nervadura_central_marcada ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr}</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr}</option>
      ) : null };
    </select>
  );
};