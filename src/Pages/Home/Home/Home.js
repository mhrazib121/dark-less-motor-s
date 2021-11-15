import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import ProductCard from '../../Products/ProductCard/ProductCard';
import Reviews from '../../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css';
import image12 from '../../../Images/image 12.png'
import image13 from '../../../Images/image 13.png'
import image14 from '../../../Images/image 14.png'

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
                <hr />

                {/* doidptierj */}
                <div className="d-lg-flex align-items-center my-5 justify-content-center">
                    <div className="m-2">
                        <img className="rounded image " src="https://image.freepik.com/free-photo/handsome-man-biker-travelling-mototrcycle_1303-22154.jpg" alt="" />
                    </div>
                    <div className=" m-5">
                        <h2 className="text-warning"> OUR COMMITMENT </h2>
                        <p>Our constant endeavor is to support the company's mandate of providing highest level of customer satisfaction by taking good care of your two-wheeler service and maintenance through our vast network of committed dealers and service outlets spread across the country.
                        </p>
                    </div>
                </div>

                {/* Reviews Section */}
                {/*******************/}

                <h1 className="text-center my-5"><span className="text-primary">Customer's</span> Opinion About Us</h1>
                <Reviews></Reviews>

            </Container>


        </div>
    );
};

export default Home;