import React from "react";
import ExaminerNavbar from "../Examiner/examinerNavigation/ExaminerNavBar";
import FurnitureDetail from "../ServiceList/ServiceTaskDetail/Furniture/furnitureDetail";
import Footer from "../Components/Footer/Footer";

function ExaminerFurniturePage(){
    return(
        <div>
            <ExaminerNavbar/>
            <FurnitureDetail/>
            <Footer/>
        </div>
    )
}
export default ExaminerFurniturePage;