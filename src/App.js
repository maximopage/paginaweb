import React, { useState, useEffect} from 'react';
import logo from './Assets/logo.svg';
import navUnete from './Assets/navUnete.svg';
import variosLayer from './Assets/variosLayer.svg';
import imagenConoceme from './Assets/imgConoceme.jpg';
import principios1 from './Assets/principios1.svg';
import principios2 from './Assets/principios2.svg';
import principios3 from './Assets/principios3.svg';
import principios4 from './Assets/principios4.svg'; 
import uneteFooter from './Assets/uneteFooter.svg';
import logoFooter from './Assets/logoFooter.svg';
import instagram from './Assets/instagram.svg';
import twitter from './Assets/twitter.svg';
import facebook from './Assets/facebook.svg';
import youtube from './Assets/youtube.svg';
import youtubeAmarillo from './Assets/youtubeAmarillo.svg';
import instagramAmarillo from './Assets/instagramAmarillo.svg';
import twitterAmarillo from './Assets/twitterAmarillo.svg';
import facebookAmarillo from './Assets/facebookAmarillo.svg';
import modalUneteImg from './Assets/modalUnete.svg';
import modalUneteEnviar from './Assets/modalUneteEnviar.svg';
import ScrollAnimation from 'react-animate-on-scroll';
// import { loadReCaptcha, ReCaptcha } from "react-recaptcha-google";
import {Circle} from 'react-preloaders';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row, 
  Col,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Input
} from 'reactstrap';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // var recaptcha = React.createRef();
  // useEffect(() => {
  //   loadReCaptcha();
  // });

  const toggle = () => {
    setIsOpen(!isOpen);
    var rectangulo = document.getElementsByClassName('rectangulo');
    var navUnete = document.getElementsByClassName('navUnete');
    if(isOpen===true){
      rectangulo[0].style.height = '136px';
      navUnete[0].style.marginTop= "0px";
    }else{
      rectangulo[0].style.height = '300px';
      navUnete[0].style.marginTop= "15px";
      navUnete[0].style.marginLeft= "0px";
    }
  }

  const changeUnete = () => {
    var name = document.getElementById('nombre')
    var email = document.getElementById('email')
    var modalUneteImg = document.getElementById('modalUneteImg')
    var enviarModal = document.getElementById('enviarModal')
    if(name.value!=="" && email.value!==""){
      modalUneteImg.src=modalUneteEnviar;
      enviarModal.style.display="block";
      ValidateEmail(email.value)
    }
  }

  const openInstagram = () => {
    window.open("https://www.instagram.com/maximo_sanchez/?hl=es-la");
  }
  const openFacebook = () => {
    window.open("https://es-la.facebook.com/pages/category/Government-Official/M%C3%A1ximo-S%C3%A1nchez-Brandt-261394580638130/");
  }
  const openTwitter = () => {
    window.open("https://twitter.com/maximo_sanchez?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
  }
  const openYoutube = () => {
    window.open("https://www.youtube.com/channel/UC-eLa_ksByM7m0OZQMbhCQA");
  }

  const enviarModal = () => {
    var name = document.getElementById('nombre')
    var email = document.getElementById('email')
    
    if(ValidateEmail(email.value)){
      if(name.value.includes(' ') && name.value.split(" ").length>1 ){
        if(name.value.split(" ")[0]!=="" && name.value.split(" ")[1]!==""){
          toggleModalUnete()
          toggleModalEnviado()
          sendFeedback()
        }
        else{
          alert("Por favor ingrese nombre y apellido")
        }
      }else{
        alert("Por favor ingrese nombre y apellido")
      }
    }else{
      alert("El correo suministrado no es valido")
    }
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'gmail', 'template_32xNxITu',
      {message_html: "<h1> Maximo!! una persona se quiere unir</h1> <p>Nombre: "+document.getElementById('nombre').value+"</p> <p>Email: " +document.getElementById('email').value+"</p>"}
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    
    const changeI0 = () => {
      document.getElementById("instagram").src = instagram;
    }
    const changeI1 = () => {
      document.getElementById("instagram").src = instagramAmarillo;
    }
    const changeT0 = () => {
      document.getElementById("twitter").src = twitter;
    }
    const changeT1 = () => {
      document.getElementById("twitter").src = twitterAmarillo;
    }
    const changeF0 = () => {
      document.getElementById("facebook").src = facebook;
    }
    const changeF1 = () => {
      document.getElementById("facebook").src = facebookAmarillo;
    }
    const changeY0 = () => {
      document.getElementById("youtube").src = youtube;
    }
    const changeY1 = () => {
      document.getElementById("youtube").src = youtubeAmarillo;
    }

  const changeUneteHeader1 = () => {
    document.getElementById("navUnete").src = uneteFooter;
  }
  const changeUneteHeader0 = () => {
    document.getElementById("navUnete").src = navUnete;
  }
  const changeUneteFooter1 = () => {
      document.getElementById("uneteFooter").src = navUnete;
  }
  const changeUneteFooter0 = () => {
    document.getElementById("uneteFooter").src = uneteFooter;
}

  const ValidateEmail = (email) => {
    console.log(email)
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return (true)
        
      }
        return (false)
  }



  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    //console.log(Recaptcha)
    setModal(!modal);
  } 

  
  const [modalUnete, setModalUnete] = useState(false);

  const toggleModalUnete = () => {
    setModalUnete(!modalUnete);
  }

  const [modalEnviado, setModalEnviado] = useState(false);

  const toggleModalEnviado = () => {
    setModalEnviado(!modalEnviado);
  }   



  return (
    <div className="App">
      <h1 className="seo" >maximo sanchez</h1>
      <h2 className="seo">maximo sanchez</h2>
      <h3 className="seo">maximo sanchez</h3>
      <Navbar className="rectangulo" color="light" light expand="md">
        <NavbarBrand href="/"> <img className="logo" src={logo} alt="logo"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <p  onClick={toggleModalUnete} className="uneteMobile">??NETE</p>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='marginNav'>
              <NavLink  href="#conoceme">Con??ceme</NavLink>
            </NavItem>
            <NavItem className='marginNav'>
              <NavLink  href="#experiencia">Experiencia</NavLink>
            </NavItem>
            <NavItem className='marginNav'>
              <NavLink  href="#areasInteres">??reas de inter??s</NavLink>
            </NavItem>
            <NavItem className='marginNav'>
              <NavLink  href="#principios">Principios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onMouseOut={changeUneteHeader0} onMouseOver={changeUneteHeader1} onClick={toggleModalUnete} href="#"> <img id="navUnete" className="navUnete" src={navUnete} alt="navUnete"></img></NavLink>
            </NavItem>
          </Nav> 
        </Collapse>
      </Navbar>
      <div className="fondoAmarillo">
        <img className="imagenPrincipal" src="https://maximoimage.s3.us-east-2.amazonaws.com/imagenes/Optimized-imagenPrincipal_large2.png" alt="maximo sanchez imagenPrincipal"></img>
      </div>
      <ScrollAnimation delay={500}  animateOnce={true} animateIn='fadeIn'>

      <div id="conoceme" className="conoceme">
        <img className="imagenConoceme" src={imagenConoceme} alt="maximo sanchez conoceme"></img>
        <p className="conocemeTitulo">Con??ceme</p>
        <p className="conocemeTxt">
          M??ximo S??nchez Brandt es un pol??tico de centro, graduado 
          de la Universidad Central de Venezuela. Ha desempe??ado distintos 
          cargos para varios entes p??blicos.
        </p>
      </div>
 
</ScrollAnimation>

      <div id="experiencia" className="experiencia">
      <img className="variosLayerMobile" src={variosLayer} alt="variosLayer"></img>
        <div className="gradienteExp">
          <ScrollAnimation delay={200} animateOnce={true} animateIn='bounceInLeft'>
            <img className="variosLayer" src={variosLayer} alt="variosLayer"></img>
          </ScrollAnimation>         
        </div>
        <div className="imagenExperiencia"> 
          <p className="experienciaTitulo">Experiencia </p>
          <Container className="historia">
            <ScrollAnimation delay={200} animateOnce={true} animateIn='bounceInLeft'>          
              <img className="variosLayer2" src={variosLayer} alt="variosLayer"></img>
            </ScrollAnimation> 
            <Row>
              <Col md="3">
                <div className="hist1">
                  <p className="fecha">2019 - 2020 </p>
                  <p className="fechaTexto">Presidente del Concejo Municipal de Chacao. </p>
                  <div className="lineaAmarilla"></div>
                </div>
              </Col>  
              <Col md="3">
                <div className="lineaVertical"></div>
                <div className="hist2">
                  <p className="fecha">2000 - 2004 y<br/> 2008 - 2017</p>
                  <p className="fechaTexto">Concejal Metropolitano de Caracas. </p>
                  <div className="lineaAmarilla lineaaux"></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="hist1">
                  <p className="fecha">2018 - 2019</p>
                  <p className="fechaTexto">Secretario de Gobierno de la Alcald??a del Municipio Chacao. </p>
                  <div className="lineaAmarilla"></div>
                </div>
              </Col>
              <Col md="3">
                <div className="hist2">
                  <p className="fecha">1995 - 1999</p>
                  <p className="fechaTexto">Jefe de la Divisi??n de Regiones de la Fiscal??a General de Cedulaci??n del Concejo Nacional Electoral.</p>
                  <div className="lineaAmarilla lineaaux"></div>
                </div>
              </Col>
            </Row>
          </Container>
          <p className="subtituloHistoria">Cargos Ocupados: </p>
          <p className="subtextoHistoria"> 
            Jefe nacional de activismo pol??tico de Acci??n democr??tica |
            Presidente del Centro de estudiantes de la escuela de Estudios Pol??ticos y Administrativos | 
            Representante estudiantil ante el concejo de escuela de la Escuela de Estudios Pol??ticos y administrativos | 
            Representante estudiantil ante el concejo Universitario de la Universidad Central de Venezuela | 
            Licenciado en Ciencias Pol??ticas y Administrativas (Polit??logo) 1991 | 
            Secretario General del Cabildo Metropolitano de Caracas | 
            Presidente de la Comisi??n de Legislaci??n del Cabildo Metropolitano de Caracas | 
            Jefe de la Fracci??n Parlamentaria del Movimiento Primero Justicia | 
            Secretario Nacional de Organizaci??n del Movimiento Primero Justicia (2007-2008) | 
            Miembro Directivo de la Fundaci??n Justicia y Democracia (2008-2009) | 
            Jefe de Campa??a del Alcalde Ram??n Muchacho (2013) | 
            Jefe de Campa??a del Alcalde Gustavo Duque (2017) | 
            Presidente del Colegio de Polit??logos de Venezuela | 
            Miembro de la Direcci??n Nacional del Movimiento Primero Justicia | 
            Secretario de Gobierno de la Alcald??a del Municipio Chacao</p>
          <div>
          <Button className="botonCargos" color="warning" onClick={toggleModal}>Cargos Ocupados</Button>
          <Modal className="modalExp" isOpen={modal} toggle={toggleModal} >
            <ModalHeader toggle={toggleModal}>Cargos Ocupados</ModalHeader>
            <ModalBody>
            <p className="itemModal">Jefe nacional de activismo pol??tico de Acci??n democr??tica.</p>
            <p className="itemModal">Presidente del Centro de estudiantes de la escuela de Estudios Pol??ticos y Administrativos.</p>
            <p className="itemModal">Representante estudiantil ante el concejo de escuela de la Escuela de Estudios Pol??ticos y administrativos.</p>
            <p className="itemModal">Representante estudiantil ante el concejo Universitario de la Universidad Central de Venezuela.</p>
            <p className="itemModal">Licenciado en Ciencias Pol??ticas y Administrativas (Polit??logo) 1991.</p>
            <p className="itemModal">Secretario General del Cabildo Metropolitano de Caracas.</p> 
            <p className="itemModal">Presidente de la Comisi??n de Legislaci??n del Cabildo Metropolitano de Caracas.</p> 
            <p className="itemModal">Jefe de la Fracci??n Parlamentaria del Movimiento Primero Justicia.</p> 
            <p className="itemModal">Secretario Nacional de Organizaci??n del Movimiento Primero Justicia (2007-2008).</p> 
            <p className="itemModal"> Miembro Directivo de la Fundaci??n Justicia y Democracia (2008-2009).</p>
            <p className="itemModal">Jefe de Campa??a del Alcalde Ram??n Muchacho (2013).</p> 
            <p className="itemModal">Jefe de Campa??a del Alcalde Gustavo Duque (2017)</p> 
            <p className="itemModal">Presidente del Colegio de Polit??logos de Venezuela. </p> 
            <p className="itemModal">Miembro de la Direcci??n Nacional del Movimiento Primero Justicia.</p> 
            <p className="itemModal">Secretario de Gobierno de la Alcald??a del Municipio Chacao.</p> 
            </ModalBody>
            <ModalFooter>
              <Button className="cerrarBtn" color="warning" onClick={toggleModal}>Cerrar</Button>
            </ModalFooter>
          </Modal>
          </div>
        </div>
      </div>

      <div className="lineaAmarilla2"> </div>

      <div id="areasInteres" className="areasInteres">
        <ScrollAnimation delay={200} animateOnce={true} animateIn='fadeIn'>  
          <p  className="tituloAreasInteres">??reas de inter??s</p>
        </ScrollAnimation> 
        <ScrollAnimation delay={200} animateOnce={true} animateIn='fadeIn'>  

          <Container className="listaAreas">
            <Row>
              <Col  md="3"></Col>
              <Col className="primerItemAreas" md="4">
                <p className="itemAreas">Seguridad</p>
              </Col>
              <Col className="segundoItemAreas" md="4">
                <p className="itemAreas">Salud</p>
              </Col>
            </Row>
            <Row>
            <Col  md="3"></Col>
              <Col className="primerItemAreas" md="4">
                <p className="itemAreas">Orden</p>
              </Col>
              <Col className="segundoItemAreas" md="4">
                <p className="itemAreas">Educaci??n</p>
              </Col>
            </Row>
            <Row>
            <Col  md="3"></Col>
              <Col className="primerItemAreas" md="4">
                <p className="itemAreas">Responsabilidad social</p>
              </Col>
            </Row>
          </Container>                
        </ScrollAnimation>
      </div>

      <ScrollAnimation delay={100} animateOnce={true} animateIn='fadeIn'>          
        <div id="principios" className="principios">
          <p className="tituloPrincipios">Principios</p>
          <Row className="rowPrincipios">
            <Col className="principios1Col"  md="3"> 
              <img className="principios1" src={principios1} alt="principios1"></img>
              <p className="principiosSubtitle principiosSubtittle1">Trabajo</p>
            </Col>
            <Col className="principios2Col" md="3"> 
              <img className="principios2" src={principios2} alt="principios2"></img>
              <p className="principiosSubtitle principiosSubtittle2">Justicia</p>
            </Col>
            <Col className="principios3Col" md="3"> 
              <img className="principios3" src={principios3} alt="principios3"></img>
              <p className="principiosSubtitle principiosSubtittle3">Honestidad</p>
            </Col>
            <Col className="principios4Col" md="3"> 
              <img className="principios4" src={principios4} alt="principios4"></img>
              <p className="principiosSubtitle principiosSubtittle4">Gerencia</p>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>

      <div className="lineaAmarilla3"> </div>
      <div className="imagenGrupo" ></div>
      <div className="lineaAmarilla3"> </div>
      
      <div className="footer">
        <img id="uneteFooter" className="uneteFooter" onMouseOut={changeUneteFooter0} onMouseOver={changeUneteFooter1} onClick={toggleModalUnete} src={uneteFooter} alt="uneteFooter"></img>
        <img className="logoFooter" src={logoFooter} alt="logoFooter"></img> 
        <p className="siguenos animated infinite pulse delay-2s ">S??guenos</p>
        <img  onClick={openInstagram} className="instagram" id="instagram" onMouseOut={changeI0} onMouseOver={changeI1} src={instagram} alt="instagram"></img>
        <img  onClick={openFacebook} className="facebook"  id="facebook" onMouseOut={changeF0} onMouseOver={changeF1} src={facebook} alt="facebook"></img>
        <img  onClick={openTwitter} className="twitter"  id="twitter" onMouseOut={changeT0} onMouseOver={changeT1} src={twitter} alt="twitter"></img>
        <img  onClick={openYoutube} className="youtube"  id="youtube" onMouseOut={changeY0} onMouseOver={changeY1} src={youtube} alt="youtube"></img>
      </div>

 



    {/* modal unete */}

    {/* <Button color="warning" onClick={toggleModalUnete}>Cargos Ocupados</Button> */}
          <Modal className="modalContent" isOpen={modalUnete} toggle={toggleModalUnete} >
            <ModalHeader className="modalHeader" toggle={toggleModalUnete}></ModalHeader>
            <ModalBody>
              {/* <div className="modalBody"> </div> */}
              <img className="modalUneteImg" id="modalUneteImg" src={modalUneteImg} alt="modalUneteImg"></img>
              <Input onChange={changeUnete} className="inputModal" type="text" name="nombre" id="nombre" placeholder="Tu nombre y apellido aqu??" />
              <Input onChange={changeUnete} className="inputModal" type="email" name="email" id="email" placeholder="Tu correo aqu??" />
              <p className="textUneteModal">??nete</p>
              <Button id="enviarModal" color="warning" className="enviarModal" onClick={enviarModal}>Enviar</Button>
              {/* <p id="enviarModal" onClick={enviarModal} className="enviarModal">Enviar</p> */}
            </ModalBody>
            <ModalFooter className="modalFooter" >
              <Button color="secondary" onClick={toggleModalUnete}>Cerrar</Button>
            </ModalFooter>
          </Modal>

          {/* <ReCaptcha
          ref={recaptcha}
          sitekey="6LdaYtEUAAAAAGIpnw86j-N5Sz15Iz5fIdziIqsm"
          onError={console.error.bind(console)}
          onLoad={() => {
            console.log("hey")
          }}/> */}
    {/* modal correo enviado */}

    {/* <Button color="warning" onClick={toggleModalUnete}>Cargos Ocupados</Button> */}
    <Modal className="modalEnviadoContent" isOpen={modalEnviado} toggle={toggleModalEnviado} >
            <ModalHeader className="modalHeader" toggle={toggleModalEnviado}></ModalHeader>
            <ModalBody>
              <p className="textModalEnviado1">Muchas Gracias!!</p>            
              <p className="textModalEnviado2">Su solicitud ha sido enviada exitosamente.</p>
            </ModalBody>
            <ModalFooter className="modalEnviadoFooter" >
              <Button color="warning" onClick={toggleModalEnviado}>Entendido!</Button>
            </ModalFooter>
          </Modal>
          <Circle color={'#e3b419'} background="#00000e"/>
    </div>
  );
}

export default App;
