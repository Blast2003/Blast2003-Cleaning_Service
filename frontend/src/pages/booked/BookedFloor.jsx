import React from "react";
import FloorDetail_C from "../../ServiceList/ServiceTaskDetail/Floor/customer/floorDetail_C"
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function BookedFloorPage(){
    const location = useLocation();
    const { serviceId, examiner, staff, executionTime } = location.state || {};
    return(
        <div>
            <Navbar/>
            <FloorDetail_C serviceId={serviceId} examiner={examiner} staff={staff} executionTime={executionTime}/>
            <Footer/>
        </div>
    )
}
export default BookedFloorPage;