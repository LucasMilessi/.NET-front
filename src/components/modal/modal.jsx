import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Base64 } from "js-base64";
import "../../styles/modal.css";
import ImgPD from "../img/ImagenPorDefecto.png";
import { makeRandomId } from "../IdRandom/IDRandom"

const Modal = ({ detalle, setClick, sedivetalle }) => {

    const [imagen, setImagen] = useState('')
    const [disable, sedivisable] = useState(true)

    const actualizar = () => {
        setClick(false);
        sedivetalle("");
    }

    const consectionuirImg = async () => {

        const base64 = await Base64.decode(detalle.img.data);
        const url = await detalle.img.contentType;

        const imagen = base64 + ',' + url;

        setImagen(imagen)
    }

    if (detalle.img !== null) {
        consectionuirImg();
    }

    return (<>
        <Overlay>
            <ContenedorModal>
                <Encabezado>
                    <h4>Detalles:</h4>
                </Encabezado>
                <BotonCerrar onClick={() => actualizar()}>
                    X
                </BotonCerrar>
                <div className='contenido'>
                    <div className='col'>
                        <section key={makeRandomId(10)}>
                            <div>Familia</div>
                            <div>{detalle.familia}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Especie</div>
                            <div >{detalle.especie}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Tipo Vegetativo</div>
                            <div >{detalle.tipo_vegetativo}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Rizoma Engrozado</div>
                            <div>{detalle.rizoma_engrozado}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Macollo 1</div>
                            <div >{detalle.macollo1}</div>
                        </section>
                    </div>
                    <div className='col'>

                        <section key={makeRandomId(10)}>
                            <div>Macollo 2</div>
                            <div >{detalle.macollo2}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Consistencia de Lígula</div>
                            <div >{detalle.consistecia_de_la_ligula}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Forma de la Lígula</div>
                            <div >{detalle.forma_de_la_ligula}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Tamaño</div>
                            <div >{detalle.tamanio}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Osectiona caracteristica de Lígula</div>
                            <div >{detalle.osectiona_caracteristica_ligula}</div>
                        </section>
                    </div>
                    <div className='col'>
                        <section key={makeRandomId(10)}>
                            <div>Color de Lígula</div>
                            <div>{detalle.color_de_la_ligula}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Forma de Lámina</div>
                            <div >{detalle.forma_de_la_lamina}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Canaliculada</div>
                            <div >{detalle.canaliculada}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Tipo de Lámina</div>
                            <div >{detalle.tipo_de_lamina}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Apice</div>
                            <div >{detalle.apice}</div>
                        </section>
                    </div>
                    <div className='col'>
                        <section key={16}>
                            <div>Nervadura</div>
                            <div >{detalle.nervadura_censectional_marcada}</div>
                        </section>
                        <section key={17}>
                            <div>Observaciones</div>
                            <div >{detalle.observaciones}</div>
                        </section>
                        <section key={18}>
                            <div>Pelos</div>
                            <div >{detalle.pelos}</div>
                        </section>
                        <section key={19}>
                            <div>Ubicación de pelos</div>
                            <div >{detalle.ubicación_de_pelos}</div>
                        </section>
                        <section key={20}>
                            <div>Observacion</div>
                            <div >{detalle.observacion}</div>
                        </section>
                    </div>
                    <div className='col'>
                        <section key={21}>
                            <div>Observaciones generales</div>
                            <div >{detalle.observaciones_generales}</div>
                        </section>
                        <section key={22}>
                            <div>Ciclo de Vida</div>
                            <div >{detalle.ciclo_de_vida}</div>
                        </section>
                        <section key={23}>
                            <div>Ciclo Productivo</div>
                            <div >{detalle.ciclo_productivo}</div>
                        </section>
                        <section key={24}>
                            <div>Tipo Productivo</div>
                            <div >{detalle.tipo_productivo}</div>
                        </section>
                        <section key={25}>
                            <div>Tipo de Campo</div>
                            <div >{detalle.tipo_de_campo}</div>
                        </section>
                    </div>
                    <div className='col'>
                        <section key={26}>
                            <div className='Tituloimagen'>Imagen</div>
                            <div className='imagen'>{detalle.img ? <img className='imgenPastura' src={imagen} alt={"Imagen de la Pastura"} /> : <img className='imgenPastura' src={ImgPD} alt={"Imagen por Defecto"} />}</div>
                        </section>

                    </div>
                </div>
            </ContenedorModal>
        </Overlay>
    </>);
}

export default Modal;

const ContenedorModal = styled.div`
	min-width:1500px;
    min-height: 100px;
    background-color: white;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    display:inline-block;
    margin:20px;
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
   sectionansition: .3s ease all;
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


