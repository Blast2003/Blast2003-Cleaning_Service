import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import About from "../../contentEachPage/aboutUsPage/aboutUs";

function AboutPage(){
    return(
        <div>
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    );
}
export default AboutPage;