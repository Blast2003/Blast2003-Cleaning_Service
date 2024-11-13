import React from "react";
import ExaminerNavbar from "../../Examiner/examinerNavigation/ExaminerNavBar";
import Footer from "../../Components/Footer/Footer";
import ExaminerServicesList from "../../ServiceList/ServiceTask/ExaminerServicesList";

function ExaminerPage(){
    return (
        <div>
            <ExaminerNavbar/>
            <ExaminerServicesList/>
            <Footer/>
        </div>
    );
}
export default ExaminerPage;