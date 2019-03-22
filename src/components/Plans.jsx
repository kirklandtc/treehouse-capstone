import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, CardDeck, Button } from 'react-bootstrap';

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
            <p>Want to take your carpentry sills to the next level? Buy one of our custom plans right here at Treehouse Boulder!
             All plans are fully rendered architectutral drawings developed in collaboration with our
             carpentry team, rolled up and delivered to your home.
             All materials lists are included with general cost estimates and reccomendations.</p>
            <p>See how easy it is to create a little tree right in your world. I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. Very easy to work these to death. Making all those little fluffies that live in the clouds.</p>
          </Col>

<CardDeck>
 <Card border="info">
   <Card.Img variant="top" src="assets2/TREEHOUSE-5Depositphotos_174224972_l-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This is a wider card with supporting text below as a natural lead-in to
       additional content. This content is a little bit longer.
     </Card.Text>
   </Card.Body>


  <br></br>
   <Card.Footer>
     <Button variant="info">Buy!</Button>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.Footer>
 </Card>
 <Card border="info">
   <Card.Img variant="top" src="assets2/NEWTREEHOUSE-1Depositphotos_61427235_l-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This card has supporting text below as a natural lead-in to additional
       content.{' '}
     </Card.Text>
   </Card.Body>


  <br></br>

   <Card.Footer>
     <Button variant="info">Buy!</Button>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.Footer>
 </Card>
 <Card border="info">
   <Card.Img variant="top" src="assets2/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>Card title</Card.Title>
     <Card.Text>
       This is a wider card with supporting text below as a natural lead-in to
       additional content. This card has even longer content than the first to
       show that equal height action.
     </Card.Text>
   </Card.Body>

   <br></br>
   <Card.Footer>
     <Button variant="info">Buy!</Button>
     <small className="text-muted">Last updated 3 mins ago</small>
   </Card.Footer>
 </Card>
</CardDeck>
<br></br>



</Container-Fluid>
      </div>
    )
  }
}


export default Plans
