import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageOrderItem = (props) => {
    const{_id, email, address, phone, status} = props.order;
    const {name, img, price}= props.order.package;
    return (
        <div className= "container">
         <Col className="shadow-lg">
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-color fw-bold">{name}</Card.Title>
                        <div>
                            <h6>Name: {props.order.name}</h6>
                            <h6>Email: {email}</h6>
                            <h6>Address: {address}</h6>
                            <h6>Contact: {phone}</h6>
                            <h6>Status: {status} </h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button onClick={() => props.cancelOrder(_id)} type="button" className="btn btn-danger">Cancel</button>
                            <h4> Price: $<span className="text-warning">{price}</span></h4>
                        </div>
                        <br />
                        <button onClick={() => props.updateOrder(_id)} type="button" className="btn btn-primary">Status Update</button>
                        
                    </Card.Body>
                </Card>
            </Col>   
        </div>
    );
};

export default ManageOrderItem;