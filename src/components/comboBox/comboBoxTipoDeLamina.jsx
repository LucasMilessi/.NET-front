import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxTipoDeLamina = ( { tipo_de_lamina, setTipo_de_lamina, obtenerFiltrado} ) => {
  const [llenarTipoDeLamina, setLlenarTipoDeLamina] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [tipo_de_lamina])

  const eleccion = (valor) => {
    setTipo_de_lamina(valor);      
  }

  const obtenerValores = () => {
        fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/tipo_de_lamina')
        .then(response => response.json())
        .then(data => {
            setLlenarTipoDeLamina(data);
        });
  }  

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione Tipo de Lámina</option>
      { llenarTipoDeLamina != null ? llenarTipoDeLamina.map((arr) => 
        arr === tipo_de_lamina ?
          <option selected key={makeRandomId(10)} value={arr} >{ arr }</option>
        : 
          <option key={makeRandomId(10)} value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};
