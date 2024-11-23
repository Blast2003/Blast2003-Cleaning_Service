import React from "react";
import ExaminerNavbar from "../../Examiner/examinerNavigation/ExaminerNavBar";
import FurnitureDetail_E from "../../ServiceList/ServiceTaskDetail/Furniture/examiner/furnitureDetail_E";
import FooterE from "../../Components/Footer/FooterE";
import { useLocation } from "react-router-dom";

function ExaminerFurniturePage(){
    const location = useLocation();
    const { serviceId, staff, customer, executionTime } = location.state || {};
    return(
        <div>
            <ExaminerNavbar/>
            <FurnitureDetail_E serviceId={serviceId} staff={staff} customer={customer} executionTime={executionTime}/>
            <FooterE/>
        </div>
    )
}
export default ExaminerFurniturePage;