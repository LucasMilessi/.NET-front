import React, { useState, useEffect } from 'react';

import { ComboBoxCicloDeVida } from '../components/comboBox/comboBoxCicloDeVida';
import { ComboBoxCicloProductivo } from '../components/comboBox/comboBoxCicloProductivo';
import { ComboBoxEspecie } from '../components/comboBox/comboBoxEspecie';
import { ComboBoxFamilia } from '../components/comboBox/comboBoxFamilia';
import { ComboBoxMacollo1 } from '../components/comboBox/comboBoxMacollo1';
import { ComboBoxMacollo2 } from '../components/comboBox/comboBoxMacollo2';
import { ComboBoxRizomaEngrozado } from '../components/comboBox/comboBoxRizomaEngrozado';
import { ComboBoxApice } from '../components/comboBox/comboBoxApice';
import { ComboBoxConsistenciaDeLigula } from '../components/comboBox/comboBoxConsistenciaDeLigula';
import { ComboBoxFormaDeLamina } from '../components/comboBox/comboBoxFormaDeLamina';
import { ComboBoxFormaDeLigula } from '../components/comboBox/comboBoxFormaDeLigula';
import { ComboBoxNervadura} from '../components/comboBox/comboBoxNervadura';
import { ComboBoxPelos } from '../components/comboBox/comboBoxPelos';
import { ComboBoxTipoDeLamina } from '../components/comboBox/comboBoxTipoDeLamina';
import { ComboBoxTipoVegetativo } from '../components/comboBox/comboBoxTipoVegetativo';
import { ComboBoxUbicacionPelos } from '../components/comboBox/comboBoxUbicacionPelos';
import Footer from '../components/footer/footer';
import { LlenarTabla } from '../components/table/tabla';
import '../styles/vistaPrincipal.css'

const URL_API = "https://net-appi.fernandoh11.repl.co/pastura";

function VistaPrincipal() {

    const [familia, setFamilia] = useState();
    const [especie, setEspecie] = useState();
    const [tipo_vegetativo, setTipo_vegetativo] = useState();
    const [rizoma_engrozado, setRizoma_engrozado] = useState();
    const [macollo1, setMacollo1] = useState();
    const [macollo2, setMacollo2] = useState();
    const [consistecia_de_la_ligula, setConsistecia_de_la_ligula] = useState();
    const [forma_de_la_ligula, setForma_de_la_ligula] = useState();
    const [tamanio] = useState();
    const [otraCaracteristicaLigula] = useState();
    const [color_de_la_ligula] = useState();
    const [forma_de_la_lamina, setForma_de_la_lamina] = useState();
    const [canaliculada] = useState();
    const [tipo_de_lamina, setTipo_de_lamina] = useState();
    const [apice, setApice] = useState();
    const [nervadura_central_marcada, setNervadura_central_marcada] = useState();
    const [observaciones] = useState();
    const [pelos, setPelos] = useState();
    const [ubicaciónDePelos, setUbicaciónDePelos] = useState();
    const [observacion] = useState();
    const [observacionesGenerales] = useState();
    const [ciclo_de_vida, setCiclo_de_vida] = useState();
    const [ciclo_productivo, setCiclo_productivo] = useState();
    const [tipo_productivo, setTipo_productivo] = useState();
    const [tipoDeCampo] = useState();
    const [img] = useState();

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
            "familia": familia,
            "especie": especie,
            "tipo_vegetativo": tipo_vegetativo,
            "rizoma_engrozado": rizoma_engrozado,
            "macollo1": macollo1,
            "macollo2": macollo2,
            "consistecia_de_la_ligula": consistecia_de_la_ligula,
            "forma_de_la_ligula": forma_de_la_ligula,
            "tamanio": tamanio,
            "otra_caracteristica_ligula": otraCaracteristicaLigula,
            "color_de_la_ligula": color_de_la_ligula,
            "forma_de_la_lamina": forma_de_la_lamina,
            "canaliculada": canaliculada,
            "tipo_de_lamina": tipo_de_lamina,
            "apice": apice,
            "nervadura_central_marcada": nervadura_central_marcada,
            "observaciones": observaciones,
            "pelos": pelos,
            "ubicación_de_pelos": ubicaciónDePelos,
            "observacion": observacion,
            "observaciones_generales": observacionesGenerales,
            "ciclo_de_vida": ciclo_de_vida,
            "ciclo_productivo": ciclo_productivo,
            "tipo_productivo": tipo_productivo,
            "tipo_de_campo": tipoDeCampo,
            "img": img,
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
        setApice("");
        setConsistecia_de_la_ligula("");
        setForma_de_la_lamina("");
        setForma_de_la_ligula("");
        setNervadura_central_marcada("");
        setPelos("");
        setTipo_de_lamina("");
        setUbicaciónDePelos("");
    }


    return (
        <div className="fondo">
            <h1>PASTURA</h1>
            <button id="recargar" type="button" className="btn btn-danger m-4" onClick={() => recargar()}>Borrar Filtros</button>
            <label><b>USTED ESTA FILTRANDO POR :</b> /{familia}/{tipo_vegetativo}/{ciclo_de_vida}/{ciclo_productivo}/{macollo1}/{macollo2}/{rizoma_engrozado}/{especie}/{apice}/{consistecia_de_la_ligula}/{forma_de_la_lamina}/{forma_de_la_ligula}/{nervadura_central_marcada}/{pelos}/{tipo_de_lamina}/{ubicaciónDePelos}</label>
            <br/>
            <ComboBoxFamilia familiaArray={ familiaArray } familia={familia} setFamilia={setFamilia}/>
            <ComboBoxTipoVegetativo tipo_vegetativo={tipo_vegetativo} setTipo_vegetativo={setTipo_vegetativo} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxCicloDeVida ciclo_de_vida={ciclo_de_vida} setCiclo_de_vida={setCiclo_de_vida}  obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxCicloProductivo ciclo_productivo={ciclo_productivo} setCiclo_productivo={setCiclo_productivo} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxMacollo1 macollo1={macollo1} setMacollo1={setMacollo1} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxMacollo2 macollo2={macollo2} setMacollo2={setMacollo2} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxRizomaEngrozado rizoma_engrozado={rizoma_engrozado} setRizoma_engrozado={setRizoma_engrozado} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxEspecie setEspecie={ setEspecie } especie={especie} obtenerFiltrado={ obtenerFiltrado } />
            <ComboBoxApice apice={apice} setApice={setApice} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxConsistenciaDeLigula consistecia_de_la_ligula={consistecia_de_la_ligula} setConsistecia_de_la_ligula={setConsistecia_de_la_ligula} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxFormaDeLamina forma_de_la_lamina={forma_de_la_lamina} setForma_de_la_lamina={setForma_de_la_lamina} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxFormaDeLigula forma_de_la_ligula={forma_de_la_ligula} setForma_de_la_ligula={setForma_de_la_ligula} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxNervadura nervadura_central_marcada={nervadura_central_marcada} setNervadura_central_marcada={setNervadura_central_marcada} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxPelos pelos={pelos} setPelos={setPelos} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxTipoDeLamina tipo_de_lamina={tipo_de_lamina} setTipo_de_lamina={setTipo_de_lamina} obtenerFiltrado={ obtenerFiltrado }/>
            <ComboBoxUbicacionPelos ubicaciónDePelos={ubicaciónDePelos} setUbicaciónDePelos={setUbicaciónDePelos} obtenerFiltrado={ obtenerFiltrado }/>
            <LlenarTabla llenarTabla={ llenarTabla }/> 
            <Footer/>
        </div>
    );
};

export default VistaPrincipal;