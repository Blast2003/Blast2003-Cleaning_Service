import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FurnitureNormal from "../../ServiceList/ServiceTaskDetail/Furniture/default/furnitureNormal";
import Footer from "../../Components/Footer/Footer";

function Furniture(){
    return(
        <div>
            <Navbar/>
            <FurnitureNormal/>
            <Footer/>
        </div>
    )
}
export default Furniture;