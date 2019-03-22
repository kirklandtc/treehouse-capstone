import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';


// import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      // <Container fluid={true}>
      <footer class="">
        <div class="container">
          <h3>
          Treehouse Boulder 2019 all rights reserved.
          </h3>
        </div>
      </footer>
    // </Container>

  );
  }
}
