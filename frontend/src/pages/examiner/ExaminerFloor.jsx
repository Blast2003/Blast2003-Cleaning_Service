import React from "react";
import ExaminerNavbar from "../../Examiner/examinerNavigation/ExaminerNavBar";
import FloorDetail_E from "../../ServiceList/ServiceTaskDetail/Floor/examiner/floorDetail_E";
import FooterE from "../../Components/Footer/FooterE";
import { useLocation } from "react-router-dom";

function ExaminerFloorPage(){
    const location = useLocation();
    const { serviceId, staff, customer, executionTime } = location.state || {};

    return(
        <div>
            <ExaminerNavbar/>
            <FloorDetail_E serviceId={serviceId} staff={staff} customer={customer} executionTime={executionTime} />
            <FooterE/>
        </div>
    )
}
export default ExaminerFloorPage;