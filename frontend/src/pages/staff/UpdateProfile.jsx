import React from 'react'
import StaffNavbar from "../../Staff/staffNavbar";
import FooterS from '../../Components/Footer/FooterS'
import UpdateProfileCard from '../../contentEachPage/updateProfilePage/updateProfileCard_S'

const UpdateProfile = () => {
  return (
    <div>
        <StaffNavbar/>
        <UpdateProfileCard/>
        <FooterS/>
    </div>
  )
}

export default UpdateProfile