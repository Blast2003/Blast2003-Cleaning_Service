import React from "react";
import "./Services.css";

function Services() {
  return (
    <div>
      <section className="services">
        <div className="service-header">
          <h4>⭐Our Services</h4>
          <h2>Services We Provide</h2> <br></br>
          <p>
          Commitment to Clean: Discover Our Extensive Range of Cleaning Services.
          </p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <img src="http://surl.li/kloccy" alt="" className="service-img" />
            <h3>Carpet Cleaning</h3><br></br>
            <p>
            Removes dirt and stains from carpets using steam or dry cleaning to refresh and sanitize.
            </p>
            <a href="/carpet">Learn More</a>
          </div>

          <div className="service-card">
            <img src="http://surl.li/kloccy" alt="" className="service-img" />
            <h3>Furniture Cleaning</h3><br></br>
            <p>
            Cleans and removes stains from upholstered furniture, keeping it fresh and hygienic.
            </p>
            <a href="/furniture">Learn More</a>
          </div>

          <div className="service-card">
            <img src="http://surl.li/kloccy" alt="" className="service-img" />
            <h3>Wall Washing</h3><br></br>
            <p>
            Cleans walls to remove dirt and grime without damaging paint or wallpaper.
            </p>
            <a href="/wall">Learn More</a>
          </div>

          <div className="service-card">
            <img src="http://surl.li/kloccy" alt="" className="service-img" />
            <h3>Floor Cleaning</h3><br></br>
            <p>
            Sweeps, mops, and polishes various floor types to restore their appearance.
            </p>
            <a href="/floor">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
