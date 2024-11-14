import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />

      <ul className="navbar-test">
        <li className="navbar-link">
          <a href="/home">Home</a>
        </li>
        <li className="navbar-link">
          <a href="/aboutUs">About Us</a>
        </li >
        <li className="navbar-link">
          <a href="/service">Services</a>
        </li>
        <li className="navbar-link">
          <a href="/ourTeam">Our Team</a>
        </li>
        <li className="navbar-link">
          <a href="/customerApprociate">Customer Approciate</a>
        </li>
      </ul>
      <div className="icon-user">
        <img src={user} alt="" className="icon-user" />
      </div>
      <button id="logout">
        <h3 className="navbar-button">
          <a href="/signup">Logout</a>
        </h3>
      </button>
    </div>
  );
};

export default Navbar;
