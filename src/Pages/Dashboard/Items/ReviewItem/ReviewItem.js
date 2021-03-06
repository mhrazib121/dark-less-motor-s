import React from 'react';
import Avatar from 'react-avatar';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../../Hooks/useAuth';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, email, rating, feedback, img} = props.review;
    const {user} = useAuth();
    console.log(user.photoURL);
    console.log(user);
    return (
        <div className="container my-2 rounded">
            <Col>
                <Card className="card-hover text-center card-length card-design">
                    <Card.Body>
                    <Avatar className="mb-3" src={img} name={name} size="100" round={true} />
                        <Card.Title className="text-color fw-bold">{name}</Card.Title>
                        <div>
                            <Rating
                            className="text-warning"
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={rating}
                                readonly
                            ></Rating>
                            <h6 className='pt-3'> {feedback} </h6>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ReviewItem;