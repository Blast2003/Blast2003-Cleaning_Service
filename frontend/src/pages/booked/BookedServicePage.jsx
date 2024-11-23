import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import CustomerBookedServiceList from "../../ServiceList/ServiceTask/CustomerBookedServiceList";

function BookedServicePage(){
    return(
        <div>
            <Navbar/>
            <CustomerBookedServiceList />
            <Footer/>
        </div>
        
    );
}
export default BookedServicePage;