import React from 'react'
import ExaminerNavbar from "../../Examiner/examinerNavigation/ExaminerNavBar";
import FooterE from '../../Components/Footer/FooterE'
import UpdateProfileCard from '../../contentEachPage/updateProfilePage/UpdateProfileCard_E'

const UpdateProfile = () => {
  return (
    <div>
        <ExaminerNavbar/>
        <UpdateProfileCard/>
        <FooterE/>
    </div>
  )
}

export default UpdateProfile