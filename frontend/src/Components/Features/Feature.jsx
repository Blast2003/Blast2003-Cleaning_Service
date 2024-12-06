import React from "react";
import './Feature.css'
import convenience from '../../assets/convenience.png'
import customizable from '../../assets/customizable.png'
import professional from '../../assets/professional.png'

const Feature = () => {
    return (
        <div className="feature-container">
            <div className="feature-section">
                <img src={convenience} alt="" className="iconFeature"/>
                <h3 className="feature-heading">Convenient Online Booking</h3>
                <p className="feature-description">Easily schedule a cleaning session through an intuitive online platform, allowing you to choose the date, time, and service type that fits your schedule.
                </p>
            </div>
            <div className="feature-section">
                <img src={customizable} alt="" className="iconFeature"/>
                <h3 className="feature-heading">Customizable Services</h3>
                <p className="feature-description">Tailor the cleaning to your needs, whether it’s a one-time deep clean, regular maintenance, or special services like move-in/move-out cleaning or post-construction cleanup.
                </p>
            </div>
            <div className="feature-section">
                <img src={professional} alt="" className="iconFeature"/>
                <h3 className="feature-heading">Professional and Trusted Cleaners</h3>
                <p className="feature-description">Rest assured knowing your home or office will be cleaned by trained, experienced, and vetted professionals who deliver high-quality and reliable results every time.
                </p>
            </div>
        </div>
    );
}
export default Feature;