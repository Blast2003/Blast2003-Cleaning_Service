import React from "react";
import ExaminerNavbar from "../../Examiner/examinerNavigation/ExaminerNavBar";
import WallDetail from "../../ServiceList/ServiceTaskDetail/Wall/wallDetail";
import Footer from "../../Components/Footer/Footer";

function ExaminerWallPage(){
    return(
        <div>
            <ExaminerNavbar/>
            <WallDetail/>
            <Footer/>
        </div>
    )
}
export default ExaminerWallPage;