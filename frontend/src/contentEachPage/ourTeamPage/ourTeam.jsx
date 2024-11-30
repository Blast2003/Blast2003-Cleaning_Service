import React from "react";
import "./ourTeam.css";
import staff1 from "../../assets/staff1.png";
import staff2 from "../../assets/staff2.png";
import staff3 from "../../assets/staff3.png";
import staff4 from "../../assets/staff4.png";

function OurTeam() {
  return (
    <div class="container">
      <div className="member-list-header">
        <h5 className="our-staff">⭐Our Staff</h5>
        <h2 className="meet-staff">Meet Our Cleaning Staff</h2>
      </div>

      <div class="staff-members">
        <div class="staff-member">
          <a href="staffdetails1">
            <img
              src={staff1}
              alt=""
              className="member-image"
            />
          </a>
          <div className="member-description">
            <h3>James Wang</h3>
            <p>Cleaning Supervisor</p>
          </div>
        </div>

        <div class="staff-member">
          <a href="staffdetails2">
            <img
              src={staff2}
              alt=""
              className="member-image"
            />
          </a>
          <div className="member-description">
            <h3>Sarah Johnson</h3>
            <p>Operation Manager</p>
          </div>
        </div>

        <div class="staff-member">
          <a href="staffdetails3">
            <img
              src={staff3}
              alt=""
              className="member-image"
            />
          </a>
          <div className="member-description">
            <h3>David Nguyen</h3>
            <p>Cleaning Technician</p>
          </div>
        </div>

        <div class="staff-member">
          <a href="staffdetails4">
            <img
              src={staff4}
              alt=""
              className="member-image"
            />
          </a>
          <div className="member-description">
            <h3>Samantha Lee</h3>
            <p>Marketing Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
