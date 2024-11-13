import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Top from "../../Components/Top/Top";
import Middle from "../../Components/Middle/Middle";
import Feature from "../../Components/Features/Feature";
import Footer from "../../Components/Footer/Footer";

function HomePage(){
    return (
        <div>
            <Navbar/>
            <Top/>
            <Middle/>
            <Feature/>
            <Footer/>
        </div>
    );
}
export default HomePage;