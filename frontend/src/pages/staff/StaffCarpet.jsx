import React from "react";
import StaffNavbar from "../../Staff/staffNavbar";
import CarpetDetail_S from "../../ServiceList/ServiceTaskDetail/Carpet/staff/carpetDetail_S";
import FooterS from "../../Components/Footer/FooterS";
import { useLocation } from "react-router-dom";

function StaffCarpetPage(){
    const location = useLocation();
    const { serviceId, examiner, customer, executionTime } = location.state || {};
    return(
        <div>
            <StaffNavbar/>
            <CarpetDetail_S serviceId={serviceId} examiner={examiner} customer={customer} executionTime={executionTime} />
            <FooterS/>
        </div>
    )
}
export default StaffCarpetPage;