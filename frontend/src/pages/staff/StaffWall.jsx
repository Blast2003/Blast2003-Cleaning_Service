import React from "react";
import StaffNavbar from "../../Staff/staffNavbar";
import WallDetail from "../../ServiceList/ServiceTaskDetail/Wall/wallDetail";
import Footer from "../../Components/Footer/Footer";

function StaffWallPage(){
    return(
        <div>
            <StaffNavbar/>
            <WallDetail/>
            <Footer/>
        </div>
    )
}
export default StaffWallPage;