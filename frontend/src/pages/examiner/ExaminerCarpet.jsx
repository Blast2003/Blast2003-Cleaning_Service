import React from "react";
import ExaminerNavbar from "../../Examiner/examinerNavigation/ExaminerNavBar";
import CarpetDetail_E from "../../ServiceList/ServiceTaskDetail/Carpet/examiner/carpetDetail_E";
import FooterE from "../../Components/Footer/FooterE";
import { useLocation } from "react-router-dom";

function ExaminerCarpetPage(){
    const location = useLocation();
    const { serviceId, staff, customer, executionTime } = location.state || {};
    return(
        <div>
            <ExaminerNavbar/>
            <CarpetDetail_E serviceId={serviceId} staff={staff} customer={customer} executionTime={executionTime} />
            <FooterE/>
        </div>
    )
}
export default ExaminerCarpetPage;