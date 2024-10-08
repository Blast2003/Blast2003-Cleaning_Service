import React from "react";
import './Footer.css';
import socialIcon from '../../assets/socialIcon.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
            <div className="footer-section-1">
                <h2 className="footer-logo">✨Beresin</h2>
                <p className="footer-text">Leo elementum iaculis quam massa vitae <br/> odio sed. Morbi tincidunt senectus.</p>
                <div className="footer-socialIcons">
                    <img src={socialIcon} alt="" className="social-icon"></img>
                </div>
            </div>
            <div className="footer-section-2">
                <h3 className="footer-heading">Navigation</h3>
                <table className="table">
                    <tr>
                        <td>Home</td>
                    </tr>
                    <tr>
                        About Us
                    </tr>
                    <tr>
                        <td>Our Services</td>
                    </tr>
                </table>
            </div>
            <div className="footer-section-3">
                <h3 className="footer-heading">Services</h3>
                <table className="table">
                    <tr>
                        <td>Carpet Cleaning</td>
                    </tr>
                    <tr>
                        <td>Furniture Cleaning</td>
                    </tr>
                    <tr>
                        <td>Wall Washing</td>
                    </tr>
                    <tr>
                        <td>Floor Cleaning</td>
                    </tr>
                </table>
            </div>
            <div className="footer-section-4">
                <h3 className="footer-heading">☎️Contact Us</h3><br/>
                <p className="footer-text">📳Our Support and Sales team is available <br/> 24/7 to answer your queries</p>
                <p className="footer-text">📍123 Main St, Suite 500, New York, NY 10001</p>
                <p className="footer-text">📞+1 (333) 000-0000</p>
            </div>
            </div>
            <div className="footer-bottom">
                <p>COPYRIGHT © 2023 BERESIN | DESIGN BY TOKOTEMA</p>
                <p>TERM OF USE | PRIVACY POLICY</p>
            </div>
        </div>
    );
}
export default Footer;