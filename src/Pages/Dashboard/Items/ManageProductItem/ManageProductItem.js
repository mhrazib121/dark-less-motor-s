import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageProductItem = (props) => {
    const { name, description, img, price, _id } = props.product;
    return (
        <div>
            <Col className="shadow-lg text-center">
                <Card className="hover-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-color">{name}</Card.Title>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-danger" onClick={() => props.handleDeleteProduct(_id)} variant="contained" size="small">
                                Delete
                            </button>
                            <h4><span className="text-color">${price}</span></h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProductItem;