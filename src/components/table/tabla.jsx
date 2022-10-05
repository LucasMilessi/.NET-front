import React, {useEffect,useState} from 'react'
import { makeRandomId } from "../IdRandom/IDRandom"
import '../../styles/table.css'
import Modal from '../modal/modal';

export const LlenarTabla = ({ llenarTabla }) => {

    const [detalle, setDetalle] = useState([]);
    const [click, setClick] = useState(false);

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
                <Modal detalle={detalle} setDetalle={setDetalle} setClick={setClick}/>
            : null }
        </div>
            
    )

}