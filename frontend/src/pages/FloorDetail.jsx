import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FloorDetail from "../ServiceList/ServiceTaskDetail/Floor/floorDetail";

function FloorDetailPage(){
    return(
        <div>
            <Navbar/>
            <FloorDetail/>
            <Footer/>
        </div>
    );
}
export default FloorDetailPage;