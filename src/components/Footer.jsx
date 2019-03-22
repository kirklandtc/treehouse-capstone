import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';


// import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      // <Container fluid={true}>
      <footer collapseonselect bg="light" variant="light">


        <div className="container">
          <div class="p-2 mb-1 text-white">© Treehouse Boulder 2019</div>

        {/* <h5>
          © Treehouse Boulder 2019
        </h5> */}
        </div>
      </footer>
    // </Container>

  );
  }
}
