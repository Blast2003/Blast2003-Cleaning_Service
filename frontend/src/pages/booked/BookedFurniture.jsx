import React from "react";
import FurnitureDetail_C from "../../ServiceList/ServiceTaskDetail/Furniture/customer/furnitureDetail_C";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function BookedFurniturePage(){
    const location = useLocation();
    const { serviceId, examiner, staff, executionTime } = location.state || {};
    return(
        <div>
            <Navbar/>
            <FurnitureDetail_C serviceId={serviceId} examiner={examiner} staff={staff} executionTime={executionTime} />
            <Footer/>
        </div>
        
    );
}
export default BookedFurniturePage;