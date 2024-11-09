import React from "react";
import StaffNavbar from "../Staff/staffNavbar";
import FurnitureDetail from "../ServiceList/ServiceTaskDetail/Furniture/furnitureDetail";
import Footer from "../Components/Footer/Footer";

function StaffFurniturePage(){
    return(
        <div>
            <StaffNavbar/>
            <FurnitureDetail/>
            <Footer/>
        </div>
        
    );
}
export default StaffFurniturePage;