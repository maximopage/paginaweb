import React, { useState } from 'react';
import logo from './Assets/logo.svg';
import navUnete from './Assets/navUnete.svg';
import variosLayer from './Assets/variosLayer.svg';
import imagenPrincipal from './Assets/imagenPrincipal.png'; 
import imagenConoceme from './Assets/imagenConoceme.png';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row, 
  Col,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from 'reactstrap';

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

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

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <div className="App">

      <Navbar className="rectangulo" color="light" light expand="md">
        <NavbarBrand href="/"> <img className="logo" src={logo} alt="logo"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='marginNav'>
              <NavLink  href="#">Conóceme</NavLink>
            </NavItem>
            <NavItem className='marginNav'>
              <NavLink  href="#">Experiencia</NavLink>
            </NavItem>
            <NavItem className='marginNav'>
              <NavLink  href="#">Áreas de interés</NavLink>
            </NavItem>
            <NavItem className='marginNav'>
              <NavLink  href="#">Principios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="#"> <img className="navUnete" src={navUnete} alt="navUnete"></img></NavLink>
            </NavItem>
          </Nav> 
        </Collapse>
      </Navbar>
      <div className="fondoAmarillo">
        <img className="imagenPrincipal" src={imagenPrincipal} alt="imagenPrincipal"></img>
      </div>

      <div className="conoceme">
        <img className="imagenConoceme" src={imagenConoceme} alt="imagenConoceme"></img>
        <p className="conocemeTitulo">Conóceme</p>
        <p className="conocemeTxt">
          Máximo Sánchez Brandt es un político de centro, graduado 
          de la Universidad Central de Venezuela. Ha desempeñado distintos 
          cargos políticos y administrativos para varios entes públicos.
        </p>
      </div>

      <div className="experiencia">
        <div className="gradienteExp">
          <img className="variosLayer" src={variosLayer} alt="variosLayer"></img>
        </div>
        <div className="imagenExperiencia"> 
          <p className="experienciaTitulo">Experiencia </p>
          <Container className="historia">
          <img className="variosLayer2" src={variosLayer} alt="variosLayer"></img>
            <Row>
              <Col md="3">
                <div className="hist1">
                  <p className="fecha">1982 - 1983</p>
                  <p className="fechaTexto">Supervisor Control de calidad Oficina de Estadística e Información </p>
                  <div className="lineaAmarilla"></div>
                </div>
              </Col>  
              <Col md="3">
                <div className="lineaVertical"></div>
                <div className="hist2">
                  <p className="fecha">1995 - 1999</p>
                  <p className="fechaTexto">Jefe de la División de Regiones de la Fiscalía General de Cedulación
                  del Consejo Nacional Electoral. </p>
                  <div className="lineaAmarilla"></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="hist1">
                  <p className="fecha">1991 - 1995</p>
                  <p className="fechaTexto">Director de la Oficina de Identificación y Extranjeria  </p>
                  <div className="lineaAmarilla"></div>
                </div>
              </Col>
              <Col md="3">
                <div className="hist2">
                  <p className="fecha">2000 - 2017</p>
                  <p className="fechaTexto">Concejal Metropolitano de Caracas</p>
                  <div className="lineaAmarilla"></div>
                </div>
              </Col>
            </Row>
          </Container>
          <p className="subtituloHistoria">Cargos Ocupados: </p>
          <p className="subtextoHistoria">Secretario General del Cabildo Metropolitano de Caracas | Presidente de 
          la Comisión de Legislación del Cabildo Metropolitano de Caracas | Jefe de la Fracción Parlamentaria 
          del Movimiento Primero Justicia Secretario Nacional de Organización del Movimiento Primero Justicia 
          (2007-2008). | Miembro Directivo de la Fundación Justicia y Democracia. (2008-2009) | Jefe de Campaña 
          del Alcalde Ramón Muchacho (2013). Jefe de Campaña del Alcalde Gustavo Duque (2017) | Presidente del
          Colegio de Politólogos de Venezuela (Actualmente) | Miembro de la Dirección Nacional del Movimiento Primero 
          Justicia (Actualmente) | Secretario de Gobierno del Municipio Chacao (Actualmente)</p>
          <div>
          <Button className="botonCargos" color="warning" onClick={toggleModal}>Cargos Ocupados</Button>
          <Modal isOpen={modal} toggle={toggleModal} className={className}>
            <ModalHeader toggle={toggleModal}>Cargos Ocupados</ModalHeader>
            <ModalBody>
            Secretario General del Cabildo Metropolitano de Caracas | Presidente de 
              la Comisión de Legislación del Cabildo Metropolitano de Caracas | Jefe de la Fracción Parlamentaria 
              del Movimiento Primero Justicia Secretario Nacional de Organización del Movimiento Primero Justicia 
              (2007-2008). | Miembro Directivo de la Fundación Justicia y Democracia. (2008-2009) | Jefe de Campaña 
              del Alcalde Ramón Muchacho (2013). Jefe de Campaña del Alcalde Gustavo Duque (2017) | Presidente del
              Colegio de Politólogos de Venezuela (Actualmente) | Miembro de la Dirección Nacional del Movimiento Primero 
              Justicia (Actualmente) | Secretario de Gobierno del Municipio Chacao (Actualmente)
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleModal}>Cerrar</Button>
            </ModalFooter>
          </Modal>
          </div>
        </div>
      </div>

      <div className="areasInteres">
        <p  className="tituloAreasInteres">Áreas de interés</p>
        <Container className="listaAreas">
          <Row>
            <Col  md="4"></Col>
            <Col className="primerItemAreas" md="4">
              <p className="itemAreas">Seguridad</p>
            </Col>
            <Col md="4">
              <p className="itemAreas">Salud</p>
            </Col>
          </Row>
          <Row>
          <Col  md="4"></Col>
            <Col className="primerItemAreas" md="4">
              <p className="itemAreas">Orden</p>
            </Col>
            <Col md="4">
              <p className="itemAreas">Educación</p>
            </Col>
          </Row>
          <Row>
          <Col  md="4"></Col>
            <Col className="primerItemAreas" md="4">
              <p className="itemAreas">Responsabilidad social</p>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default App;
