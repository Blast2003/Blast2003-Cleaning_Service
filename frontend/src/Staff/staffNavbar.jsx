import React from "react";
import "./staffNavbar.css";
import logo from "../assets/logo.png";
import staff from "../assets/staff.png";
import useStaffLogout from "../hooks/staffLogout"
import { useRecoilValue } from "recoil";
import staffAtom from "../atom/staffAtom";
import { Link } from "react-router-dom";

const StaffNavbar = () => {

  const logout = useStaffLogout();
  const Staff = useRecoilValue(staffAtom);

  return (
    <div className="staffNavbar">

        <a href="/staff">
          <img src={logo} alt="logo" className="logo" />
        </a>
      
      {Staff &&(
        <>
          <Link to="/staff/updateProfile">
            <div className="icon-user-wrapper">
              <img src={staff} alt="user" className="icon-user" />
              <span className="customer-name">{Staff.name}</span>
            </div>
          </Link>
          <button id="logout" onClick={logout}>
            <h3>
              Logout  
            </h3>
          </button>
        </>
      )}
    </div>
  );
};

export default StaffNavbar;
