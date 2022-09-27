import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import CTP from '../img/CTP.png'
import TEC from '../img/TEC.png'
import UTEC from '../img/UTEC.png'
import USER from '../img/user.png'

import '../../styles/footer.css'

export default function Footer() {
    const redireccion = () => {
        window.location.href ="https://www.fing.edu.uy/tecnoinf/paysandu/index.html";
    }
  return (<>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <div className='me-5 d-none d-lg-block'>
        </div>

      <section className=''>
      <div className='pre-footer'/>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                UTEC
              </h6>
              <p>
                <img src={UTEC}/>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CETP</h6>
              <p>
              <img src={CTP}/>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Tecnólogo en Informática</h6>
              <p>
              <img className="utec" src={TEC} onClick={()=> redireccion()}/>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Desarrolladores</h6>
              <p>
                <img src={USER}/>
                &nbsp;Lucas Milessi 
              </p>
              <p>
                <img src={USER}/>
                &nbsp;Fernando Hernández
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: by Developers
      </div>
    </MDBFooter>
    </>);
}
