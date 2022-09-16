import React from "react";

export const ComboBoxFamilia = ( props ) => {

  return (
    <select name="cars" id="cars">
      { props.array.map((arr) => 
        <option key={arr.id} value="volvo">{arr.nombre} - {arr.edad}</option>
      ) };
    </select>
  );
};
