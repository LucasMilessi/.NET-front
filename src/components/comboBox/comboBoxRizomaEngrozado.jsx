import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxRizomaEngrozado = ( { rizoma_engrozado, setRizoma_engrozado, obtenerFiltrado} ) => {

  const [llenarRizoma_engrozado, setLlenarRizoma_engrozado] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [rizoma_engrozado])

  const eleccion = (valor) => {
    setRizoma_engrozado(valor);      
  }

  const obtenerValores = () => {
    fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/rizoma_engrozado')
    .then(response => response.json())
    .then(data => {
      setLlenarRizoma_engrozado(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione un Rizoma</option>
      { llenarRizoma_engrozado != null ? llenarRizoma_engrozado.map((arr) => 
      arr === rizoma_engrozado ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr }</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};