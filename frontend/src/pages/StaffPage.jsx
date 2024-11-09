import React from "react";
import Footer from "../Components/Footer/Footer";
import StaffNavbar from "../Staff/staffNavbar";
import StaffServiceList from "../ServiceList/ServiceTask/StaffServiceList";

function StaffPage(){
    return(
        <div>
            <StaffNavbar/>
            <StaffServiceList/>
            <Footer/>
        </div>
        
    );
}
export default StaffPage;