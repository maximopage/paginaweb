import React, { useState, useEffect} from 'react';
import logo from './Assets/logo.svg';
import navUnete from './Assets/navUnete.svg';
import variosLayer from './Assets/variosLayer.svg';
import imagenConoceme from './Assets/imagenConoceme.png';
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
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-google";
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
  var recaptcha = React.createRef();
  useEffect(() => {
    loadReCaptcha();
  });

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
        <p  onClick={toggleModalUnete} className="uneteMobile">ÚNETE</p>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='marginNav'>
              <NavLink  href="#conoceme">Conóceme</NavLink>
            </NavItem>
            <NavItem className='marginNav'>
              <NavLink  href="#experiencia">Experiencia</NavLink>
            </NavItem>
            <NavItem className='marginNav'>
              <NavLink  href="#areasInteres">Áreas de interés</NavLink>
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
        <p className="conocemeTitulo">Conóceme</p>
        <p className="conocemeTxt">
          Máximo Sánchez Brandt es un político de centro, graduado 
          de la Universidad Central de Venezuela. Ha desempeñado distintos 
          cargos políticos y administrativos para varios entes públicos.
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
                  <p className="fecha">2020 </p>
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
                  <p className="fechaTexto">Secretario de Gobierno de la Alcaldía del Municipio Chacao. </p>
                  <div className="lineaAmarilla"></div>
                </div>
              </Col>
              <Col md="3">
                <div className="hist2">
                  <p className="fecha">1995 - 1999</p>
                  <p className="fechaTexto">Jefe de la División de Regiones de la Fiscalía General de Cedulación del Concejo Nacional Electoral.</p>
                  <div className="lineaAmarilla lineaaux"></div>
                </div>
              </Col>
            </Row>
          </Container>
          <p className="subtituloHistoria">Cargos Ocupados: </p>
          <p className="subtextoHistoria"> 
            Secretario General del Cabildo Metropolitano de Caracas |
            Presidente de la Comisión de Legislación del Cabildo Metropolitano de Caracas | 
            Jefe de la Fracción Parlamentaria del Movimiento Primero Justicia |
            Secretario Nacional de Organización del Movimiento Primero Justicia (2007-2008). |
            Miembro Directivo de la Fundación Justicia y Democracia. (2008-2009) | 
            Jefe de Campaña del Alcalde Ramón Muchacho (2013). | 
            Jefe de Campaña del Alcalde Gustavo Duque (2017) | 
            Presidente del Colegio de Politólogos de Venezuela | 
            Miembro de la Dirección Nacional del Movimiento Primero Justicia |
            Secretario de Gobierno de la Alcaldía del Municipio Chacao</p>
          <div>
          <Button className="botonCargos" color="warning" onClick={toggleModal}>Cargos Ocupados</Button>
          <Modal isOpen={modal} toggle={toggleModal} >
            <ModalHeader toggle={toggleModal}>Cargos Ocupados</ModalHeader>
            <ModalBody>
            <p className="itemModal">Secretario General del Cabildo Metropolitano de Caracas.</p>
            <p className="itemModal">Presidente de la Comisión de Legislación del Cabildo Metropolitano de Caracas.</p> 
            <p className="itemModal">Jefe de la Fracción Parlamentaria del Movimiento Primero Justicia.</p> 
            <p className="itemModal">Secretario Nacional de Organización del Movimiento Primero Justicia (2007-2008).</p> 
            <p className="itemModal"> Miembro Directivo de la Fundación Justicia y Democracia (2008-2009).</p> 
            <p className="itemModal"> Jefe de Campaña del Alcalde Ramón Muchacho (2013). </p> 
            <p className="itemModal"> Jefe de Campaña del Alcalde Gustavo Duque (2017). </p> 
            <p className="itemModal"> Presidente del Colegio de Politólogos de Venezuela. </p> 
            <p className="itemModal"> Miembro de la Dirección Nacional del Movimiento Primero Justicia.</p> 
            <p className="itemModal"> Secretario de Gobierno del Municipio Chacao.</p> 
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
          <p  className="tituloAreasInteres">Áreas de interés</p>
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
                <p className="itemAreas">Educación</p>
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
        <p className="siguenos animated infinite pulse delay-2s ">Síguenos</p>
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
              <Input onChange={changeUnete} className="inputModal" type="text" name="nombre" id="nombre" placeholder="Tu nombre y apellido aquí" />
              <Input onChange={changeUnete} className="inputModal" type="email" name="email" id="email" placeholder="Tu correo aquí" />
              <p className="textUneteModal">Únete</p>
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
