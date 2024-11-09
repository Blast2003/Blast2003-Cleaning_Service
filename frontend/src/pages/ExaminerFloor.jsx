import React from "react";
import ExaminerNavbar from "../Examiner/examinerNavigation/ExaminerNavBar";
import FloorDetail from "../ServiceList/ServiceTaskDetail/Floor/floorDetail";
import Footer from "../Components/Footer/Footer";

function ExaminerFloorPage(){
    return(
        <div>
            <ExaminerNavbar/>
            <FloorDetail/>
            <Footer/>
        </div>
    )
}
export default ExaminerFloorPage;