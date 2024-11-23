import React from "react";
import FooterS from "../../Components/Footer/FooterS";
import StaffNavbar from "../../Staff/staffNavbar";
import StaffServiceList from "../../ServiceList/ServiceTask/StaffServiceList";

function StaffPage(){
    return(
        <div>
            <StaffNavbar/>
            <StaffServiceList/>
            <FooterS/>
        </div>
        
    );
}
export default StaffPage;