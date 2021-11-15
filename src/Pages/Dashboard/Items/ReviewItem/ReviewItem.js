import React from 'react';
import Avatar from 'react-avatar';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../../Hooks/useAuth';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // const emptySymbol = <FontAwesomeIcon icon={["< far fa-star"]} />
    // const fullSymbol = <FontAwesomeIcon icon={["fas fa-star"]} />
    const { name, email, rating, feedback } = props.review;
    const {user} = useAuth();
    return (
        <div className="container my-2 rounded">
            <Col>
                <Card className="card-hover card-design">
                    {/* <Card.Img variant="top" src={img} /> */}
                    <Card.Body>
                    <Avatar src={user.photoUrl} name={user.displayName} size="100" round={true} />
                        <Card.Title className="text-color fw-bold">{name}</Card.Title>
                        <div>
                        
                            {/* <h6>Name: {props.order.name}</h6> */}
                            <h6>Email: {email}</h6>
                            <Rating
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={rating}
                                readonly
                            ></Rating>
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