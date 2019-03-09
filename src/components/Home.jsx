import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Container-Fluid>
        <Jumbotron>
          <h2>Treehouse</h2>
          <p>The Best Way to TreeHouse</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" square className="profile-pic"/>
            <h3>Wood</h3>
            <p></p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" square className="profile-pic"/>
            <h3>Carpenter</h3>
            <p>T</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" square className="profile-pic"/>
            <h3>Carpenter 2</h3>
            <p>Placeholder</p>
          </Col>
        </Row>
      </Container-Fluid>
    )
  }
}
