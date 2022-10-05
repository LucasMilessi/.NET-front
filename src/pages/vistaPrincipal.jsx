import React, { useState, useEffect } from 'react';

import { ComboBoxCicloDeVida } from '../components/comboBox/comboBoxCicloDeVida';
import { ComboBoxCicloProductivo } from '../components/comboBox/comboBoxCicloProductivo';
import { ComboBoxEspecie } from '../components/comboBox/comboBoxEspecie';
import { ComboBoxFamilia } from '../components/comboBox/comboBoxFamilia';
import { ComboBoxMacollo1 } from '../components/comboBox/comboBoxMacollo1';
import { ComboBoxMacollo2 } from '../components/comboBox/comboBoxMacollo2';
import { ComboBoxRizomaEngrozado } from '../components/comboBox/comboBoxRizomaEngrozado';
import { ComboBoxTipoProductivo } from '../components/comboBox/comboBoxTipoProductivo';
import { ComboBoxTipoVegetativo } from '../components/comboBox/comboBoxTipoVegetativo';
import Footer from '../components/footer/footer';
import ImgRegistro from '../components/imgRegistro/imgRegistro';

import { LlenarTabla } from '../components/table/tabla';
import '../styles/vistaPrincipal.css'

const URL_API = "https://Pasturas-Back.fernandoh11.repl.co/pastura";
//console.log(URL_API);
function VistaPrincipal() {
    //console.log(URL_API);
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

    useEffect(() => {
        obtenerFiltrado();
        
    },[familia])


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

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };

        fetch(URL_API+"/find", requestOptions)
        .then(response => response.json(response))
        .catch(error => console.error('Error:', error))
        .then(response => {
            setLlenarTabla(response);
        });
    };


    const recargar = () =>{
        setFamilia("");
        setEspecie("");
        setTipo_vegetativo("");
        setCiclo_de_vida("");
        setCiclo_productivo("");
        setMacollo1("");
        setMacollo2("");
        setRizoma_engrozado("");
        setTipo_productivo("");
    }


    return (
        <div class="fondo">
            <h1>PASTURA</h1>
            <button id="recargar" type="button" class="btn btn-danger m-4" onClick={() => recargar()}>Borrar Filtros</button>
            <label><b>USTED ESTA FILTRANDO POR :</b> /{familia}/{tipo_vegetativo}/{ciclo_de_vida}/{ciclo_productivo}/{macollo1}/{macollo2}/{rizoma_engrozado}/{especie}</label>
            <br/>
            <ComboBoxFamilia familiaArray={ familiaArray } familia={familia} setFamilia={setFamilia}/>
            <ComboBoxTipoVegetativo tipo_vegetativo={tipo_vegetativo} setTipo_vegetativo={setTipo_vegetativo} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxCicloDeVida ciclo_de_vida={ciclo_de_vida} setCiclo_de_vida={setCiclo_de_vida}  obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxCicloProductivo ciclo_productivo={ciclo_productivo} setCiclo_productivo={setCiclo_productivo} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxMacollo1 macollo1={macollo1} setMacollo1={setMacollo1} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxMacollo2 macollo2={macollo2} setMacollo2={setMacollo2} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxRizomaEngrozado rizoma_engrozado={rizoma_engrozado} setRizoma_engrozado={setRizoma_engrozado} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxEspecie setEspecie={ setEspecie } especie={especie} obtenerFiltrado={ obtenerFiltrado } />
            <LlenarTabla llenarTabla={ llenarTabla }/> 
            <Footer/>
            <ImgRegistro/>
        </div>
    );
};

export default VistaPrincipal;