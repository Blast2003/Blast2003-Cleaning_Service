import React from "react";
import './Middle.css';
const Middle = () => {
    return (
        <div className="middle-container">
            <img src="http://surl.li/qcrxyc" alt="" className="image-2"/>
            <div className="content">
                <h4>Why Choose Us</h4>
                <h1>Providing Friendly, Reliable Cleaning Services</h1>
                <p>Serving <span className="highlight">4,000+</span> properties every month.</p>
                <table>
                    <tr>
                        <td>
                            <h3 className="heading-2">✨High-Quality Cleaning Services</h3>
                            <p className="description-2">Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="heading-2">✨Trained and Professional Staff</h3>
                            <p className="description-2">Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 className="heading-2">✨Exceptional Customer Service</h3>
                            <p className="description-2">Sem dictum at viverra nibh odio egestas nunc augue sed. Etiam purus et molestie scelerisque. Vel tempus at.</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
} 
export default Middle;