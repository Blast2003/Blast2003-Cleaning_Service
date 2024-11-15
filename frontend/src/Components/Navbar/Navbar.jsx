import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import useLogout from "../../hooks/useLogout";
import customerAtom from "../../atom/customerAtom";
import logoutSuccessAtom from "../../atom/logoutSuccessAtom";
import { useRecoilState, useRecoilValue } from "recoil";

const Navbar = () => {
  const customer = useRecoilValue(customerAtom);
  const [logoutSuccess, setLogoutSuccess] = useRecoilState(logoutSuccessAtom);
  const logout = useLogout();

  const handleLogout = async () => {
    await logout(); 
    setLogoutSuccess(true); 
  }

  useEffect(() => {
    if (logoutSuccess) {
      setTimeout(() => {
        setLogoutSuccess(false);
      }, 2000);
    }
  }, [logoutSuccess, setLogoutSuccess]);

  return (
    <div className="navbar">

      {customer == null  &&(
        <>
        <a href="/home">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/aboutUs">About Us</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/ourTeam">Our Team</a></li>
          <li><a href="/pricing">Pricing Plans</a></li>
          <li><a href="/customerApprociate">Customer Appreciate</a></li>
          <li><a href="/signin">Sign In</a></li>
        </ul>
        </>
      )}

      {customer && (
        <>
          <a href="/customer/home">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <ul>
            <li><a href="/customer/home">Home</a></li>
            <li><a href="/customer/aboutUs">About Us</a></li>
            <li><a href="/customer/service">Services</a></li>
            <li><a href="/customer/pricing">Pricing Plans</a></li>
            <li><a href="/customer/ourTeam">Our Team</a></li>
            <li><a href="/customer/customerApprociate">Customer Appreciate</a></li>
          </ul>
          <div className="icon-user">
            <img src={user} alt="user" className="icon-user" />
          </div>
          <button id="logout" onClick={handleLogout}>
            <h3>Logout</h3>
          </button>
        </>
      )}

      {/* Logout success label */}
      {logoutSuccess && (
        <div className="logout-success">
          Logout Successfully
        </div>
      )}
    </div>
  );
};

export default Navbar;
