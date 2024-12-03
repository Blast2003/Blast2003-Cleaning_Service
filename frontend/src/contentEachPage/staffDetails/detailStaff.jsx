import React from "react";
import "./detailStaff.css"; // Use a specific CSS file for DetailStaff page
import { Link, useLocation } from "react-router-dom";
import {  useRecoilValue } from "recoil";
import customerAtom from "../../atom/customerAtom";

function DetailStaff( ) {
  const customer = useRecoilValue(customerAtom);
  const location = useLocation(); // Get the location object
  const { staff, name, title, bio, experience } = location.state || {};

  return (
    <div className="detail-staff-page"> {/* Add unique class */}
      <div className="detail-page">
        <div className="detail-intro">
          <h5 className="our-staff">⭐ Our Staff</h5>
          <h2 className="meet-staff">Meet {name}</h2>
        </div>

        <section className="staff-info">
          <div className="staff-member">
            <div className="staff-image-container">
              <img src={staff} alt={name} className="member-image" />
            </div>
            <div className="staff-description">
              <h3>{name}</h3>
              <p>{title}</p>
              <div className="staff-bio">
                <h4>Bio</h4>
                <p>{bio}</p>
              </div>
              <div className="staff-experience">
                <h4>Experience</h4>
                <p>{experience}</p>
              </div>
              {customer && <Link to="/customer/booking" className="forward-button">Book</Link>}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailStaff;
