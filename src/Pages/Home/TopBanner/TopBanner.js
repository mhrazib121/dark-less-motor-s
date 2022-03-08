import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css';
import topBanner1 from '../../../Images/layer_img_1.png';
import topBanner2 from '../../../Images/layer_img_2.png';
import topBanner3 from '../../../Images/layer_img_3.png';

const TopBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel className='bg-top' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='d-lg-flex p-2'>
                        <div className='col-lg-5 mt-5'>
                            <h1 className="text-dark text-uppercase"> <span>Darkless Motor's <br /></span > <span className='fs-5'>WORLD MOST 
                                LATGEST  <span className='fw-bolder'>MOTORBIKE STORE</span></span></h1>
                            <p className="text-warn"> Darkless Motor's the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle on it.</p>
                            <button className='top-btn'> Buy Now</button>
                        </div>
                        <div className='ms-auto col-lg-7'>
                            <img
                                className="d-block w-75 bg-primar ms-auto img-height"
                                src={topBanner1}
                                alt="First slide"
                            />
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className='d-lg-flex p-2'>
                        <div className='col-lg-5 mt-5'>
                            <h1 className="text-dark text-uppercase"> <span>Darkless Motor's <br /></span > <span className='fs-5'>WORLD MOST 
                                LATGEST  <span className='fw-bolder'>MOTORBIKE STORE</span></span></h1>
                            <p className="text-warn"> Darkless Motor's the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle on it.</p>
                            <button className='top-btn'> Buy Now</button>
                        </div>
                        <div className='ms-auto col-lg-7'>
                            <img
                                className="d-block w-75 bg-primar ms-auto img-height"
                                src={topBanner2}
                                alt="First slide"
                            />
                        </div>
                    </div>

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className='d-lg-flex p-2'>
                        <div className='col-lg-5 mt-5'>
                            <h1 className="text-dark text-uppercase"> <span>Darkless Motor's <br /></span > <span className='fs-5'>WORLD MOST 
                                LATGEST  <span className='fw-bolder'>MOTORBIKE STORE</span></span></h1>
                            <p className="text-warn"> Darkless Motor's the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle on it.</p>
                            <button className='top-btn'> Buy Now</button>
                        </div>
                        <div className='ms-auto col-lg-7'>
                            <img
                                className="d-block w-75 bg-primar ms-auto img-height"
                                src={topBanner3}
                                alt="First slide"
                            />
                        </div>
                    </div>

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};


export default TopBanner;