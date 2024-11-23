import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import DetailStaff from "../../contentEachPage/staffDetails/DetailStaff.jsx" ;
import Navbar from "../../Components/Navbar/Navbar.jsx";

function DetailStaffPage() {
  return (
    <div>
      <Navbar/>
      <DetailStaff />
      <Footer />
    </div>
  );
}

export default DetailStaffPage;
