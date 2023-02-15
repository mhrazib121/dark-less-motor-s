import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import ProductCard from '../../Products/ProductCard/ProductCard';
import Reviews from '../../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css';
import partner from '../../../Images/Partner/dna.png';
import partner2 from '../../../Images/Partner/luxe.png';
import partner3 from '../../../Images/Partner/mint.png';
import partner4 from '../../../Images/Partner/motox.png';
import partner5 from '../../../Images/Partner/wuezon.png';
import useReview from '../../../Hooks/useReview';

const Home = () => {
    const [products, isProductLoading] = useProducts();
    const [isReviewsLoading] = useReview();

    console.log("products", products)
    console.log("isProductLoading", isProductLoading)

    if (isProductLoading && isReviewsLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
                <div className="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Header />
            {/* Top Banner */}
            {/**************/}
            <TopBanner />

            <Container>

                {/* Products Section */}
                {/********************/}

                <h1 className="fs-2 text-uppercase fw-bold my-5 line-bike">Bike Collection</h1>
                <Row className="m" xs={1} md={3}>
                    {
                        products.slice(0, 6).map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </Row>
                <Link className="link-style" to="/products"> More Products </Link>


            </Container>
            <br /> <br />

            <Container className='d-lg-flex justify-content-between mb-5'>
                <div className='img-bg1'> <h3 className='text-field text-center'> Buy New Bike</h3> </div>
                <div className='img-bg2'> <h3 className='text-field text-center'> SELL YOUR BIKE</h3> </div>
                <div className='img-bg3'> <h3 className='text-field text-center'> FIND SPARE PARTS</h3> </div>
            </Container>
            <br />

            <Container>
                {/* Reviews Section */}
                {/*******************/}

                <h1 className="fs-2 text-uppercase fw-bold my-5 line-bike">Testimonials</h1>
                <Reviews />
            </Container>
            <br />

            {/* Biker Club Trusted Partners  */}
            {/********************************/}

            <div className='bg-banner'>
                <Container className='p-5'>
                    <div className='text-light text-center margin-top mb-5'>
                        <h1 className='mb-4'>Darkless Motor's Trusted Partners</h1>
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