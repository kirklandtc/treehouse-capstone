import React, { Component } from 'react'
import { NavDropdown, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';


// import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      <Container-Fluid>
      <Footer class="fixed-bottom navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container">
          <h3>
          Treehouse Boulder 2019 all rights reserved.
          </h3>
        </div>
      </Footer>
    </Container-Fluid>

    );
  }
}
