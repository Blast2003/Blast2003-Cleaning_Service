import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import OurTeam from "../../contentEachPage/ourTeamPage/ourTeam";

function OurTeamPage(){
    return(
        <div>
            <Navbar/>
            <OurTeam/>
            <Footer/>
        </div>
    );
}
export default OurTeamPage;