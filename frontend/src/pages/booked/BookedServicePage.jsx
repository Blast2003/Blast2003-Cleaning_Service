import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import CustomerBookedServiceList from "../../ServiceList/ServiceTask/CustomerBookedServiceList";
import { useLocation } from "react-router-dom";

function BookedServicePage(){
    const location = useLocation();
    const { successMessage } = location.state|| {};
    return(
        <div>
            <Navbar/>
            <CustomerBookedServiceList successMessage={successMessage}/>
            <Footer/>
        </div>
        
    );
}
export default BookedServicePage;