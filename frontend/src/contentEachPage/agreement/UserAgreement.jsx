import React from "react";
import "./UserAgreement.css";

function UserAgreement() {
  return (
    <div class="page">
      <section class="agreement-content">
        <h1>Using Services Agreement</h1>
        <p class="agreement-info">
          This Using Service Agreement (the "Agreement") is made and entered
          into by and between [Client Name] ("Client") and [Designer name]
          ("Examiner").
        </p>

        <br />

        <ol>
          <li className="test-class" >
            <p class="section-header">User Details</p>
            <ul classname="agreement-unordered-list">
              <li class="ul-list-content">User Name: [Text Input]</li>
              <li class="ul-list-content">Address: [Text Input]</li>
              <li class="ul-list-content">Email: [Text Input]</li>
            </ul>
          </li>

          <li className="test-class">
            <p class="section-header">Service Selection</p>
            <p class="list-text">
              (Allow users to select the services they want, with checkboxes and
              quantity or size options for custom pricing)
            </p>

            <ul classname="agreement-unordered-list">
              <li className="test-class">
                <p class="list-text">Select Services:</p>
                <ol class="agreement-ordered-list">
                  <li class="ul-list-content">[ ] Carpet Cleaning</li>
                  <li class="ul-list-content">[ ] Furniture Cleaning</li>
                  <li class="ul-list-content">[ ] Wall Washing</li>
                  <li class="ul-list-content">[ ] Floor Cleaning</li>
                  <li class="ul-list-content">[ ] Draperies Cleaning</li>
                  <li class="ul-list-content">
                    [ ] Water, Smoke, and Fire Damage Restoration
                  </li>
                  <li class="ul-list-content">[ ] Air-Quality Testing</li>
                </ol>
              </li>
            </ul>
          </li>

          <li className="test-class">
            <p class="section-header">Examiner Information</p>
            <ul classname="agreement-unordered-list">
              <li class="ul-list-content">
                Examiner Name: [Dropdown - Auto-populated based on availability]
              </li>
              <li class="ul-list-content">
                Examiner Visit Date: [Date Picker]
              </li>
              <li class="ul-list-content">
                Time Slot for Examination: [Time Picker]
              </li>
            </ul>
          </li>

          <li className="test-class">
            <p class="section-header">Scheduling Options</p>
            <p class="list-text">
              (This will be filled by the user after the contract examination is
              completed)
            </p>
            <ul classname="agreement-unordered-list">
              <li class="ul-list-content">
                Available Execution Dates: [Dropdown of possible dates]
                (Populated based on examiner report)
              </li>
              <li class="ul-list-content">
                Select Execution Date: [Date Picker]
              </li>
              <li class="ul-list-content">Time Slot: [Time Picker]</li>
            </ul>
          </li>

          <li className="test-class">
            <p class="section-header">Contract Details</p>
            <ul classname="agreement-unordered-list">
              <li class="ul-list-content">
                Contract Number: [Auto-generated, Non-editable]
              </li>
              <li class="ul-list-content">
                Total Estimated Price: [Auto-calculated based on services
                selected]
              </li>
            </ul>
          </li>

          <li className="test-class">
            <p class="section-header">Payment Information</p>
            <p class="list-text">Deposit Payment Method:</p>
            <ul classname="agreement-unordered-list">
              <li class="ul-list-content">[ ] Visa</li>
              <li class="ul-list-content">[ ] MasterCard</li>
              <li class="ul-list-content">[ ] Other (Add Payment Option)</li>
            </ul>
            <p class="list-text">
              Final Payment Due: [Auto-calculated, Non-editable]
            </p>
          </li>

          <li className="test-class">
            <p class="section-header">Terms</p>
            <p class="list-text">
              This Agreement will begin on the date of acceptance and will
              remain in effect until all services have been completed.
            </p>
          </li>
        </ol>
        <br />
        <section class="agreement-footer">
          <div class="payment">
            <h3>Total Payment</h3>
            <p>"[Money]" $</p>
          </div>

          <div class="signature">
            <h3>[✔] I agree to the term & contract</h3>
            <br />
            <p>
              <a href="#paypal-redirect" class="button">
                Agree
              </a>
              <a href="/staffdetails" class="button">
                Go back
              </a>
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default UserAgreement;
