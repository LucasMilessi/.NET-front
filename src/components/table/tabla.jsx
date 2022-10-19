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
        <div className="tableAll">
            <table className="tablas table table-striped table-active mt-5">
                    <thead className="table-info">
                        <tr>
                            <th>Familia</th>
                            <th>Especie</th>
                            <th>Tipo Vegetativo</th>
                            <th>Ciclo de Vida</th>
                            <th>Ciclo Productivo</th>
                            <th>Macollo [1]</th>
                            <th>Macollo [2]</th>
                            <th>Rizoma</th>
                            <th>Apice</th>
                            <th>Consistencia de Lígula</th>
                            <th>Forma de Lámina</th>
                            <th>Forma de Lígula</th>
                            <th>Nervadura</th>
                            <th>Pelos</th>
                            <th>Tipo de Lámina</th>
                            <th>Ubicación de Pelos</th>
                            <th>Tipo de Campo</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                    { llenarTabla.pasturaMap != null ? llenarTabla.pasturaMap.map((val) =>
                    <tr className='tr' key={makeRandomId(3)}>
                        <td>{val.familia}</td>
                        <td>{val.especie}</td>
                        <td>{val.tipo_vegetativo}</td>
                        <td>{val.ciclo_de_vida}</td>
                        <td>{val.ciclo_productivo}</td>
                        <td>{val.macollo1}</td>
                        <td>{val.macollo2}</td>
                        <td>{val.rizoma_engrozado}</td>
                        <td>{val.apice}</td>
                        <td>{val.consistecia_de_la_ligula}</td>
                        <td>{val.forma_de_la_lamina}</td>
                        <td>{val.forma_de_la_ligula}</td>
                        <td>{val.nervadura_central_marcada}</td>
                        <td>{val.pelos}</td>
                        <td>{val.tipo_de_lamina}</td>
                        <td>{val.ubicación_de_pelos}</td>
                        <td>{val.tipo_de_campo}</td>
                        <td><button type="button" className="btn btn-outline-dark" onClick={() => obtenerDetallesPorID(val._id)}>Ver Detalles</button></td>
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