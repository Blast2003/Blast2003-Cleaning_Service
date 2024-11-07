import React from "react";
import "./Services.css";

function Services() {
  return (
    <div>
      <section class="services">
        <div class="service-header">
          <h4>⭐Our Services</h4>
          <h2>Services We Provide</h2>
          <p>
            Faucibus commodo a aenean et sit quisque ipsum, Consequat eu id ut
            dolor falls quis Segretia e sapien pulvinar atlarn
          </p>
        </div>
        <div class="service-cards">
          <div class="service-card">
            <img src="http://surl.li/kloccy" alt="" className="service-img" />
            <h3>Carpet Cleaning</h3>
            <p>
              Removes dirt and stains from carpets using steam or dry cleaning
              to refresh and sanitize.
            </p>
            <a href="#">Learn More</a>
          </div>

          <div class="service-card">
            <img src="http://surl.li/kloccy" alt="" className="service-img" />
            <h3>Furniture Cleaning</h3>
            <p>
              Removes dirt and stains from carpets using steam or dry cleaning
              to refresh and sanitize.
            </p>
            <a href="#">Learn More</a>
          </div>

          <div class="service-card">
            <img src="http://surl.li/kloccy" alt="" className="service-img" />
            <h3>Wall Washing</h3>
            <p>
              Removes dirt and stains from carpets using steam or dry cleaning
              to refresh and sanitize.
            </p>
            <a href="#">Learn More</a>
          </div>

          <div class="service-card">
            <img src="http://surl.li/kloccy" alt="" className="service-img" />
            <h3>Floor Cleaning</h3>
            <p>
              Removes dirt and stains from carpets using steam or dry cleaning
              to refresh and sanitize.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
