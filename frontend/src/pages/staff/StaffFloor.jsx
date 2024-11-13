import React from "react";
import StaffNavbar from "../../Staff/staffNavbar";
import FloorDetail from "../../ServiceList/ServiceTaskDetail/Floor/floorDetail";
import Footer from "../../Components/Footer/Footer";

function StaffFloorPage(){
    return(
        <div>
            <StaffNavbar/>
            <FloorDetail/>
            <Footer/>
        </div>
    )
}
export default StaffFloorPage;