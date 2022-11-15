import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxCicloProductivo = ( { ciclo_productivo, setCiclo_productivo, obtenerFiltrado} ) => {

  const [llenarCiclo_productivo, setLlenarCiclo_productivo] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [ciclo_productivo])

  const eleccion = (valor) => {
    setCiclo_productivo(valor);      
  }

  const obtenerValores = () => {
    fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/ciclo_productivo')
    .then(response => response.json())
    .then(data => {
      setLlenarCiclo_productivo(data);
    });
  } 

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione un Ciclo Productivo</option>
      { llenarCiclo_productivo != null ? llenarCiclo_productivo.map((arr) => 
      arr === ciclo_productivo ?
        <option selected key={makeRandomId(10)}  value={arr} >{ arr}</option>
        :
        <option key={makeRandomId(10)}  value={arr} >{ arr}</option>
      ) : null };
    </select>
  );
};