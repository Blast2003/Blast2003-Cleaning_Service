import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Examiner from "../contentEachPage/examinerPage/Examiner";

function ExaminerPage(){
    return (
        <div>
            <Navbar/>
            <Examiner/>
            <Footer/>
        </div>
    );
}
export default ExaminerPage;