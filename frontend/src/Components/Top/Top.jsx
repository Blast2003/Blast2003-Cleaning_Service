import React from "react";
import './Top.css'
import topImg from '../../assets/top.png'

const Top = () => {
    return(
        <div className="top">
            <div className="leftSection">
                <div className="top-description">
                    <h5 className="content-1">✨BERESIN - CLEANING SERVICES</h5>
                    <h2 className="content-1">Cleaning Services All Your Needs</h2>
                    <p className="content-1">Looking for a spotless home or office? Our professional cleaning team is here to help! Whether it's regular cleaning, deep cleaning, or special events, we’ve got you covered. Fast, reliable, and thorough – we handle it all. Contact us today for a cleaner, fresher space!</p>
                </div>
                
                <div className="top-button">
                    <button className="getStart"><a href="/signup">Get Started</a></button>
                    <button className="howItWork"><a href="/customer/booking">Book Now</a></button>
                </div>   
            </div>

            <img src={topImg} alt="" className="image-1" ></img>

            <div className="rightSection">
                <div className="stat">
                    <h2>10K+</h2>
                    <p>Home Cleaned</p>
                </div>
                <div className="stat">
                    <h2>126+</h2>
                    <p>Professional Tools</p>
                </div>
                <div className="stat-1">
                    <h2>99%</h2>
                    <p>Satisfied Clients</p>
                </div>
            </div>
        </div>
    );
};
export default Top;