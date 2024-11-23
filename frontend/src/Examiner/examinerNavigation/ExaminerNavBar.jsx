import React from "react";
import "./ExaminerNavBar.css";
import logo from "../../assets/logo.png";
import examiner from "../../assets/examiner.png";
import useExaminerLogout from "../../hooks/examinerLogout"
import { useRecoilValue } from "recoil";
import examinerAtom from "../../atom/examinerAtom";
import { Link } from "react-router-dom";

const ExaminerNavbar = () => {

  const logout = useExaminerLogout()
  const Examiner = useRecoilValue(examinerAtom)
  return (
    <div className="examinerNavbar">
        <a href="/examiner">
          <img src={logo} alt="logo" className="logo" />
        </a>
      
      {Examiner &&(
        <>
        <Link to="/examiner/updateProfile">
            <div className="icon-user-wrapper">
              <img src={examiner} alt="user" className="icon-user" />
              <span className="customer-name">{Examiner.name}</span>
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

export default ExaminerNavbar;
