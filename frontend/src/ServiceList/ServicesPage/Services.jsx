import React from "react";
import "./Services.css";
import { useRecoilValue } from "recoil";
import customerAtom from "../../atom/customerAtom";
import carpet from "../../assets/carpet.png";
import furniture from "../../assets/furniture.png";
import wall from "../../assets/wall.png";
import floor from "../../assets/floor.png";

function Services() {
  const customer = useRecoilValue(customerAtom);

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
            <img src={carpet} alt="" className="service-img" />
            <h3>Carpet Cleaning</h3><br></br>
            <p>
            Removes dirt and stains from carpets using steam or dry cleaning to refresh and sanitize.
            </p>
            {customer==null &&(
              <a href="/service/carpet">Learn More</a>
            )}
            {customer &&(
              <a href="/customer/service/carpet">Learn More</a>
            )}
          </div>

          <div className="service-card">
            <img src={furniture} alt="" className="service-img" />
            <h3>Furniture Cleaning</h3><br></br>
            <p>
            Cleans and removes stains from upholstered furniture, keeping it fresh and hygienic.
            </p>
            {customer==null &&(
              <a href="/service/furniture">Learn More</a>
            )}
            {customer &&(
              <a href="/customer/service/furniture">Learn More</a>
            )}
          </div>

          <div className="service-card">
            <img src={wall} alt="" className="service-img" />
            <h3>Wall Washing</h3><br></br>
            <p>
            Cleans walls to remove dirt and grime without damaging paint or wallpaper.
            </p>
            {customer==null &&(
              <a href="/service/wall">Learn More</a>
            )}
            {customer &&(
              <a href="/customer/service/wall">Learn More</a>
            )}
          </div>

          <div className="service-card">
            <img src={floor} alt="" className="service-img" />
            <h3>Floor Cleaning</h3><br></br>
            <p>
            Sweeps, mops, and polishes various floor types to restore their appearance.
            </p>
            {customer==null &&(
              <a href="/service/floor">Learn More</a>
            )}
            {customer &&(
              <a href="/customer/service/floor">Learn More</a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
