import React from "react";
import './aboutUs.css';

function About(){
    return(
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="about-us-left-content">
                    <h5 className="AboutUS">✨About Us</h5>
                    <h2 className="about-us-heading">
                    Clean Home with Our Professional Cleaning Services
                    </h2>      
                </div>
                <div className="about-us-right-content">
                    <table className="skill">
                        <tr className="skill-name-and-percentage">
                            <td className="skill-name">Experience</td>
                            <td className="skill-percentage-1">98%</td>
                        </tr>
                        <tr>
                            <td className="skill-bar">
                            <div className="skill-fill" style={{width: '98%'}}></div>
                            </td>
                        </tr>
                    </table>
                    <table className="skill">
                        <tr className="skill-name-and-percentage">
                            <td className="skill-name">Reliable</td>
                            <td className="skill-percentage-2">95%</td>
                        </tr>
                        <tr>
                            <td className="skill-bar">
                            <div className="skill-fill" style={{width: '95%'}}></div>
                            </td>
                        </tr>
                    </table>
                    <table className="skill">
                        <tr className="skill-name-and-percentage">
                            <td className="skill-name">Skilled and Capable</td>
                            <td className="skill-percentage-3">90%</td>
                        </tr>
                        <tr>
                            <td className="skill-bar">
                            <div className="skill-fill" style={{width: '90%'}}></div>
                            </td>
                        </tr>
                    </table>
                    <table className="skill">
                        <tr className="skill-name-and-percentage">
                            <td className="skill-name">Flexible</td>
                            <td className="skill-percentage-4">80%</td>
                        </tr>
                        <tr>
                            <td className="skill-bar">
                            <div className="skill-fill" style={{width: '80%'}}></div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>     
        </div>
    );
}
export default About;