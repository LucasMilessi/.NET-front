import React from "react";

export const ComboBoxFamilia = ( { familiaArray, setFamilia} ) => {

  const eleccion = (valor) => {
    if(valor === 'LEGUMINOSAS' || valor === 'OTRAS' || valor === 'Seleccione una Familia'){
      window.alert('No se encuentran datos');
    }else{  
      setFamilia(valor);
    }
  }

  return (
    <select class="form-select-sm m-4" onChange={(e) => eleccion(e.target.value)}>
      <option>Seleccione una Familia</option>
      { familiaArray.map((arr) => 
        <option  key={arr.id} value={arr.nombre} >{ arr.nombre }</option>
      ) };
    </select>
  );
};
