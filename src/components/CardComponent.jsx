import React, { Component } from 'react'
import { Jumbotron, Card, CardDeck, Grid, Row, Col, Image, Button } from 'react-bootstrap';
class CardComponent extends Component {
  render(){
    return(

      <Card border="info">
        <Card.Img variant="top" src="assets2/USETHISTREEHOUSE-2Depositphotos_31389319_xl-2015 Cropped.jpg"/>
        <Card.Body>
          <Card.Title>{this.props.treehouse.model}</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>




    )
  }
}
export default CardComponent
