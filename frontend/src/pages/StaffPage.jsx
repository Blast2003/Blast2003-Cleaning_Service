import React from "react";
import Footer from "../Components/Footer/Footer";
import ServiceList from "../ServiceList/ServiceTask/ServicesList";

function StaffPage(){
    return(
        <div>
            <StaffNavbar/>
            <ServiceList/>
            <Footer/>
        </div>
        
    );
}
export default StaffPage;