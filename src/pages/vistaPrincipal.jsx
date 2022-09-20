import React, { useState, useEffect } from 'react'
import { ComboBoxEspecie } from '../components/comboBoxEspecie';
import { ComboBoxFamilia } from '../components/comboBoxFamilia'
import { LlenarTabla } from '../components/tabla'
import '../styles/VistaPrincipal.css'


const URL_API = 'http://localhost:1234/pastura';

function VistaPrincipal() {

    const [familia, setFamilia] = useState();
    const [especie, setEspecie] = useState();
    const [tipo_vegetativo, setTipo_vegetativo] = useState();
    const [rizoma_engrozado, setRizoma_engrozado] = useState();
    const [macollo1, setMacollo1] = useState();
    const [macollo2, setMacollo2] = useState();
    const [consistecia_de_la_ligula, setConsistecia_de_la_ligula] = useState();
    const [forma_de_la_ligula, setForma_de_la_ligula] = useState();
    const [tamanio, setTamanio] = useState();
    const [color_de_la_ligula, setColor_de_la_ligula] = useState();
    const [forma_de_la_lamina, setForma_de_la_lamina] = useState();
    const [canaliculada, setCanaliculada] = useState();
    const [tipo_de_lamina, setTipo_de_lamina] = useState();
    const [apice, setApice] = useState();
    const [nervadura_central_marcada, setNervadura_central_marcada] = useState();
    const [pelos, setPelos] = useState();
    const [ciclo_de_vida, setCiclo_de_vida] = useState();
    const [ciclo_productivo, setCiclo_productivo] = useState();
    const [tipo_productivo, setTipo_productivo] = useState();

    const [llenarTabla, setLlenarTabla] = useState([]);
    const [todos, setTodos] = useState([]);

    const familiaArray = [
        {
            id : 'qweqwe',
            nombre : 'GRAMÍNEAS'
        },
        {
            id : 'qweqwe23423',
            nombre: 'LEGUMINOSAS'
        },
        {
            id : 'qweqweqwed3',
            nombre: 'OTRAS'
        }
    ]

    useEffect(() => {
        obtenerFiltrado();
        obtenerTodo();
    },[familia, especie])

    const obtenerTodo = () => {

        fetch(URL_API)
        .then(response => response.json())
        .then(data => setTodos(data));

    }

    
    const obtenerFiltrado = () => {

        let request = {
            "familia" : familia,
            "especie": especie,
            "tipo_vegetativo": tipo_vegetativo,
            "rizoma_engrozado": rizoma_engrozado,
            "macollo1": macollo1,
            "macollo2": macollo2,
            "consistecia_de_la_ligula": consistecia_de_la_ligula,
            "forma_de_la_ligula": forma_de_la_ligula,
            "tamanio": tamanio,
            "color_de_la_ligula": color_de_la_ligula,
            "forma_de_la_lamina": forma_de_la_lamina,
            "canaliculada": canaliculada,
            "tipo_de_lamina": tipo_de_lamina,
            "apice": apice,
            "nervadura_central_marcada": nervadura_central_marcada,
            "pelos": pelos,
            "ciclo_de_vida": ciclo_de_vida,
            "ciclo_productivo": ciclo_productivo,
            "tipo_productivo": tipo_productivo
        };

        console.log("request:"+JSON.stringify(request));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };


        fetch(URL_API+"/find", requestOptions)
        .then(response => response.json(console.log(response)))
        .catch(error => console.error('Error:', error))
        .then(response => {
            setLlenarTabla(response);
            console.log('Success:', response)});
    };

console.log("FAMILIA : "+familia);
console.log(llenarTabla.pasturaMap);


    return (
        <>
            <h1>PASTURA</h1>
            <ComboBoxFamilia familiaArray={ familiaArray } setFamilia={setFamilia}/>
            <ComboBoxEspecie setEspecie={ setEspecie }  todos={ todos } obtenerFiltrado={ obtenerFiltrado } />
            <LlenarTabla llenarTabla={ llenarTabla }/>
        </>
    );

};

export default VistaPrincipal;