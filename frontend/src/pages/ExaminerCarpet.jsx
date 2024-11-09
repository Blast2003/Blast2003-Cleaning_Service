import React from "react";
import ExaminerNavbar from "../Examiner/examinerNavigation/ExaminerNavBar";
import CarpetDetail from "../ServiceList/ServiceTaskDetail/Carpet/carpetDetail";
import Footer from "../Components/Footer/Footer";

function ExaminerCarpetPage(){
    return(
        <div>
            <ExaminerNavbar/>
            <CarpetDetail/>
            <Footer/>
        </div>
    )
}
export default ExaminerCarpetPage;