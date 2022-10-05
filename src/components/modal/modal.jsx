import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Base64 } from "js-base64";

const Modal = ({detalle, setClick, setDetalle}) => {

    const [imagen, setImagen] = useState('')
    const [disable, setDisable] = useState(true)
    

    const actualizar = () =>{
        setClick(false);
        setDetalle("");
    }

    const contruirImg = async() => {

        const base64 = await Base64.decode(detalle.img.data);
        const url = await detalle.img.contentType;

        const imagen = base64+','+url;  

        setImagen(imagen)
    }

    // const mostrarImagen = () => {
    //     contruirImg();
    //     setDisable(!disable)
    // }

    if(detalle.img !== null){
        contruirImg();
    }

    return ( <>
    <Overlay>
        <ContenedorModal>
            <Encabezado>
                <h4>Detalles:</h4>
            </Encabezado>
            <BotonCerrar onClick={()=> actualizar()}>
                X
            </BotonCerrar>
            <Contenido>
            <table class="table table-striped table-active">
                    <thead>
                    <tr key={1}>
                         <th>Familia</th>
                         <td>{detalle.familia}</td>
                    </tr>
                    <tr key={2}>
                         <th>Especie</th>
                         <td >{detalle.especie}</td>
                    </tr>
                    <tr key={3}>
                        <th>Tipo Vegetativo</th>
                        <td >{detalle.tipo_vegetativo}</td>
                    </tr>
                    <tr key={4}>
                        <th>Rizoma Engrozado</th>
                        <td >{detalle.rizoma_engrozado}</td>
                    </tr>
                    <tr key={5}>
                        <th>Macollo 1</th>
                        <td >{detalle.macollo1}</td>
                    </tr>
                    <tr key={6}>
                        <th>Macollo 2</th>
                        <td >{detalle.macollo2}</td>
                    </tr>
                    <tr key={7}>
                        <th>Ciclo de Vida</th> 
                        <td >{detalle.ciclo_de_vida}</td>
                    </tr>
                    <tr>
                        <th>Ciclo Productivo</th> 
                        <td >{detalle.ciclo_productivo}</td>
                    </tr>
                    <tr key={8}>
                        <th>Tipo Productivo</th>
                        <td >{detalle.tipo_productivo}</td>
                    </tr>
                    <tr key={9}>
                        <th>Tipo de Campo</th>
                        <td >{detalle.tipo_de_campo}</td>
                    </tr>
                    <tr key={10}>
                        <th>Imagen</th>
                        <img src={imagen}  height={60} />
                    </tr>
                 </thead>
             </table>
            </Contenido>
        </ContenedorModal>
    </Overlay>
    </> );
}
 
export default Modal;

const ContenedorModal = styled.div`
	width:500px;
    min-height: 100px;
    background-color: white;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Encabezado = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;

    h4{
        font-weight: 500;
        font-size:20px;
    }
`;

const BotonCerrar = styled.div`
   position: absolute;
   top:20px;
   right: 20px;
   width: 30px;
   height: 30px;
   border: none;
   background: none;
   cursor: pointer;
   transition: .3s ease all;
   border-radius: 5px;
   color: red;
   text-align: center;
   font-size: 20px;
   &:hover{
    background: rgba(0,0,0, .2)
   }
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;


