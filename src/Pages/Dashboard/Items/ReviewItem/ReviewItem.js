import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ReviewItem = (props) => {
    const {name, email, rating, feedback}=props.review
    return (
        <div className="container">
            <Col className="shadow-lg">
                <Card >
                    {/* <Card.Img variant="top" src={img} /> */}
                    <Card.Body>
                        <Card.Title className="text-color fw-bold">{name}</Card.Title>
                        <div>
                            {/* <h6>Name: {props.order.name}</h6> */}
                            <h6>Email: {email}</h6>
                            <h6>Rating: {rating}</h6>
                            <h6>Feedback: {feedback} </h6>
                        </div>
                        {/* <div className="d-flex justify-content-between align-items-center">
                            <button onClick={() => props.cancelOrder(_id)} type="button" className="btn">Cancel</button>
                            <h4> Price: <span className="text-success">${price}</span></h4>
                        </div> */}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ReviewItem;