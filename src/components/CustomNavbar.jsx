import React, { Component } from 'react'
import { NavDropdown, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Card } from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {

  render () {
    return (

<Navbar  collapseOnSelect expand="lg" bg="light" variant="dark">

  <a className1="Navbar.Brand"><img src="assets2/thb-logo.svg" height= "40px"/></a>

  {/* <a className="navbar-brand"><img src="thb-logo.svg" alt="logo"></a> */}


  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Brand
    eventKey={1} componentClass={Link} href="/" to="/">
        Home
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">


    <Nav className2="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
      <Navbar.Brand eventKey={2} componentClass={Link} href="/about" to="/about">
        About
     </Navbar.Brand>

     <Navbar.Brand eventKey={3} componentClass={Link} href="/news" to="/news">
        News
     </Navbar.Brand>

     <Navbar.Brand eventKey={4} componentClass={Link} href="/contact" to="/contact">
        Contact
     </Navbar.Brand>

     <Navbar.Brand eventKey={5} componentClass={Link} href="/plans" to="/plans">
        Buy Plans

     </Navbar.Brand>

     </Nav>

  </Navbar.Collapse>

</Navbar>



    )
  }
}

export default CustomNavbar
