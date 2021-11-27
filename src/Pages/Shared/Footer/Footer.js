import React from 'react';
import './Footer.css';
import download1 from '../../../Images/download-1.png';
import download2 from '../../../Images/download-2.png';

const Footer = () => {
    return (
        <div className="footer p-5 bg-dark text-white App">
            <div className="d-lg-flex">
            <div className="mt-3">
                <ul className="footer-li">About </ul>
                <ul className="footer-li">FAQ</ul>
                <ul className="footer-li">Contact us</ul>
                <ul className="footer-li">Privacy Policy</ul>
            </div>
            <div className="ms-auto footer-img">
                <img src={download1} alt="" />
                <img src={download2} alt="" />
            </div>
            </div>
            <h4 className="mt-2 mb-1">
                Copyright © 2021 All rights reserved Dark Less Motor's
            </h4>
        </div>
    );
};

export default Footer;