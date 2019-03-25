import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, CardDeck, Button, Modal} from 'react-bootstrap';

import Photo5 from '../assets/SECOND HEADER.jpg';
import './Plans.css';


class Plans extends Component {
  render() {
    return (
      <div>
        <Image src={Photo5} className="header-image" />
        <Container-Fluid>
          <Col xs={12} sm={8} smOffset={2}>
            {/* <Image src="assets/USETHIScarpenter-carpentry-close-up-1094770 Cropped.jpg" className="about-profile-pic" /> */}
            <h3>Buy incredible treehouse plans here!</h3>
            <p>Want to take your carpentry sills to the next level? Buy one of our custom plans right here at Treehouse Boulder!
             All plans are fully rendered architectutral drawings developed in collaboration with our
             carpentry team, rolled up and delivered to your home.
             All materials lists are included with general cost estimates and reccomendations.</p>

          </Col>

<CardDeck>
 <Card border="info">
   <Card.Img variant="top" src="assets2/TREEHOUSE-5Depositphotos_174224972_l-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>The Universal</Card.Title>
     <Card.Text>
       Build The Universal on your own! This set includes 8 full size drawings, materials list and suggestions as well as patterns for various templates.
     </Card.Text>
   </Card.Body>


  <br></br>
   <Card.Footer>
     <Button variant="info">Buy!</Button>
     <small className="text-muted">  Click here to purchase The Universal</small>
   </Card.Footer>
 </Card>
 <Card border="info">
   <Card.Img variant="top" src="assets2/NEWTREEHOUSE-1Depositphotos_61427235_l-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>The Commander</Card.Title>
     <Card.Text>
       Take command of your neighborhood and show off your carpentry skills as you build The Commander! This set includes 9 full size drawings.{' '}
     </Card.Text>
   </Card.Body>


  <br></br>

   <Card.Footer>
     <Button variant="info">Buy!</Button>
     <small className="text-muted">  Click here to purchase The Commander</small>
   </Card.Footer>
 </Card>
 <Card border="info">
   <Card.Img variant="top" src="assets2/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" />
   <Card.Body>
     <Card.Title>The Vanderbilt</Card.Title>
     <Card.Text>
       Our most popular set of plans, The Vanderbilt set includes 8 full size drawings and all suggestions for premium lumber choices.
     </Card.Text>
   </Card.Body>

   <br></br>
   <Card.Footer>





     <Button variant="info">Buy!</Button>
     <small className="text-muted">  Click here to purchase The Vanderbilt</small>
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
