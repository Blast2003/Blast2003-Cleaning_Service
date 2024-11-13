import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CarpetNormal from "../../ServiceList/ServiceTaskDetail/Carpet/carpetNormal";

function Carpet(){
    return(
        <div>
            <Navbar/>
            <CarpetNormal/>
            <Footer/>
        </div>
    );
}
export default Carpet;