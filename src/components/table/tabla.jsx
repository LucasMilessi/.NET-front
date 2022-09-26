import React, {useEffect,useState} from 'react'
import { makeRandomId } from "../IdRandom/IDRandom"
import '../../styles/table.css'


export const LlenarTabla = ({ llenarTabla }) => {

    const [detalle, setDetalle] = useState([]);
    const [click, setClick] = useState(false)

    const obtenerDetallesPorID = (id) => {
        fetch('https://Pasturas-Back.fernandoh11.repl.co/pastura/search/'+id)
        .then(response => response.json())
        .then(data => {
            setDetalle(data); 
        });
        console.log(detalle);
        setClick(true);
    }

    return (
        <div class="container-sm">
            <table class="table table-striped table-active mt-5">
                    <thead class="table-info">
                        <tr>
                            <th>Familia</th>
                            <th>Especie</th>
                            <th>Tipo de Campo</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                    { llenarTabla.pasturaMap != null ? llenarTabla.pasturaMap.map((val) =>
                    <tr className='tr' key={makeRandomId(3)}>
                        <td >{val.familia}</td>
                        <td >{val.especie}</td>
                        <td >{val.tipo_de_campo}</td>
                        <td ><button type="button" class="btn btn-outline-dark" onClick={() => obtenerDetallesPorID(val._id)}>Ver Detalles</button></td>
                    </tr>
                    ) : null}
                 </tbody>
            
            </table>

            { click ?
            <>
            <h4>DETALLES:</h4>
             
            <table class="table table-striped table-active">
                <thead class="table-danger">
                    <tr>
                        <th>Familia</th>
                        <th>Especie</th>
                        <th>Tipo Vegetativo</th>
                        <th>Rizoma Engrozado</th>
                        <th>Macollo 1</th>
                        <th>Macollo 2</th>
                        <th>Ciclo de Vida</th>
                        <th>Ciclo Productivo</th>
                        <th>Tipo Productivo</th>
                        <th>Tipo de Campo</th>
                    </tr> 
                </thead>
                <tbody>
                 <tr key={detalle._id}>
                    <td >{detalle.familia}</td>
                    <td >{detalle.especie}</td>
                    <td >{detalle.tipo_vegetativo}</td>
                    <td >{detalle.rizoma_engrozado}</td>
                    <td >{detalle.macollo1}</td>
                    <td >{detalle.macollo2}</td>
                    <td >{detalle.ciclo_de_vida}</td>
                    <td >{detalle.ciclo_productivo}</td>
                    <td >{detalle.tipo_productivo}</td>
                    <td >{detalle.tipo_de_campo}</td>
                </tr>
                 </tbody>
            </table>
            </>
            : null }
            </div>
    )

}