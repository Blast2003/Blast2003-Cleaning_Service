import React from "react";
import ExaminerNavbar from "../../Examiner/examinerNavigation/ExaminerNavBar";
import WallDetail_E from "../../ServiceList/ServiceTaskDetail/Wall/examiner/wallDetail_E";
import FooterE from "../../Components/Footer/FooterE";
import { useLocation } from "react-router-dom";

function ExaminerWallPage(){
    const location = useLocation();
    const { serviceId, staff, customer, executionTime } = location.state || {};
    return(
        <div>
            <ExaminerNavbar/>
            <WallDetail_E serviceId={serviceId} staff={staff} customer={customer} executionTime={executionTime} />
            <FooterE/>
        </div>
    )
}
export default ExaminerWallPage;