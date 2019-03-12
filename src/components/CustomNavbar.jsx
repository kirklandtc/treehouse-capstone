import React, { Component } from 'react'
import { NavDropdown, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {

  render () {
    return (
      // <Navbar default collapseOnSelect>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       <Link to="/">Treehouse</Link>
      //      </Navbar.Brand>
      //       <Navbar.Toggle />
      //       </Navbar.Header>
      //        <Navbar.Collapse>
      //      <Nav pullRight>
      //       <NavItem eventKey={1} componentClass={Link} href="/" to="/">
      //         Home
      //       </NavItem>
      //       <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
      //         About
      //       </NavItem>
      //       <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
      //         News
      //       </NavItem>
      //     </Nav>
      //   </Navbar.CollapseOnSelect>
      // </Navbar>

<Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Brand eventKey={1} componentClass={Link} href="/" to="/">
        Home
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}

        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
             </NavItem>
             <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                About
            </NavItem>
             <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                News
             </NavItem>


        {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        <NavDropdown.Divider />
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
     </Nav>
      {/* <Nav> */}
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
    </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
</Navbar>
    )
  }
}

export default CustomNavbar
