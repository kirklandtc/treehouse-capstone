import React, { Component } from 'react';
import { Container, Col, Image, Card } from 'react-bootstrap'
import Photo2 from '../assets/USETHISHEADERDepositphotos_131701088_xl-2015 Cropped.jpg';
import './About.css'






export default class About extends Component {
  render() {
    return (
      <div>
        <Image src={Photo2} className="header-image" />
        <Container-Fluid>
          <Col xs={12} sm={8} smOffset={2}>
            {/* <Image src="assets/USETHIScarpenter-carpentry-close-up-1094770 Cropped.jpg" className="about-profile-pic" /> */}
            <h3>About Us: the Treehouse Boulder team </h3>
            <p>Building treehouses is no joke- we take our work seriously. As serious as you can be when building a treehouse!</p>
            <p>Our focus is on the customer, from initial meeting to handing over the keys to your new treehouse, we operate with you in mind.
              Working with Treehouse Boulder is a process designed to be drama-free from the start. We make sure to relay all relevant detail upfront so there are no surprises when work is complete.
              Treehouse Boulder has built projects all over the front range. We occasionally accept jobs as far away as Grand Junction so give us a call and lets talk about your idea!
              With a combined 45 years in the construciton industry Mike and Dan are true experts in their field.</p>

              <Card>
                <Card.Body><i>-Mike Elliot: A former Marine, Mike has worked as a carpenter on custom homes for years. Currently living out his dream desigining and building
                  custom treehouses, Mike intends to keep swinging a hammer into his 80's and beyond!</i></Card.Body>
              </Card>
              <br></br>

              <Card>
                <Card.Body><i>-Dan Williams: As a project manager on large construcion projects in the past, Dan always dreamed of a buisness where he could use his
                  creativity and imagination to focus on legendary treehouses! Dan is a Colorado
                  native and understands the unique opportunity we have in the Boulder area to enjoy life outdoors and in our backyards!</i></Card.Body>
              </Card>
              <br></br>
              
          </Col>
        </Container-Fluid>
        <Image src="assets2/carpenter-carpentry-close-up-1094770 Cropped (1).jpg" className="kitten" fluid className="shadow-lg p-0 mb-5"/>
      </div>

    )
  }
}
