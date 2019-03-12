import React, { Component } from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {

  render() {
    return (
      <div>
        <Image src="assets/USETHISHEADERDepositphotos_131701088_xl-2015 Cropped.jpg" />
        <Container>
          <h2>Contact</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Let that brush dance around there and play. How to paint. That's easy. What to paint. That's much harder. A tree needs to be your friend if you're going to paint him.</p>
              <p>We must be quiet, soft and gentle. Talent is a pursued interest. That is to say, anything you practice you can do. Each highlight must have it's own private shadow. All you need is a dream in your heart, and an almighty knife.</p>
              <p>A thin paint will stick to a thick paint. Very easy to work these to death. When you do it your way you can go anywhere you choose. Just let this happen. We just let this flow right out of our minds. Just let these leaves jump off the brush</p>
              <p>Maybe there's a happy little bush that lives right there. And maybe a little bush lives there. Let's put some happy trees and bushes back in here. La- da- da- da- dah. Just be happy. There are no limits in this world. Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/USETHIScarpenter-carpentry-close-up-1094770 Cropped.jpg" />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Contact
