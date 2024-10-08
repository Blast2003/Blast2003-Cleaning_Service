import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';

const Navbar = () => {
    return (
        <div className="navbar">

            <img src={logo} alt="" className="logo"/>
            
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Our Team</li>
                <li>Customer Approciate</li>
            </ul>
            <div className="icon-user">
                <img src={user} alt="" className="icon-user"/>
            </div>
            <button id="logout"><h3>Logout</h3></button>

        </div>
    )
}

export default Navbar