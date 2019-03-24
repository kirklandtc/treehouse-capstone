import React from 'react'
import '../App.css'
import { Card } from 'react-bootstrap';

const ReviewsJunior = (props) => {
  console.log('props in ReviewsJunior::', props)
  return (
    <div>

{
  props.reviews.map((review)=>
    <div key={review.id}>

      <Card bg="info" text="white" className="text-center p-3">
        <Card.Body>
          <Card.Title>"{review.name}"</Card.Title>
          <Card.Text>
            {review.body}{' '}
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Becky - Westminister</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
)
}


    </div>
  )
}
export default ReviewsJunior
{/* <Card bg="info" text="white" className="text-center p-3">
  <blockquote className="blockquote mb-0 card-body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.
    </p>
    <footer className="blockquote-footer">
      <small className="text-muted">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </small>
    </footer>
  </blockquote>
</Card>

<Card bg="info" text="white" className="text-center p-3">
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to additional
      content.{' '}
    </Card.Text>
    <Card.Text>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Text>
  </Card.Body>
</Card>


<Card bg="info" text="white" className="text-center p-3">
  <blockquote className="blockquote mb-0 card-body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.
    </p>
    <footer className="blockquote-footer">
      <small className="text-muted">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </small>
    </footer>
  </blockquote>
</Card> */}
