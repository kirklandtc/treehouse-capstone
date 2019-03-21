import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Card, CardDeck, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Container-Fluid>
        <Jumbotron>
          <h2>Treehouse</h2>
          <p>The Best Way to TreeHouse</p>

          <p>This painting comes right out of your heart. Clouds are free.
            They just float around the sky all day and have fun.
            Think about a cloud. Just float around and be there. The little tiny Tim easels will let you down.
            Isn't that fantastic? Mix your color marbly don't mix it dead.</p>

          <p>Tree trunks grow however makes them happy.
            We must be quiet, soft and gentle. There isn't a rule.
            You just practice and find out which way works best for you.</p>

          <Link to="/about">
            <Button variant="info">Learn More</Button>
          </Link>
        </Jumbotron>
        {/* <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets2/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" square className="profile-pic"/>
            <h3>Alpha</h3>
            <p><p>Tree trunks grow however makes them happy. We must be quiet, soft and gentle. There isn't a rule. You just practice and find out which way works best for you.</p>
          </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets2/USETHIS2TREEHOUSE-3Depositphotos_135854308_xl-2015 Cropped.jpg" square className="profile-pic"/>
            <h3>Bravo</h3>
            <p><p>Tree trunks grow however makes them happy. We must be quiet, soft and gentle. There isn't a rule. You just practice and find out which way works best for you.</p>
          </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets2/TREEHOUSE-5Depositphotos_174224972_l-2015 Cropped.jpg" square className="profile-pic"/>
            <h3>Charlie</h3>
            <p><p>Tree trunks grow however makes them happy. We must be quiet, soft and gentle. There isn't a rule. You just practice and find out which way works best for you.</p>
          </p>
          </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets2/NEWTREEHOUSE-1Depositphotos_61427235_l-2015 Cropped.jpg" square className="profile-pic"/>
            <h3>Delta</h3>
            <p><p>Tree trunks grow however makes them happy. We must be quiet, soft and gentle. There isn't a rule. You just practice and find out which way works best for you.</p>
          </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets2/TREEHOUSE-8Depositphotos_5592661_xl-2015 Cropped.jpg" square className="profile-pic"/>
            <h3>Echo</h3>
            <p>This is the treehouse for the child who has everything</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets2/FREEtree-2254979_960_720 Cropped.jpg" square className="profile-pic"/>
            <h3>Foxtrot</h3>
            <p><p>Tree trunks grow however makes them happy. We must be quiet, soft and gentle. There isn't a rule. You just practice and find out which way works best for you.</p>
          </p>
          </Col>
        </Row> */}
        <Row>

  <CardDeck>
  <Card border="info">
    <Card.Img variant="top" src="assets2/FREEtree-2254979_960_720 Cropped.jpg" />
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
  <Card border="info">
    <Card.Img variant="top" src="assets2/USETHISTREEHOUSE-2Depositphotos_31389319_xl-2015 Cropped.jpg"/>
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
  <Card border="info">
    <Card.Img variant="top" src="assets2/TREEHOUSE-8Depositphotos_5592661_xl-2015 Cropped.jpg"/>
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
    <Card.Footer>
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
    <Card.Footer>
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
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>;


        </Row>
      </Container-Fluid>
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
