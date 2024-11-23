import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FloorNormal from "../../ServiceList/ServiceTaskDetail/Floor/default/floorNormal";

function Floor(){
    return(
        <div>
            <Navbar/>
            <FloorNormal/>
            <Footer/>
        </div>
    );
}
export default Floor;