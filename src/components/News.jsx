import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Photo4 from '../assets/THIRD HEADER.jpg';

import './News.css';


class News extends Component {
  render() {
    return (
      <div>
        <Image src={Photo4} className="header-image" />
        <Container-Fluid>
          <Col xs={12} sm={8} smOffset={2}>
            {/* <Image src="assets/USETHIScarpenter-carpentry-close-up-1094770 Cropped.jpg" className="about-profile-pic" /> */}
            <h3>Build</h3>
            <br></br>
            <Card>
              <Card.Body>
            <p>-We discuss your ideas by phone or in person (preferred), and address your budget for the ultimate treehouse</p>
            <p>-We meet to determine a suitable tree (or stand-alone location) for the treehouse within your yard</p>

            <p>-We discuss available features and any options</p>
            <p>-Treehouse Boulder will send all sketches and a custom proposal for the project, including a materials list and timing</p>
            <p>-When your family is ready to go we ask for a 10% deposit and choose a start date for kicking off your project</p>
            <p>-Construction will typically be completed in under 7 days, depending if any permits were needed prior to construction</p>
            <p>-We meet for a final walk-through and safety inspection, making sure all construction meets your expectations</p>
              </Card.Body>
            </Card>
            <div>
              <br></br>
            <p>We will of course discuss any potential concerns prior to starting construction. Again we want this to be a
              great experience for you and your family -and we want your neighbors to be jealous!</p>
            </div>

            {/* <Card>
              <Card.Body><i>-Mike Elliot: A former Marine, Mike has worked as a carpenter on custom homes for years. Currently living out his dream desigining and building
                custom treehouses, Mike intends to keep swinging a hammer into his 80's and beyond!</i></Card.Body>
            </Card> */}

          </Col>
        </Container-Fluid>

        <Image src="assets2/board-carpenter-carpentry-271628 Cropped (1).jpg" className="kitten" fluid className="shadow-lg p-0 mb-5"/>
      </div>
    )
  }
}


export default News
