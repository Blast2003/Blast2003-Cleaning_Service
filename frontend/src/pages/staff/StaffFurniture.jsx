import React from "react";
import StaffNavbar from "../../Staff/staffNavbar";
import FurnitureDetail_S from "../../ServiceList/ServiceTaskDetail/Furniture/staff/furnitureDetail_S";
import FooterS from "../../Components/Footer/FooterS";
import { useLocation } from "react-router-dom";

function StaffFurniturePage(){
    const location = useLocation();
    const { serviceId, examiner, customer, executionTime } = location.state || {};

    return(
        <div>
            <StaffNavbar/>
            <FurnitureDetail_S serviceId={serviceId} examiner={examiner} customer={customer} executionTime={executionTime} />
            <FooterS/>
        </div>
        
    );
}
export default StaffFurniturePage;