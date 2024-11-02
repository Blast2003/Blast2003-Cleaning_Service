import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Carpet from "../contentEachPage/Staff/carpet";

function StaffCarpet(){
    return(
        <div>
            <Navbar/>
            <Carpet/>
            <Footer/>
        </div>
    );
}
export default StaffCarpet;