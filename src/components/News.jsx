import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './News.css';


class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/USETHISHEADER@Depositphotos_19710159_xl-2015.jpg" className="header-image" />
        <Container-Fluid>
          <Col xs={12} sm={8} smOffset={2}>
            {/* <Image src="assets/USETHIScarpenter-carpentry-close-up-1094770 Cropped.jpg" className="about-profile-pic" /> */}
            <h3>News</h3>
            <p>If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. Zip. That easy. Just think about these things in your mind and drop em' on canvas. We need a shadow side and a highlight side. Don't kill all your dark areas - you need them to show the light. Just relax and let it flow. That easy.</p>
            <p>See how easy it is to create a little tree right in your world. I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. Very easy to work these to death. Making all those little fluffies that live in the clouds.</p>


          </Col>
        </Container-Fluid>
      </div>
    )
  }
}


export default News
