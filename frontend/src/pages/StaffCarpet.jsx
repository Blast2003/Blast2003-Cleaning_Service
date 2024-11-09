import React from "react";
import StaffNavbar from "../Staff/staffNavbar";
import CarpetDetail from "../ServiceList/ServiceTaskDetail/Carpet/carpetDetail";
import Footer from "../Components/Footer/Footer";
import { defer } from "react-router-dom";

function StaffCarpetPage(){
    return(
        <div>
            <StaffNavbar/>
            <CarpetDetail/>
            <Footer/>
        </div>
    )
}
export default StaffCarpetPage;