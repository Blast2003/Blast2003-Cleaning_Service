import React from "react";
import StaffNavbar from "../../Staff/staffNavbar";
import FloorDetail_S from "../../ServiceList/ServiceTaskDetail/Floor/staff/floorDetail_S";
import FooterS from "../../Components/Footer/FooterS";
import { useLocation } from "react-router-dom";

function StaffFloorPage(){
    const location = useLocation();
    const { serviceId, examiner, customer, executionTime} = location.state || {};
    return(
        <div>
            <StaffNavbar/>
            <FloorDetail_S serviceId={serviceId} examiner={examiner} customer={customer} executionTime={executionTime} />
            <FooterS/>
        </div>
    )
}
export default StaffFloorPage;