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
import image14 from '../../../Images/image 14.png';
import partner from '../../../Images/Partner/dna.png';
import partner2 from '../../../Images/Partner/luxe.png';
import partner3 from '../../../Images/Partner/mint.png';
import partner4 from '../../../Images/Partner/motox.png';
import partner5 from '../../../Images/Partner/wuezon.png';

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

                <h1 className="text-center my-5">Our Best Bike</h1>
                <Row className="m" xs={1} md={3}>
                    {
                        products.slice(0, 6).map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </Row>
                <Link className="link-style" to="/products"> More Products </Link>


            </Container>
            <hr />
            {/* Commitment */}
            <div className="d-lg-flex align-items-center my-5 justify-content-center">
                <div className="m-2">
                    <img className="rounded image " src="https://image.freepik.com/free-photo/handsome-man-biker-travelling-mototrcycle_1303-22154.jpg" alt="" />
                </div>
                <div className=" my-5 mx-2">
                    <h2 className="text-primary"> Our Commitment </h2>
                    <p>Our constant endeavor is to support the company's mandate of providing highest level of customer satisfaction by taking good care of your two-wheeler service and maintenance through our vast network of committed dealers and service outlets spread across the country.
                    </p>
                </div>
            </div>

            <Container>
                {/* Reviews Section */}
                {/*******************/}

                <h1 className="text-center my-5"><span className="text-primary">Customer's</span> Opinion About Us</h1>
                <Reviews></Reviews>
            </Container>

            {/* Biker Club Trusted Partners  */}
            <div className='bg-banner'>
                <Container className='p-5'>
                    <div className='text-light text-center margin-top mb-5'>
                        <h1 className='mb-4 underline'>Darkless Motor's Trusted Partners</h1>
                        <span className='line line-small line-center'>
                            <span className=' first-lone'></span>
                            <span className=' second-line'></span>
                        </span>
                        <p className='p-4'>Nullam ac velit. Fusce consequat ipsum non ipsum. Nam ullamcorper ipsum quis erat. Aliquam non elit vitae dui sagittis cursus. Duis convallis rutrum mauris. Maecenas eu neque lacinia.</p>
                    </div>
                    <div className='bg-light'>
                        <div className='d-lg-flex justify-content-center'>
                            <img className='m-3 p-2' src={partner} alt="" />
                            <img className='m-3 p-2' src={partner2} alt="" />
                            <img className='m-3 p-2' src={partner3} alt="" />
                            <img className='m-3 p-2' src={partner4} alt="" />
                            <img className='m-3 p-2' src={partner5} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;