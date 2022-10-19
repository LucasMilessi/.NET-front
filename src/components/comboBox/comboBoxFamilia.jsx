import React from "react";

export const ComboBoxFamilia = ( { familiaArray, setFamilia, familia} ) => {

  const eleccion = (valor) => {
    if(valor === 'LEGUMINOSAS' || valor === 'OTRAS'){
      window.alert('No se encuentran datos');
    }else{  
      setFamilia(valor);
    }
  }

  return (
    <select className="form-select-sm m-1" onChange={(e) => eleccion(e.target.value)}>
      <option value={""}>Seleccione una Familia</option> 
      {familiaArray.map((arr) => 
        <option  key={arr.id} value={arr.nombre} >{ arr.nombre }</option>
      )};
    </select>
  );
};
