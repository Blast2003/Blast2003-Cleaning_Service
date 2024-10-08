import React from "react";
import './Top.css'

const Top = () => {
    return(
        <div className="top">
            <div className="leftSection">
                <h5>BERESIN - CLEANING SERVICES</h5>
                <h2>Cleaning Services</h2>
                <h2>For All Your Needs</h2>
                <p className="description">Faucibus commodo a aenean et sit quisque ipsum. Consequat
                    eu id ut dolor felis quis. Sagittis a sapien pulvinar etiam
                    senetus adipiscing tempor diam tellus.
                </p>
                <div className="button">
                    <button className="getStart">Get Started</button>
                    <button className="howItWork">How It Work?</button>
                </div>   
            </div>

            <img src="http://surl.li/ohuhqi" alt="" className="image-1" ></img>

            <div className="rightSection">
                <div className="stat">
                    <h2>10K+</h2>
                    <p>Home Cleaned</p>
                </div>
                <div className="stat">
                    <h2>126 +</h2>
                    <p>Professional Tools</p>
                </div>
                <div className="stat">
                    <h2>99 %</h2>
                    <p>Satisfied Clients</p>
                </div>
            </div>
        </div>
    );
};
export default Top;