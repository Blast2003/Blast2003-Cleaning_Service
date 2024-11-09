import React from "react";
import './Top.css'
import { Link } from "react-router-dom";

const Top = () => {
    return(
        <div className="top">
            <div className="leftSection">
                <h5>✨BERESIN - CLEANING SERVICES</h5>
                <h2 className="test">Cleaning Services <br/> For All Your Needs</h2>
                <p className="description">Faucibus commodo a aenean et sit quisque ipsum. <br/> Consequat
                    eu id ut dolor felis quis. Sagittis a sapien <br/> pulvinar etiam 
                    senetus adipiscing tempor diam tellus.
                </p>
                <div className="top-button">
                    <button className="getStart"><a href="/signup">Get Started</a></button>
                    <button className="howItWork"><a href="/booking">Book Now</a></button>
                </div>   
            </div>

            <img src="http://surl.li/ohuhqi" alt="" className="image-1" ></img>

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