import React from 'react';
import './price.css';

const CustomPricingTable = () => {
  return (
    <div className="custom-pricing-table">
      <h2>✨Pricing Plans for Every Budget</h2>
      <p>Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis. Sagittis a sapien pulvinar etiam.</p>
      <div className="custom-plans">
        <div className="custom-plan">
          <h3>Basic Cleaning</h3>
          <p className="custom-price">$350 <span>/service</span></p>
          <p>Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis.</p>
          <ul>
            <li>👉60 Minutes Consultation</li>
            <li>👉2 Bedroom Cleaning</li>
            <li>👉3 Bathroom Cleaning</li>
            <li>👉1 Living Room Cleaning</li>
            <li>👉7 Days Guarantee</li>
          </ul>
          <button className='pay-button'>Pay</button>
        </div>
        <div className="custom-plan">
          <h3>Pro Cleaning</h3>
          <p className="custom-price">$650 <span>/service</span></p>
          <p>Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis.</p>
          <ul>
            <li>👉90 Minutes Consultation</li>
            <li>👉3 Bedroom Cleaning</li>
            <li>👉4 Bathroom Cleaning</li>
            <li>👉1 Living Room Cleaning</li>
            <li>👉7 Days Guarantee</li>
          </ul>
          <button className='pay-button'>Pay</button>
        </div>
        <div className="custom-plan">
          <h3>Deluxe Cleaning</h3>
          <p className="custom-price">$950 <span>/service</span></p>
          <p>Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis.</p>
          <ul>
            <li>👉120 Minutes Consultation</li>
            <li>👉4 Bedroom Cleaning</li>
            <li>👉5 Bathroom Cleaning</li>
            <li>👉1 Living Room Cleaning</li>
            <li>👉7 Days Guarantee</li>
          </ul>
          <button className='pay-button'>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default CustomPricingTable;