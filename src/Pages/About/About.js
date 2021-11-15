import React from 'react';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <section className="container my-5">
                <h1 className="text-center my-5"> Our <span className="text-warning ">Facilities</span> </h1>
                <div className="d-lg-flex  align-items-center">
                    <div className="d-lg-flex justify-content-center">
                        <div className="col-lg-7">
                            <img className="w-100" src="https://img.freepik.com/free-vector/hand-drawn-motorcycle-isolated-white-background-monochrome-style_1284-38728.jpg?size=338&ext=jpg" alt="" />
                        </div>
                    </div>
                    {/* <!-- Anccordian Start  --> */}
                    <div className="col-lg-5">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        24/7 Customer Service
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> Our support team always ready for you to 7 days a week. </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        EMI Facility
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"> We have 3 months, 6 months and 1 year EMI facility. </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Initial Free Full Servicing
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">We will service your bike fully initial 3 times.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        Customer Friendly Pricing
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">We are one of the world's largest sellers offering deep discounts on all products. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Anccordian End  --> */}
                </div>
            </section>
            
        </div>
    );
};

export default About;