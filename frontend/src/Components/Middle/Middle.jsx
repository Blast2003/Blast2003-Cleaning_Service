import React from "react";
import './Middle.css';
import middleImg from '../../assets/middle.png'
const Middle = () => {
    return (
        <div className="middle-container">
            <img src={middleImg} alt="" className="image-2"/>
            <div className="content">
                <h4>Why Choose Us</h4>
                <h1>Providing Friendly, Reliable Cleaning Services</h1>
                <p>Serving <span className="highlight">4,000+</span> properties every month.</p>
                <table>
                    <tr>
                        <td>
                            <h3 className="heading-2">✨High-Quality Cleaning Services</h3>
                            <p className="description-2">We provide top-notch cleaning services designed to deliver a spotless, healthy environment for your home or office. Our attention to detail ensures every corner shines.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="heading-2">✨Trained and Professional Staff</h3>
                            <p className="description-2">Our team of experienced and certified cleaning professionals is dedicated to providing reliable and efficient services. Trust us to handle all your cleaning needs with care.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="heading-2">✨Exceptional Customer Service</h3>
                            <p className="description-2">We pride ourselves on delivering outstanding customer service. From your first inquiry to post-cleaning follow-ups, we ensure a smooth and satisfying experience every time.</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
} 
export default Middle;