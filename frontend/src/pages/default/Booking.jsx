import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BookingPage from "../../contentEachPage/bookingPage/bookingPage";

function Booking(){
    return(
        <div>
            <Navbar/>
            <BookingPage/>
            <Footer/>
        </div>
    );
}
export default Booking;