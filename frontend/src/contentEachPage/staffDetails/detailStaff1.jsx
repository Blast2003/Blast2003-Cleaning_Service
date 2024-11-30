import React from "react";
import "./detailStaff.css";
import staff1 from "../../assets/staff1.png";

function detailStaff() {
  return (
    <div class="detail-page">
      <div class="detail-intro">
        <h5 className="our-staff">⭐Our Staff</h5>
        <h2 className="meet-staff">Meet Our Cleaning Staff</h2>
      </div>

      <div class="staff-member">
        <div class="staff-choosing-detail">
          <img src={staff1} alt="" className="member-image" />
          <div className="member-description">
            <h3>James Wang</h3>
            <p>Cleaning Supervisor</p>
            <p className="workingTimeHeader">Choose The Starting Date:</p>
            <select name="workingTime" className="workingTime">
              <option value="curr+0" selected>
                Current Date/Month/Year
              </option>
              <option value="curr+1">Current Date + 1/Month/Year</option>
              <option value="curr+2">Current Date + 2/Month/Year</option>
            </select>

            <br />
            <br />

            <p className="workingTimeHeader">Choose The Starting Time:</p>
            <select name="workingTime" className="workingTime">
              <option value="8am" selected>
                8 a.m
              </option>
              <option value="9am">9 a.m</option>
              <option value="10am">10 a.m</option>
            </select>
          </div>
        </div>
      </div>
      <br />

      <a href="/agreement" class="forward-button">
        Next
      </a>
    </div>
  );
}

export default detailStaff;
