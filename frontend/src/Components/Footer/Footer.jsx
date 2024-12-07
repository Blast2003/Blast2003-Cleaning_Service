import React, { useEffect, useState } from "react";
import './Footer.css';
import socialIcon from '../../assets/socialIcon.png';
import { useRecoilValue } from "recoil";
import customerAtom from "../../atom/customerAtom";

const Footer = () => {
    const customer = useRecoilValue(customerAtom);
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        const fetchContracts = async () => {
            if (customer) {
                try {
                    const response = await fetch("/api/user/getContractsByUser", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            // Authorization: `Bearer ${customer.token}`, 
                        },
                    });
                    const data = await response.json();
                    if (response.ok) {
                        setContracts(data); // Set contracts if response is successful
                    } else {
                        console.error("Error fetching contracts:", data.error);
                    }
                } catch (error) {
                    console.error("Error fetching contracts:", error);
                }
            }
        };
        fetchContracts();
    }, [customer]);
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-section-1">
                    <h2 className="footer-logo">✨Beresin</h2>
                    <p className="footer-text">Transforming Spaces, Elevating Standards.<br/>Revitalize Your Environment with Professional Care.</p>
                    <div className="footer-socialIcons">
                        <img src={socialIcon} alt="" className="social-icon"></img>
                    </div>
                </div>
                <div className="footer-section-2">
                    <h3 className="footer-heading">Navigation</h3>
                    <table className="footer-table">
                        {customer&&(
                            <>
                            <tr>
                                <td style={{color: 'white'}}><a href="/customer/home" className="service-link">Home</a></td>
                            </tr>
                            <tr>
                                <td style={{color: 'white'}}><a href="/customer/aboutUs" className="service-link">About Us</a></td>
                            </tr>
                            <tr>
                                <td style={{color: 'white'}}><a href="/customer/service" className="service-link">Our Services</a></td>
                            </tr>
                            </>
                        )}

                        {customer == null &&(
                            <>
                            <tr>
                                <td style={{color: 'white'}}><a href="/home" className="service-link">Home</a></td>
                            </tr>
                            <tr>
                                <td style={{color: 'white'}}><a href="/aboutUs" className="service-link">About Us</a></td>
                            </tr>
                            <tr>
                                <td style={{color: 'white'}}><a href="/service" className="service-link">Our Services</a></td>
                            </tr>
                            </>
                        )}
                    </table>
                </div>
                <div className="footer-section-3">
                    <h3 className="footer-heading">Services</h3>
                    <table className="table">
                        {customer == null &&(
                            <>
                            <tr>
                                <td>
                                    <a href="/service/carpet" className="service-link">Carpet Cleaning</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/service/floor" className="service-link">Furniture Cleaning</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/service/wall" className="service-link">Wall washing</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/service/furniture" className="service-link">Floor Cleaning</a>
                                </td>
                            </tr>
                            </>
                        )}

                        {customer &&(
                            <>
                            <tr>
                                <td>
                                    <a href="/customer/service/carpet" className="service-link">Carpet Cleaning</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/customer/service/floor" className="service-link">Furniture Cleaning</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/customer/service/wall" className="service-link">Wall washing</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/customer/service/furniture" className="service-link">Floor Cleaning</a>
                                </td>
                            </tr>
                            </>
                        )}
                    </table>
                </div>
                <div className="footer-section-4">
                    <h3 className="footer-heading-script">☎️Contact Us</h3><br/><hr/>
                    <p className="footer-text-script">📳Our Support and Sales team is available <br/> 24/7 to answer your queries <br/>
                    📍123 Main St, Suite 500, HCM City, NY 10001<br/>
                     📞+1 (333) 000-0000</p>
                </div>
                
                {customer && contracts.length > 0 &&(<a href="/customer/booked/service" className="booked-services-forward" >Booked Services</a>)}
 
            </div>
            <div className="footer-bottom">
                <p>COPYRIGHT © 2024 BLAST1 | DESIGN BY PHI + NGUYEN + QUAN</p>
                <p>TERM OF USE | PRIVACY POLICY</p>
            </div>
        </div>
    );
}
export default Footer;