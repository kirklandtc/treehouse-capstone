import React, { Component } from 'react';
import { Container, Col, Image, Card, CardColumns } from 'react-bootstrap'
import Photo2 from '../assets/MOUNTAIN HEADER.jpg';
import './Reviews.css'
import ReviewsJunior from './ReviewsJunior';




export default class Reviews extends Component {

  state={
    reviews:[]
  }

  async componentDidMount(){
  const data=await fetch('http://localhost:3005/reviews')
  const reviews=await data.json()
  this.setState({
    reviews:reviews
  })
  console.log("hello",reviews)
      console.log("this.state[0].body",this.state.reviews[0].body)
}



  render() {


    return (
      <div>

        <Image src={Photo2} className="header-image" />
        <Container-Fluid>
          <Col xs={12} sm={8} smOffset={2}>
            {/* <Image src="assets/USETHIScarpenter-carpentry-close-up-1094770 Cropped.jpg" className="about-profile-pic" /> */}
            <h3>Reviews: the Treehouse Boulder team </h3>
            <p>If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. Zip. That easy. Just think about these things in your mind and drop em' on canvas. We need a shadow side and a highlight side. Don't kill all your dark areas - you need them to show the light. Just relax and let it flow. That easy.</p>
            <p>See how easy it is to create a little tree right in your world. I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. Very easy to work these to death. Making all those little fluffies that live in the clouds.</p>


          </Col>
        </Container-Fluid>

        <CardColumns>
          <ReviewsJunior
            reviews={this.state.reviews}
            review0={this.state.reviews[0]}
            review1={this.state.reviews[1]}
            review2={this.state.reviews[2]}
          />


          {/* <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
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
          </Card> */}
{/*
          <Card bg="info" text="white" className="text-center p-3">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card> */}

        </CardColumns>
        <br></br>

        <Image src="assets2/carpenter-carpentry-close-up-1094770 Cropped (1).jpg" className="kitten" fluid className="shadow-lg p-0 mb-5"/>
      </div>

    )
  }
}
