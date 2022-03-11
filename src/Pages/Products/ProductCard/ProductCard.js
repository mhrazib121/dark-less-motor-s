import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = (props) => {
    const { name, description, img, price, _id } = props.product;
    // console.log(serviceName)
    return (
        <div className="my-2">
            <Col className="gap-">
                <Card className="card-hover card-design">
                    <Card.Img className='' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div>

                            <h6 className='description'> {description}</h6>

                        </div>

                        <div className="d-flex ">
                            <Link className="btn text-white me-2" to ={`/purchase/${_id}`}> <button className="btn-basic"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Purchase Now</button> </Link>
                            
                            <h5 className="mx-2 mt-2 pt-1 ms-auto"> Price: $ {price} </h5>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ProductCard;