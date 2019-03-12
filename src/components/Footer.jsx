import React, { Component } from 'react'
import { NavDropdown, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>© Company 2014</p>
        </footer>
      </Grid>
    );
  }
}
