import React, { Component } from 'react'
import { Container, Col, Image, Row, Form, Button, Card, MBDIcon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Photo1 from '../assets/MAIN HEADER ALPHA Cropped.jpg';
import './Contact.css';

class Contact extends Component {

  render() {
    return (
      <div>
        <Image src={Photo1} className="header-image" />
        <Container-Fluid>
          <Col xs={12} sm={8} smOffset={2}>
            {/* <Image src="assets/USETHIScarpenter-carpentry-close-up-1094770 Cropped.jpg" className="about-profile-pic" /> */}
            <h3>*Contact Us Here!</h3>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle id="alpha" className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  <p>Treehouse Boulder</p>

          <p>100 Elk Avenue
          Boulder, CO 80040</p>
          <p>Phone: (303) 555-5510</p>
          <p>Email: treehouseboulder@gmail.com</p>




                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>







            <p>Fill out the form below to have the Treehouse Boulder team reach out to you directly. We promise to get back to you within 2 business days.</p>


          </Col>
           <Col>
          <Form>
            <Form.Row>


            <Form.Group as={Col} controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="fullName" placeholder="Full Name" />
            </Form.Group>



              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>


            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
             </Form.Row>

            <Form.Group id="formGridCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
              </Form.Group>

                {/* <Button variant="primary" type="submit"> */}
                <Button variant="info">Submit!</Button>


                {/* <MDBIcon icon="cog" spin size="3x" fixed />
                <span className="sr-only">Loading...</span> */}


                {/* </Button> */}
              </Form>
            </Col>
        </Container-Fluid>
          <br></br>
      </div>

    )
  }
}


export default Contact
