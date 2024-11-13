import React from "react";
import "./ExaminerNavBar.css";
import logo from "../../assets/logo.png";
import examiner from "../../assets/examiner.png";
import useExaminerLogout from "../../hooks/examinerLogout"

const ExaminerNavbar = () => {

  const logout = useExaminerLogout()

  return (
    <div className="examinerNavbar">
      <img src={logo} alt="" className="logo" />
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
        <img src={examiner} alt="" className="icon-user" />
      </div>
      <button id="logout" onClick={logout}>
        <h3>
          Logout
        </h3>
      </button>
    </div>
  );
};

export default ExaminerNavbar;
