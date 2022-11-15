import React, { useState,useEffect } from "react";
import { makeRandomId } from "../IdRandom/IDRandom"

export const ComboBoxUbicacionPelos = ( { ubicaciónDePelos, setUbicaciónDePelos, obtenerFiltrado} ) => {
  const [llenarUbicaciónDePelos, setLlenarUbicaciónDePelos] = useState([]);

  useEffect(() => {
    obtenerValores();
    obtenerFiltrado();
  }, [ubicaciónDePelos])

  const eleccion = (valor) => {
    setUbicaciónDePelos(valor);      
  }

  const obtenerValores = () => {
        fetch('https://net-appi.fernandoh11.repl.co/pastura/valores/ubicación_de_pelos')
        .then(response => response.json())
        .then(data => {
            setLlenarUbicaciónDePelos(data);
        });
  }  

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione Ubicación de Pelos</option>
      { llenarUbicaciónDePelos != null ? llenarUbicaciónDePelos.map((arr) => 
        arr === ubicaciónDePelos ?
          <option selected key={makeRandomId(10)} value={arr} >{ arr }</option>
        : 
          <option key={makeRandomId(10)} value={arr} >{ arr }</option>
      ) : null };
    </select>
  );
};
