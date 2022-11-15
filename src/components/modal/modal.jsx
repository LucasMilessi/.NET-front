import styled from 'styled-components';
import "../../styles/modal.css";
import ImgPD from "../img/ImagenPorDefecto.png";
import { makeRandomId } from "../IdRandom/IDRandom"

const Modal = ({ detalle, setClick, setDetalle }) => {

    const actualizar = () => {
        setClick(false);
        setDetalle("");
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
                            <div>{detalle.pastura.familia}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Especie</div>
                            <div >{detalle.pastura.especie}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Tipo Vegetativo</div>
                            <div >{detalle.pastura.tipo_vegetativo}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Rizoma Engrozado</div>
                            <div>{detalle.pastura.rizoma_engrozado}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Macollo 1</div>
                            <div >{detalle.pastura.macollo1}</div>
                        </section>
                    </div>
                    <div className='col'>

                        <section key={makeRandomId(10)}>
                            <div>Macollo 2</div>
                            <div >{detalle.pastura.macollo2}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Consistencia de Lígula</div>
                            <div >{detalle.pastura.consistecia_de_la_ligula}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Forma de la Lígula</div>
                            <div >{detalle.pastura.forma_de_la_ligula}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Tamaño</div>
                            <div >{detalle.pastura.tamanio}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Osectiona caracteristica de Lígula</div>
                            <div >{detalle.pastura.osectiona_caracteristica_ligula}</div>
                        </section>
                    </div>
                    <div className='col'>
                        <section key={makeRandomId(10)}>
                            <div>Color de Lígula</div>
                            <div>{detalle.pastura.color_de_la_ligula}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Forma de Lámina</div>
                            <div >{detalle.pastura.forma_de_la_lamina}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Canaliculada</div>
                            <div >{detalle.pastura.canaliculada}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Tipo de Lámina</div>
                            <div >{detalle.pastura.tipo_de_lamina}</div>
                        </section>
                        <section key={makeRandomId(10)}>
                            <div>Apice</div>
                            <div >{detalle.pastura.apice}</div>
                        </section>
                    </div>
                    <div className='col'>
                        <section key={16}>
                            <div>Nervadura</div>
                            <div >{detalle.pastura.nervadura_censectional_marcada}</div>
                        </section>
                        <section key={17}>
                            <div>Observaciones</div>
                            <div >{detalle.pastura.observaciones}</div>
                        </section>
                        <section key={18}>
                            <div>Pelos</div>
                            <div >{detalle.pastura.pelos}</div>
                        </section>
                        <section key={19}>
                            <div>Ubicación de pelos</div>
                            <div >{detalle.pastura.ubicación_de_pelos}</div>
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
                            <div >{detalle.pastura.ciclo_de_vida}</div>
                        </section>
                        <section key={23}>
                            <div>Ciclo Productivo</div>
                            <div >{detalle.pastura.ciclo_productivo}</div>
                        </section>
                        <section key={24}>
                            <div>Tipo Productivo</div>
                            <div >{detalle.pastura.tipo_productivo}</div>
                        </section>
                        <section key={25}>
                            <div>Tipo de Campo</div>
                            <div >{detalle.pastura.tipo_de_campo}</div>
                        </section>
                    </div>
                    <div className='col'>
                        <section key={26}>
                            <div className='Tituloimagen'>Imagen</div>
                            <div className='imagen'>{detalle.pastura.img ? <img className='imgenPastura' src={detalle.pastura.img} alt={"Imagen de la Pastura"} /> : <img className='imgenPastura' src={ImgPD} alt={"Imagen por Defecto"} />}</div>
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



