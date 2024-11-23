import React from "react";
import StaffNavbar from "../../Staff/staffNavbar";
import WallDetail_S from "../../ServiceList/ServiceTaskDetail/Wall/staff/wallDetail_S";
import FooterS from "../../Components/Footer/FooterS";
import { useLocation } from "react-router-dom";

function StaffWallPage(){
    const location = useLocation();
    const { serviceId, examiner, customer, executionTime } = location.state || {};
    return(
        <div>
            <StaffNavbar/>
            <WallDetail_S serviceId={serviceId} examiner={examiner} customer={customer} executionTime={executionTime} />
            <FooterS/>
        </div>
    )
}
export default StaffWallPage;