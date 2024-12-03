import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import DetailStaff from "../../contentEachPage/staffDetails/DetailStaff.jsx" ;
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { useLocation } from "react-router-dom";

function DetailStaffPage() {
  const location = useLocation();
  const {staff, name, title} = location.state || {};

  return (
    <div>
      <Navbar/>
      <DetailStaff staff={staff} name={name} title={title}/>
      <Footer />
    </div>
  );
}

export default DetailStaffPage;
