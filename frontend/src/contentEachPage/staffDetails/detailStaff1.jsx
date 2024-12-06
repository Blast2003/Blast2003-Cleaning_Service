import React from "react";
import "./detailStaff.css";
import staff1 from "../../assets/staff1.png";

function DetailStaff() {
  return (
    <div className="detail-staff-page">
      <div className="detail-staff-intro">
        <h2 className="detail-meet-staff">Meet Our Cleaning Staff</h2>
      </div>

      <div className="detail-staff-member">
        <div className="detail-staff-choosing-detail">
          <img src={staff1} alt="James Wang" className="detail-member-image" />
          
          <div className="detail-member-description">
            <h3>James Wang</h3>
            <p>Cleaning Supervisor</p>
            
            <div className="detail-working-time-section">
              <label className="detail-working-time-header">Choose The Starting Date:</label>
              <select name="workingTime" className="detail-working-time">
                <option value="curr+0" selected>
                  Current Date/Month/Year
                </option>
                <option value="curr+1">Current Date + 1/Month/Year</option>
                <option value="curr+2">Current Date + 2/Month/Year</option>
              </select>
            </div>

            <div className="detail-working-time-section">
              <label className="detail-working-time-header">Choose The Starting Time:</label>
              <select name="workingTime" className="detail-working-time">
                <option value="8am" selected>
                  8 a.m
                </option>
                <option value="9am">9 a.m</option>
                <option value="10am">10 a.m</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Forward Button */}
      <a href="/agreement" className="detail-forward-button">
        Next
      </a>
    </div>
  );
}

export default DetailStaff;
