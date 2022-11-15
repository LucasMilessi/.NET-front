import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxFormaDeLamina = ( { forma_de_la_lamina, setForma_de_la_lamina, obtenerFiltrado} ) => {

  const [llenarForma_de_la_lamina, setLlenarForma_de_la_lamina] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [forma_de_la_lamina])

  const eleccion = (valor) => {
    setForma_de_la_lamina(valor);      
  }

  const obtenerValores = () => {
    fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/forma_de_la_lamina')
    .then(response => response.json())
    .then(data => {
        setLlenarForma_de_la_lamina(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione Forma de Lamina</option>
      { llenarForma_de_la_lamina != null ? llenarForma_de_la_lamina.map((arr) => 
      arr === forma_de_la_lamina ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr}</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr}</option>
      ) : null };
    </select>
  );
};