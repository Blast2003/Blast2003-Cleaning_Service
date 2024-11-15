import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/default/HomePage'
import AboutPage from './pages/default/AboutPage'
import OurTeamPage from './pages/default/OurTeamPage'
import ServicePage from './pages/default/ServicePage'
import ApprociatePage from './pages/default/ApprociatePage'
import Booking from './pages/default/Booking'
import ExaminerPage from './pages/examiner/ExaminerPage'
import StaffPage from './pages/staff/StaffPage'

// Service Details
import CarpetNormal from "./ServiceList/ServiceTaskDetail/Carpet/carpetNormal"
import FloorNormal from "./ServiceList/ServiceTaskDetail/Floor/floorNormal"
import FurnitureNormal from "./ServiceList/ServiceTaskDetail/Furniture/furnitureNormal"
import WallNormal from "./ServiceList/ServiceTaskDetail/Wall/wallNormal"

//Service Pages
import Carpet from './pages/default/Carpet'
import Floor from './pages/default/Floor'
import Wall from './pages/default/Wall'
import Furniture from './pages/default/Furniture'


import SignUpPage from './pages/default/SignUp'
import SignIn from './Authentication/SignIn'
import SignInStaff from './Authentication/SignInStaff'
import SignInExaminer from './Authentication/SignInExaminer'

import StaffCarpetPage from './pages/staff/StaffCarpet'
import StaffFloorPage from './pages/staff/StaffFloor'
import StaffWallPage from './pages/staff/StaffWall'
import StaffFurniturePage from './pages/staff/StaffFurniture'

import ExaminerCarpetPage from './pages/examiner/ExaminerCarpet'
import ExaminerFloorPage from './pages/examiner/ExaminerFloor'
import ExaminerWallPage from './pages/examiner/ExaminerWall'
import ExaminerFurniturePage from './pages/examiner/ExaminerFurniture'

import UserAgreement from './pages/UserAgreementPage'
import StaffDetails from './pages/detailStaffPage'

import { useRecoilValue } from 'recoil'
import customerAtom from './atom/customerAtom'
import staffAtom from './atom/staffAtom'
import examinerAtom from './atom/examinerAtom'


function App() {

  const customer = useRecoilValue(customerAtom)
  const staff = useRecoilValue(staffAtom)
  const examiner = useRecoilValue(examinerAtom)
  console.log(customer)
  console.log(staff)
  console.log(examiner)

  return (
    <div>
      <Routes>

        {/* Default Page */}
        <Route path='/' element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/aboutUs' element={<AboutPage />} />
        <Route path='/ourTeam' element={<OurTeamPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/customerApprociate' element={<ApprociatePage />} />
        <Route path='/booking' element={<Booking />} />


        {/* Authentication: Staff + Examiner */}
        <Route path='/examiner' element={examiner ? <ExaminerPage /> : <SignInExaminer />} />
        <Route path='/staff' element={staff ? <StaffPage /> : <SignInStaff />} />

        {/* Service + Task Detail */}
        <Route path='/carpet' element={<Carpet />} />
        <Route path='/carpetdetail' element={<CarpetNormal />} />
        <Route path='/floor' element={<Floor />} />
        <Route path='/floordetail' element={<FloorNormal />} />
        <Route path='/wall' element={<Wall />} />
        <Route path='/walldetail' element={<WallNormal />} />
        <Route path='/furniture' element={<Furniture />} />
        <Route path='/furnituredetail' element={<FurnitureNormal />} />

        {/* Customer */}
        <Route path="/signin" element={customer ? <HomePage /> : <SignIn />} />
        <Route path="/signup" element={customer ? <HomePage /> : <SignUpPage />} />
        <Route path='/agreement' element={customer ? <UserAgreement /> : <HomePage />} />

        {/*kiểm lại thử cái path vô staff này nha */}
        <Route path='/staffdetails' element={customer ? <StaffDetails /> : <HomePage />} />


        {/* staff */}
        <Route path='/StaffSignin' element={staff ? <Navigate to={"/staff"} /> : <SignInStaff />} />

        <Route path='/staffcarpet' element={staff ? <StaffCarpetPage /> : <SignInStaff />} />
        <Route path='/stafffloor' element={staff ? <StaffFloorPage /> : <SignInStaff />} />
        <Route path='/staffwall' element={staff ? <StaffWallPage /> : <SignInStaff />} />
        <Route path='/stafffurniture' element={staff ? <StaffFurniturePage /> : <SignInStaff />} />

        {/* examiner */}
        <Route path='/ExaminerSignin' element={examiner ? <Navigate to={"/examiner"} /> : <SignInExaminer />} />

        <Route path='/examinercarpet' element={examiner ? <ExaminerCarpetPage /> : <SignInExaminer />} />
        <Route path='/examinerfloor' element={examiner ? <ExaminerFloorPage /> : <SignInExaminer />} />
        <Route path='/examinerwall' element={examiner ? <ExaminerWallPage /> : <SignInExaminer />} />
        <Route path='/examinerfurniture' element={examiner ? <ExaminerFurniturePage /> : <SignInExaminer />} />
      </Routes>
    </div>
  )
}

export default App
