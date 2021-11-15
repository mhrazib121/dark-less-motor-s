import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css'

const TopBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="https://c.ndtvimg.com/2021-11/pm1j4qg4_2021-bajaj-pulsar-250-review_625x300_06_November_21.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-primary"> Wlcome To Dark Less Motor's</h1>
                        <p className="text-warning"> The best Motorbike Selling Company.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="https://c.ndtvimg.com/2021-10/3n6s3edk_2022-ktm-rc-200-review_625x300_16_October_21.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-primary"> Wlcome To Dark Less Motor's</h1>
                        <p className="text-warning"> The best Motorbike Selling Company.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="https://c.ndtvimg.com/2021-10/19i4c6q8_2021-ducati-monster-track-review_625x300_10_October_21.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-primary"> Wlcome To Dark Less Motor's</h1>
                        <p className="text-warning"> The best Motorbike Selling Company.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};


export default TopBanner;