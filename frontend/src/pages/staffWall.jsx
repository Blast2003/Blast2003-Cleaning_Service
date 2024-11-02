import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Wall from "../contentEachPage/Staff/wall";
import Footer from "../Components/Footer/Footer";

function StaffWall(){
    return(
        <div>
            <Navbar/>
            <Wall/>
            <Footer/>
        </div>
    );
}
export default StaffWall;