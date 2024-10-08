import React from "react";
import './Feature.css'
import iconFeature from '../../assets/iconFeature.png'

const Feature = () => {
    return (
        <div className="feature-container">
            <div className="feature-section">
                <img src={iconFeature} alt="" className="iconFeature"/>
                <h3 className="feature-heading">Flexible Scheduling</h3>
                <p className="feature-description">Ut quis euismod at vivamus nunc duis.<br/>
                Tempus leo id phasellus at tellus non orci <br/>
                consecteur. Viverra urna accumsan.
                </p>
            </div>
            <div className="feature-section">
                <img src={iconFeature} alt="" className="iconFeature"/>
                <h3 className="feature-heading">Flexible Scheduling</h3>
                <p className="feature-description">Ut quis euismod at vivamus nunc duis.<br/>
                Tempus leo id phasellus at tellus non orci <br/>
                consecteur. Viverra urna accumsan.
                </p>
            </div>
            <div className="feature-section">
                <img src={iconFeature} alt="" className="iconFeature"/>
                <h3 className="feature-heading">Flexible Scheduling</h3>
                <p className="feature-description">Ut quis euismod at vivamus nunc duis.<br/>
                Tempus leo id phasellus at tellus non orci <br/>
                consecteur. Viverra urna accumsan.
                </p>
            </div>
        </div>
    );
}
export default Feature;