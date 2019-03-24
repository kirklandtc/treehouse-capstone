import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Card, CardDeck, Grid, Row, Col, Image, Button, Container } from 'react-bootstrap';
import './Home.css';
import CardComponent from './CardComponent';

export default class Home extends Component {
  render() {
      console.log("hello")
    return (
      <Container fluid={true}>
        <Jumbotron>
          <br></br>
          <h2>Treehouse Boulder</h2>
          <p>The Best Way to TreeHouse</p>

          <p>Welcome to Treehouse Boulder- your source for the finest hand-crafted custom treehouse available!
            Take a few minutes to explore our treehouse options for your entire family.
            Treehouses aren't just for kids anymore! The sky is the limit (or maybe not) when it comes to what we can build in that empty tree in your backyard...</p>

          <p>The appeal of the treehouse is timeless, for some it instantly returns them to their childhood.
            For others it becomes a place to relax when their kids are elsewhere. What can we build for for you?</p>

          <p>Browse our current designs below, keeping in mind that we can customize any of these models or create something totally unique!</p>

          <Link to="/about">
            <Button variant="info">Learn More</Button>
          </Link>
        </Jumbotron>

        <Row>

  <CardDeck>
{/* {
  this.props.treehouses.map(treehouse=>{
    return <CardComponent treehouse={treehouse}/>
  })
} */}
  <Card border="info">
    <Card.Img variant="top" src="assets2/FREEtree-2254979_960_720 Cropped.jpg" />
    <Card.Body>
      <Card.Title>The Paramount</Card.Title>
      <Card.Text>
        Our most rustic design, The Paramount
        is built using reclaimed Colorado snow fencing. This treehouse features a true staircase
        providing a grand entry into the main lobby!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Starting at $5,500</small>
    </Card.Footer>
  </Card>
  <Card border="info">
    <Card.Img variant="top" src="assets2/USETHISTREEHOUSE-2Depositphotos_31389319_xl-2015 Cropped.jpg"/>
    <Card.Body>
      <Card.Title>The Sierra</Card.Title>
      <Card.Text>
        This treehouse is truly something special. This is one of our designs that includes a porch giving The Sierra
        a dramatic viewpoint over the expanse of your backyard. We've had many treehouse owners highly customize this design.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Starting at $5,500</small>
    </Card.Footer>
  </Card>
  <Card border="info">
    <Card.Img variant="top" src="assets2/TREEHOUSE-8Depositphotos_5592661_xl-2015 Cropped.jpg"/>
    <Card.Body>
      <Card.Title>The Olympic</Card.Title>
      <Card.Text>
        A truly robust and dynamic design, The Olympic provides both light and space in a treehouse that can accommodate a range of different trees
        -or even a freestanding platform.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Starting at $6,500</small>
    </Card.Footer>
  </Card>
</CardDeck>
<br></br>
<CardDeck>
  <Card border="info">
    <Card.Img variant="top" src="assets2/TREEHOUSE-5Depositphotos_174224972_l-2015 Cropped.jpg" />
    <Card.Body>
      <Card.Title>The Universal</Card.Title>
      <Card.Text>
        One of our most popular designs, The Universal fits perfectly in the corner of nearly any backyard.
        Shown with an optional half-door, we offer a number of exterior finish choices to enhance your property value.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Starting at $6,500</small>
    </Card.Footer>
  </Card>
  <Card border="info">
    <Card.Img variant="top" src="assets2/NEWTREEHOUSE-1Depositphotos_61427235_l-2015 Cropped.jpg" />
    <Card.Body>
      <Card.Title>The Commander</Card.Title>
      <Card.Text>
        Named The Commander for a reason, this design incorporates a
        half-wall on one side to encorage air to ground (imaginary) attacks!{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Starting at $5,500</small>
    </Card.Footer>
  </Card>
  <Card border="info">
    <Card.Img variant="top" src="assets2/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" />
    <Card.Body>
      <Card.Title>The Vanderbilt</Card.Title>
      <Card.Text>
        Our top of the line model, The Vanderbilt demonstrates what true opulence should
        look like (in a treehouse of course). Standard features include upgraded wood choices a porch (of course),
        and even shutters that close over the windows!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Starting at $7,500</small>
    </Card.Footer>
  </Card>
</CardDeck>
<br></br>


        </Row>
      </Container>
      /* <Container-Fluid>
      <footer class="fixed-bottom navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container">
          <h3>
          Treehouse Boulder 2019 all rights reserved.
          </h3>
        </div>
      </footer>
    </Container-Fluid> */


    )
  }
}
