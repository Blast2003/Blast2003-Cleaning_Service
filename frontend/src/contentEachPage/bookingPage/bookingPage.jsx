import React from "react";
import './bookingPage.css';

function BookingPage(){
    return(
        <div className="booking-container">
            <form action="">
                <div className="form-user-infor">
                    <label>Enter your name: </label>
                    <input type="text" placeholder="Enter your name"></input><br/>
                    <label>Enter your address: </label>
                    <input type="text" placeholder="Address"></input><br/>
                    <label>Enter your phone: </label>
                    <input type="text" placeholder="Phone number"></input><br/>
                    <label>Enter your email: </label>
                    <input type="text" placeholder="example123@gmail.com"></input><br/>
                </div>
                <div className="form-choose-service">
                    <label>Choose the services</label>
                    <input type="radio"></input>
                    <label>House</label>
                    <input type="radio"></input>
                    <label>Apartment</label><br/>
                    <label>Carpet Cleaning</label>
                    <select>
                        <option value="">None</option>
                        <option value="">Vacuuming</option>
                        <option value="">Pre-treatment</option>
                        <option value="">Spot cleaning</option>
                        <option value="">Deep cleaning</option>
                        <option value="">Drying</option>
                    </select> <br/>
                    <label>Furniture Cleaning</label>
                    <select>
                        <option value="">None</option>
                        <option value="">Dusting</option>
                        <option value="">Vacuuming</option>
                        <option value="">Spot cleaning</option>
                        <option value="">Upholstery cleaning</option>
                        <option value="">Leather conditioning</option>
                    </select> <br/>
                    <label>Wall Washing</label>
                    <select>
                        <option value="">None</option>
                        <option value="">Dusting</option>
                        <option value="">Washing</option>
                        <option value="">Rinsing</option>
                        <option value="">Drying</option>
                    </select> <br/>
                    <label>Floor Cleaning</label>
                    <select>
                        <option value="">None</option>
                        <option value="">Sweeping or vacuuming</option>
                        <option value="">Mapping</option>
                        <option value="">Scubbing</option>
                        <option value="">Polishing or waxing</option>
                        <option value="">Rug cleaning</option>
                    </select> <br/>
                </div>
                <div className="form-select-time">
                <input id="input-picker" />
                </div>
            </form>
        </div>
    );
}
export default BookingPage;