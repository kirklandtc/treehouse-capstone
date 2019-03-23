import React, { Component } from 'react'
import { NavDropdown, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Card } from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {

  render () {
    return (

<Navbar  collapseOnSelect expand="lg" bg="light" variant="dark">

  <a className="Navbar.Brand thb"><img src="assets2/thb-logo.svg" height= "40px"/></a>

  {/* <a className="navbar-brand"><img src="thb-logo.svg" alt="logo"></a> */}


  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Brand
    eventKey={1} as={Link} href="/" to="/">
        Home
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">


    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
    <Navbar.Brand eventKey={2} as={Link} href="/about" to="/about">
        About
    </Navbar.Brand>

     <Navbar.Brand eventKey={3} as={Link} href="/news" to="/news">
        Build
     </Navbar.Brand>

     <Navbar.Brand eventKey={4} as={Link} href="/contact" to="/contact">
        Contact
     </Navbar.Brand>

     <Navbar.Brand eventKey={5} as={Link} href="/plans" to="/plans">
        Buy Plans

     </Navbar.Brand>

     <Navbar.Brand eventKey={6} as={Link} href="/reviews" to="/reviews">
        Reviews

     </Navbar.Brand>

     </Nav>

  </Navbar.Collapse>

</Navbar>



    )
  }
}

export default CustomNavbar
