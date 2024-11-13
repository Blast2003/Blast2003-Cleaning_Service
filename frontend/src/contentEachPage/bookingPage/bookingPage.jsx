import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineCleaningServices } from "react-icons/md";
import "./BookingPage.css"; // Tạo một file CSS để customize

function BookingPage() {
    const [selectedService, setSelectedService] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [selectedStaff, setSelectedStaff] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    const services = ["Carpet Cleaning", "Furniture Cleaning", "Wall Washing", "Floor Cleaning"];
    const staffList = ["Staff 1", "Staff 2", "Staff 3", "Staff 4"];
    const serviceTypes = ["basic", "pro", "deluxe"];

    return (
        <div className="booking-page">
            <div className="left-section">
                <div className="service-selector">
                    <label>Service</label>
                    <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Select a Service</option>
                        {services.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedService && (
                    <div className="service-type-selector">
                        <label>Service Type</label>
                        <div className="radio-group">
                            {serviceTypes.map((type) => (
                                <label key={type} className="radio-option">
                                    <input
                                        type="radio"
                                        value={type}
                                        checked={serviceType === type}
                                        onChange={(e) => setServiceType(e.target.value)}
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                <div className="staff-selector">
                    <label>Staff</label>
                    <select
                        value={selectedStaff}
                        onChange={(e) => setSelectedStaff(e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Select Staff</option>
                        {staffList.map((staff) => (
                            <option key={staff} value={staff}>
                                {staff}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="date-picker">
                    <label>Execution Time</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select a Date"
                        className="custom-date-picker"
                    />
                </div>
            </div>

                <div className="right-section">
                    {selectedService &&(
                      <>
                      <div className="service-summary">
                            <h2>Service Summary</h2>
                            <MdOutlineCleaningServices className="icon" />
                      </div>
                      
                      {/* Service Name */}
                      <b className="service-name">{selectedService}</b>
                    
                      {/* Service Detail */}
                      <div className="description-section">
                            <p>Description</p>
                            <p>Removes dirt and stains from carpets using steam or dry cleaning to refresh and sanitize.</p>
                       </div>
                      </>  
                    )}
                
                    {serviceType &&(
                        <>
                        <div className="service-type-section">
                            <p>Service Type</p>
                            <p>{serviceType}</p>
                        </div>
                        </>
                    )}

                    {selectedDate &&(
                        <>
                        <div className="price-section">
                            <div className="left">
                                <p>Total</p>
                                <p>Execution Day</p>
                            </div>
                            <div className="right">
                                <p>$300</p>
                                <p>{selectedDate?.toLocaleDateString("en-GB")}</p>
                            </div>
                        </div>

                        {/* Contract Button */}
                        <div className="contract-button-container">
                            <button className="contract-button">Make Contract</button>
                        </div>
                        </>
                    )}
                </div>
        </div>
    );
}

export default BookingPage;
