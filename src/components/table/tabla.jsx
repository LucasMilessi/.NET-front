import React from 'react'


export const LlenarTabla = ({ llenarTabla }) => {

    return (
        <>
            <table>
                <tr>
                    <td>Familia</td>
                    <td>Especie</td>
                    <td>Tipo Vegetativo</td>
                    <td>Rizoma Engrozado</td>
                    <td>Macollo 1</td>
                    <td>Macollo 2</td>
                    <td>Ciclo de Vida</td>
                    <td>Ciclo Productivo</td>
                    <td>Tipo Productivo</td>
                    <td>Tipo de Campo</td>
                </tr>
                 { llenarTabla.pasturaMap != null ? llenarTabla.pasturaMap.map((val) =>
                 <tr>
                    <td >{val.familia}</td>
                    <td >{val.especie}</td>
                    <td >{val.tipo_vegetativo}</td>
                    <td >{val.rizoma_engrozado}</td>
                    <td >{val.macollo1}</td>
                    <td >{val.macollo2}</td>
                    <td >{val.ciclo_de_vida}</td>
                    <td >{val.ciclo_productivo}</td>
                    <td >{val.tipo_productivo}</td>
                    <td >{val.tipo_de_campo}</td>
                </tr>
                 ) : null};
                </table>
        </>
    )

}