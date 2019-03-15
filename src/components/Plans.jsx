import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, CardDeck } from 'react-bootstrap';

import Photo5 from '../assets/USETHISHEADER4blue-sky-1639471 Cropped.jpg';
import './Plans.css';


class Plans extends Component {
  render() {
    return (
      <div>
        <Image src={Photo5} className="header-image" />
        <Container-Fluid>
          <Col xs={12} sm={8} smOffset={2}>
            {/* <Image src="assets/USETHIScarpenter-carpentry-close-up-1094770 Cropped.jpg" className="about-profile-pic" /> */}
            <h3>Buy incredible Treehouse plans here</h3>
            <p>If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. Zip. That easy. Just think about these things in your mind and drop em' on canvas. We need a shadow side and a highlight side. Don't kill all your dark areas - you need them to show the light. Just relax and let it flow. That easy.</p>
            <p>See how easy it is to create a little tree right in your world. I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. Very easy to work these to death. Making all those little fluffies that live in the clouds.</p>
          </Col>
          {/* <Container-Fluid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/USETHISTREEHOUSE-2Depositphotos_31389319_xl-2015 Cropped.jpg" square className="profile-pic"/>
              <h3>Wood</h3>
              <p></p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" square className="profile-pic"/>
              <h3>Carpenter</h3>
              <p>T</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/TREEHOUSE-5Depositphotos_174224972_l-2015 Cropped.jpg" square className="profile-pic"/>
              <h3>Carpenter 2</h3>
              <p>Placeholder</p>
            </Col>
          </Row>
         </Container-Fluid> */}

         <CardDeck>
 <Card>
   <Card.Img variant="top" src="assets2/TREEHOUSE-5Depositphotos_174224972_l-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This is a wider card with supporting text below as a natural lead-in to
       additional content. This content is a little bit longer.
     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.Footer>
 </Card>
 <Card>
   <Card.Img variant="top" src="assets2/NEWTREEHOUSE-1Depositphotos_61427235_l-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This card has supporting text below as a natural lead-in to additional
       content.{' '}
     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.Footer>
 </Card>
 <Card>
   <Card.Img variant="top" src="assets2/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This is a wider card with supporting text below as a natural lead-in to
       additional content. This card has even longer content than the first to
       show that equal height action.
     </Card.Text>
   </Card.Body>
   <Card.Footer>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.Footer>
 </Card>
</CardDeck>;



        </Container-Fluid>
      </div>
    )
  }
}


export default Plans
