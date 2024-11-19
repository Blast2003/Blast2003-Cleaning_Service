import React from "react";
import "./ourTeam.css";

function OurTeam() {
  return (
    <div class="container">
      <div className="member-list-header">
        <h5 className="our-staff">⭐Our Staff</h5>
        <h2 className="meet-staff">Meet Our Cleaning Staff</h2>
      </div>

        <div class="staff-members">
          <div class="staff-member">
            <a href="staffdetails">
              <img
                src="http://surl.li/zakygu"
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
            <a href="staffdetails">
              <img
                src="http://surl.li/wqwwvv"
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
            <a href="staffdetails">
              <img
                src="http://surl.li/qbgayh"
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
            <a href="staffdetails">
              <img
                src="http://surl.li/kllirk"
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
