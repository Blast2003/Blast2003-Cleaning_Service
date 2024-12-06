import React from 'react';
import './price.css';
import { useRecoilValue } from 'recoil';
import customerAtom from '../../atom/customerAtom';
import { useNavigate } from 'react-router-dom';

const CustomPricingTable = () => {
  const customer = useRecoilValue(customerAtom);
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    if (customer == null) {
      navigate("/signin");
    } else {
      navigate("/customer/booking");
    }
  };

  return (
    <div className="custom-pricing-table">
      <h2>Pricing Plans for Every Budget</h2>
      <p>Choose from a variety of flexible pricing plans designed to fit every budget and cleaning need.</p>
      <div className="custom-plans">

        <div className="custom-plan">
          <h3>Basic Cleaning</h3>
          <p className="custom-price">$350 <span>/service</span></p>
          <p>A cost-effective solution for essential cleaning needs, perfect for maintaining a tidy home.</p>
          <ul className='custom-plan-ul'>
            <li className="custom-plan-li">60 Minutes Consultation</li>
            <li className="custom-plan-li">2 Bedroom Cleaning</li>
            <li className="custom-plan-li">3 Bathroom Cleaning</li>
            <li className="custom-plan-li">1 Living Room Cleaning</li>
            <li className="custom-plan-li">7 Days Guarantee</li>
          </ul>
          <div className="pay-button-container">
            <button className='pay-button' onClick={handlePaymentClick}>Pay</button>
          </div>
        </div>

        <div className="custom-plan">
          <h3>Pro Cleaning</h3>
          <p className="custom-price">$650 <span>/service</span></p>
          <p>A comprehensive service offering deep cleaning with attention to every detail for a fresh, spotless home.</p>
          <ul className='custom-plan-ul'>
            <li className="custom-plan-li">90 Minutes Consultation</li>
            <li className="custom-plan-li">3 Bedroom Cleaning</li>
            <li className="custom-plan-li">4 Bathroom Cleaning</li>
            <li className="custom-plan-li">1 Living Room Cleaning</li>
            <li className="custom-plan-li">7 Days Guarantee</li>
          </ul>
          <div className="pay-button-container">
            <button className='pay-button' onClick={handlePaymentClick}>Pay</button>
          </div>
        </div>

        <div className="custom-plan">
          <h3>Deluxe Cleaning</h3>
          <p className="custom-price">$950 <span>/service</span></p>
          <p>The ultimate cleaning experience, with an extensive, thorough cleaning to rejuvenate your entire space.</p>
          <ul className='custom-plan-ul'>
            <li className="custom-plan-li">120 Minutes Consultation</li>
            <li className="custom-plan-li">4 Bedroom Cleaning</li>
            <li className="custom-plan-li">5 Bathroom Cleaning</li>
            <li className="custom-plan-li">1 Living Room Cleaning</li>
            <li className="custom-plan-li">7 Days Guarantee</li>
          </ul>
          <div className="pay-button-container">
            <button className='pay-button' onClick={handlePaymentClick}>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPricingTable;
