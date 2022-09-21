import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxCicloProductivo = ( { ciclo_productivo, setCiclo_productivo, obtenerFiltrado} ) => {

  const [llenarCiclo_productivo, setLlenarCiclo_productivo] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [ciclo_productivo])

  // useEffect(() => {
  //   obtenerValores();
  // })

  const eleccion = (valor) => {
    setCiclo_productivo(valor);      
  }

  const obtenerValores = () => {
    fetch('http://localhost:1234/pastura/valores/ciclo_productivo')
    .then(response => response.json())
    .then(data => {
      setLlenarCiclo_productivo(data);
    });
  } 

  return (
    <select class="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione un Ciclo Productivo</option>
      { llenarCiclo_productivo != null ? llenarCiclo_productivo.map((arr) => 
        <option key={makeRandomId(10)}  value={arr} >{ arr}</option>
      ) : null };
    </select>
  );
};