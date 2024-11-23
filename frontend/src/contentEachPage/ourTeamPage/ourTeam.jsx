import React from "react";
import "./ourTeam.css";
import { useRecoilValue } from "recoil";
import customerAtom from "../../atom/customerAtom";

function OurTeam() {
  const customer = useRecoilValue(customerAtom);
  return (
    <div className="container">
      <div className="member-list-header">
        <h5 className="our-staff">⭐Our Staff</h5>
        <h2 className="meet-staff">Meet Our Cleaning Staff</h2>
      </div>

      <section className="cleaning-staff">
        <div className="staff-members">
          <div className="staff-member">
          {customer == null ? (
              <>
              <a href="/staffDetails">
                <img
                  src="http://surl.li/zakygu"
                  alt="Samantha Lee"
                  className="member-image"
                />
                <div className="member-description">
                  <h3>Samantha Lee</h3>
                  <p>Marketing Coordinator</p>
                </div>
              </a>
              </>
            ) : (
              <>
              <a href="/customer/staffDetails">
                <img
                  src="http://surl.li/zakygu"
                  alt="Samantha Lee"
                  className="member-image"
                />
                <div className="member-description">
                  <h3>Samantha Lee</h3>
                  <p>Marketing Coordinator</p>
                </div>
              </a>
              </>
            )}
          </div>

          <div className="staff-member">
          {customer == null ? (
              <>
              <a href="/staffDetails">
                <img
                  src="http://surl.li/zakygu"
                  alt="Samantha Lee"
                  className="member-image"
                />
                <div className="member-description">
                  <h3>Samantha Lee</h3>
                  <p>Marketing Coordinator</p>
                </div>
              </a>
              </>
            ) : (
              <>
              <a href="/customer/staffDetails">
                <img
                  src="http://surl.li/zakygu"
                  alt="Samantha Lee"
                  className="member-image"
                />
                <div className="member-description">
                  <h3>Samantha Lee</h3>
                  <p>Marketing Coordinator</p>
                </div>
              </a>
              </>
            )}
          </div>

          <div className="staff-member">
          {customer == null ? (
              <>
              <a href="/staffDetails">
                <img
                  src="http://surl.li/zakygu"
                  alt="Samantha Lee"
                  className="member-image"
                />
                <div className="member-description">
                  <h3>Samantha Lee</h3>
                  <p>Marketing Coordinator</p>
                </div>
              </a>
              </>
            ) : (
              <>
              <a href="/customer/staffDetails">
                <img
                  src="http://surl.li/zakygu"
                  alt="Samantha Lee"
                  className="member-image"
                />
                <div className="member-description">
                  <h3>Samantha Lee</h3>
                  <p>Marketing Coordinator</p>
                </div>
              </a>
              </>
            )}
          </div>

          <div className="staff-member">
            {customer == null ? (
              <>
              <a href="/staffDetails">
                <img
                  src="http://surl.li/zakygu"
                  alt="Samantha Lee"
                  className="member-image"
                />
                <div className="member-description">
                  <h3>Samantha Lee</h3>
                  <p>Marketing Coordinator</p>
                </div>
              </a>
              </>
            ) : (
              <>
              <a href="/customer/staffDetails">
                <img
                  src="http://surl.li/zakygu"
                  alt="Samantha Lee"
                  className="member-image"
                />
                <div className="member-description">
                  <h3>Samantha Lee</h3>
                  <p>Marketing Coordinator</p>
                </div>
              </a>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurTeam;
