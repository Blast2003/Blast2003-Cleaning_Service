import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import CarpetDetail from "../ServiceList/ServiceTaskDetail/Carpet/carpetDetail";

function CarpetDetailPage(){
    return(
        <div>
            <Navbar/>
            <CarpetDetail/>
            <Footer/>
        </div>
    );
}
export default CarpetDetailPage;