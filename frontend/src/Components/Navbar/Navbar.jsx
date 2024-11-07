import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/home">
      <img src={logo} alt="" className="logo" />
      </a>

      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/aboutUs">About Us</a>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/ourTeam">Our Team</a>
        </li>
        <li>
          <a href="/customerApprociate">Customer Approciate</a>
        </li>
      </ul>
      <div className="icon-user">
        <img src={user} alt="" className="icon-user" />
      </div>
      <button id="logout">
        <h3>
          <a href="/signup">Logout</a>
        </h3>
      </button>
    </div>
  );
};

export default Navbar;
