import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CustomPricingTable from "../../Components/Pricing/price";

function PricingPage(){
    return(
        <div>
            <Navbar/>
            <CustomPricingTable/>
            <Footer/>
        </div>
    )
}
export default PricingPage;