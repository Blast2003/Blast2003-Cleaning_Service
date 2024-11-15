import React from "react";
import BookedServices from "../contentEachPage/bookedServices/bookedServices.jsx";
import Footer from "../Components/Footer/Footer.jsx"
import Navbar from "../Components/Navbar/Navbar.jsx";

function bookedServicesPage() {
    return (
        <div>
            <Navbar /> 
            <BookedServices />
            <Footer />
        </div>
    )
}

export default bookedServicesPage