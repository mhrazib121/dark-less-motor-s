import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ReviewCard = (props) => {
    const {serviceName, tutorName}=props.review;
    console.log(serviceName)
    
    return (
        <Col className="shadow-lg ">
            <Card >
                {/* <Card.Img variant="top" src={img} /> */}
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <div>
                    
                        <h6> {tutorName}</h6>
                        
                    </div>
                  
                    <div className="d-flex ">
                    {/* <Link className="btn text-white me-2" to ={`/packageDetails/${_id}`}> Booking Now </Link> */}
                    <button className="btn btn-success">Purchase Now</button>
                    {/* <h5 className="mx-2 mt-2 pt-1 ms-auto"> Price: $ {fee} </h5> */}
                    </div>
                    {/* <button className="btn btn-success">Purchase Now</button> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ReviewCard;