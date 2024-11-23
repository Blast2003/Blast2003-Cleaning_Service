import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import WallNormal from "../../ServiceList/ServiceTaskDetail/Wall/default/wallNormal";
import Footer from "../../Components/Footer/Footer";

function Wall(){
    return(
        <div>
            <Navbar/>
            <WallNormal/>
            <Footer/>
        </div>
    );
}
export default Wall;