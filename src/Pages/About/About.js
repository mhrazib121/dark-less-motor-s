import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Header from '../Shared/Header/Header';
import founder from '../../Images/team/h1-team-img-1.jpg';
import chairman from '../../Images/team/h1-team-img-2.jpg';
import manager from '../../Images/team/h1-team-img-3.jpg';
import director from '../../Images/team/h1-team-img-4.jpg';
import './About.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <section className="container my-5">
                <h1 className="fs-2 text-uppercase fw-bold my-5 line-bike">Our Facilities</h1>
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



                {/* Our Team  */}

                <div>
                    <h1 className="fs-2 text-uppercase fw-bold my-5 line-bike">Our Executive Team</h1>
                    <div className='row gx-3'>
                        {/* ceo */}
                        <div className='team-member col-lg-3'>
                            <div className=' team-mem'>
                                <div className='bg-design img-box'>
                                    <img className='img-fluid ' src={founder} alt="" />
                                    <div className='icon-items'>
                                        <a className=' '>{<FontAwesomeIcon icon={faFacebook} />}</a>
                                        <a className=' '>{<FontAwesomeIcon icon={faLinkedinIn} />}</a>
                                        <a className=' '>{<FontAwesomeIcon icon={faInstagram} />}</a>
                                    </div>
                                </div>

                            </div>
                            <div className='text-center '>
                                <h6 className=' text-center mt-2'>CHELSEA HANDLER</h6>
                                <p className='text-cente'>Chief Executive Officer & Founder</p>
                                <p className='px-3 member-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        {/* Chairman  */}
                        <div className='team-member col-lg-3'>
                            <div>
                                <div className='bg-design img-box'>
                                    <img className='img-fluid' src={chairman} alt="" />
                                    <div className='icon-items'>
                                        <a className=' '>{<FontAwesomeIcon icon={faFacebook} />}</a>
                                        <a className=''>{<FontAwesomeIcon icon={faLinkedinIn} />}</a>
                                        <a className=''>{<FontAwesomeIcon icon={faInstagram} />}</a>
                                    </div>
                                </div>

                            </div>
                            <div className='text-center '>
                                <h6 className=' text-center mt-2'>CHELSEA HANDLER</h6>
                                <p className='text-cente'>Chairman</p>
                                <p className='px-3 member-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        {/* Manager  */}
                        <div className='team-member col-lg-3'>
                            <div className=''>
                                <div className='img-box'>
                                    <img className='img-fluid ' src={manager} alt="" />
                                    <div className='icon-items'>
                                        <a>{<FontAwesomeIcon icon={faFacebook} />}</a>
                                        <a>{<FontAwesomeIcon icon={faLinkedinIn} />}</a>
                                        <a>{<FontAwesomeIcon icon={faInstagram} />}</a>
                                    </div>
                                </div>

                            </div>
                            <div className='text-center '>
                                <h6 className=' text-center mt-2'>CHELSEA HANDLER</h6>
                                <p className='text-cente'>Manager</p>
                                <p className='px-3 member-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        {/* Director  */}
                        <div className='team-member col-lg-3'>
                            <div className=''>
                                <div className=' img-box'>
                                    <img className='img-fluid ' src={director} alt="" />
                                    <div className='icon-items'>
                                        <a className=' '>{<FontAwesomeIcon icon={faFacebook} />}</a>
                                        <a className=' '>{<FontAwesomeIcon icon={faLinkedinIn} />}</a>
                                        <a className=''>{<FontAwesomeIcon icon={faInstagram} />}</a>
                                    </div>
                                </div>

                            </div>
                            <div className='text-center '>
                                <h6 className=' text-center mt-2'>CHELSEA HANDLER</h6>
                                <p className='text-cente'>Director</p>
                                <p className='px-3 member-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;