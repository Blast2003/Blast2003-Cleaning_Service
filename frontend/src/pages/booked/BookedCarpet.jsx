import React from "react";
import CarpetDetail_C from "../../ServiceList/ServiceTaskDetail/Carpet/customer/carpetDetail_C"
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function BookedCarpetPage(){
    const location = useLocation();
    const { serviceId, examiner,  staff, executionTime } = location.state || {};
    return(
        <div>
            <Navbar/>
            <CarpetDetail_C serviceId={serviceId} examiner={examiner} staff={staff} executionTime={executionTime} />
            <Footer/>
        </div>
    )
}
export default BookedCarpetPage;