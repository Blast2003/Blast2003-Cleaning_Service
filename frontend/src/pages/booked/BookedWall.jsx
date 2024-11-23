import React from "react";
import WallDetail_C from "../../ServiceList/ServiceTaskDetail/Wall/customer/wallDetail_C"
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function BookedWallPage(){
    const location = useLocation();
    const { serviceId, examiner, staff, executionTime } = location.state || {};
    return(
        <div>
            <Navbar/>
            <WallDetail_C serviceId={serviceId} examiner={examiner} staff={staff} executionTime={executionTime}/>
            <Footer/>
        </div>
    )
}
export default BookedWallPage;