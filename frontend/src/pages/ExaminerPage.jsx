import React from "react";
import ExaminerNavbar from "../Examiner/examinerNavigation/ExaminerNavBar";
import Footer from "../Components/Footer/Footer";
import ServiceList from "../ServiceList/ServiceTask/ServicesList";

function ExaminerPage(){
    return (
        <div>
            <ExaminerNavbar/>
            <ServiceList/>
            <Footer/>
        </div>
    );
}
export default ExaminerPage;