import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import ProductCard from '../../Products/ProductCard/ProductCard';
import Reviews from '../../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css';

const Home = () => {
    const [products] = useProducts();
    return (
        <div>
            <Header></Header>
            {/* Top Banner */}
            {/**************/}
            <TopBanner></TopBanner>

            <Container>

                {/* Products Section */}
                {/********************/}

                <h1 className="text-center my-5">Our Best <span className="text-primary">Bike</span></h1>
                <Row className="m-3" xs={1} md={3}>
                    {
                        products.slice(0, 6).map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </Row>
                <Link className="link-style" to="/products"> More Products </Link>
                <hr/>

                {/* Reviews Section */}
                {/*******************/}

                <h1 className="text-center my-5"><span className="text-primary">Customer's</span> Opinion About Us</h1>
                <Reviews></Reviews>

            </Container>


        </div>
    );
};

export default Home;