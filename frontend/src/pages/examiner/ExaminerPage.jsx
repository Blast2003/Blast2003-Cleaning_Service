import React from "react";
import ExaminerNavbar from "../../Examiner/examinerNavigation/ExaminerNavBar";
import FooterE from "../../Components/Footer/FooterE"
import ExaminerServicesList from "../../ServiceList/ServiceTask/ExaminerServicesList";

function ExaminerPage(){
    return (
        <div>
            <ExaminerNavbar/>
            <ExaminerServicesList/>
            <FooterE/>
        </div>
    );
}
export default ExaminerPage;