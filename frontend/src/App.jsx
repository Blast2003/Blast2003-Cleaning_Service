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
import PricingPage from "./pages/default/PricingPage"


import UserAgreementPage from './pages/UserAgreementPage'
import StaffDetailsPage from './pages/detailStaffPage'
import BookedServicesPage from './pages/bookedServicesPage'

import { useRecoilValue } from 'recoil'
import customerAtom from './atom/customerAtom'
import staffAtom from './atom/staffAtom'
import examinerAtom from './atom/examinerAtom'
import contractAtom from './atom/contractAtom'


function App() {

  const customer = useRecoilValue(customerAtom)
  const staff = useRecoilValue(staffAtom)
  const examiner = useRecoilValue(examinerAtom)
  const contract = useRecoilValue(contractAtom)
  console.log(customer)
  console.log(staff)
  console.log(examiner)
  console.log(contract)

  return (
    <div>
      <Routes>

        {/* Default Page */}
        <Route path='/' element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path='/aboutUs' element={<AboutPage />} />
        <Route path='/ourTeam' element={<OurTeamPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/customerApprociate' element={<ApprociatePage />} />

        {/* Service + Task Detail in each service (Default)*/}
        <Route path='/service/carpet' element={<Carpet />} />
        <Route path='/service/floor' element={<Floor />} />
        <Route path='/service/wall' element={<Wall />} />
        <Route path='/service/furniture' element={<Furniture />} />

        {/* Customer Page */}
        <Route path="/customer/home" element={customer ? <HomePage /> : <Navigate to={"/home"} />} />
        <Route path="/customer/pricing" element={customer ? <PricingPage /> : <Navigate to={"/pricing"} />} />
        <Route path="/customer/aboutUs" element={customer ? <AboutPage /> : <Navigate to={"/aboutUs"} />} />
        <Route path="/customer/ourTeam" element={customer ? <OurTeamPage /> : <Navigate to={"/ourTeam"} />} />
        <Route path="/customer/customerApprociate" element={customer ? <ApprociatePage /> : <Navigate to={"/customerApprociate"} />} />
        <Route path='/customer/service' element={customer ? <ServicePage /> : <Navigate to={"/service"} />} />
        <Route path='/customer/booking' element={customer ? <Booking /> : <Navigate to={"/signin"} />} />


        {/* Service + Task Detail in each service (Customer)*/}
        <Route path='/customer/service/carpet' element={customer ? <Carpet /> : <Navigate to={"/service/carpet"} />} />
        <Route path='/customer/service/floor' element={customer ? <Floor /> : <Navigate to={"/service/floor"} />} />
        <Route path='/customer/service/wall' element={customer ? <Wall /> : <Navigate to={"/service/wall"} />} />
        <Route path='/customer/service/furniture' element={customer ? <Furniture /> : <Navigate to={"/service/furniture"} />} />
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
        <Route path='/floor' element={<Floor />} />
        <Route path='/wall' element={<Wall />} />
        <Route path='/furniture' element={<Furniture />} />

        {/* Customer */}
        <Route path="/signin" element={customer ? <HomePage /> : <SignIn />} />
        <Route path="/signup" element={customer ? <HomePage /> : <SignUpPage />} />

        {/* <Route path='/agreement' element={customer ? <UserAgreementPage /> : <HomePage />} /> */}
        <Route path='/agreement' element={<UserAgreementPage />} />

        {/*kiểm lại thử cái path vô staff này nha */}
        {/* <Route path='/staffdetails' element={customer ? <StaffDetailsPage /> : <HomePage />} /> */}
        <Route path='/staffdetails' element={<StaffDetailsPage />} />
        {/* <Route path="/bookedservices" element={customer ? <BookedServicesPage /> : <HomePage />} /> */}
        <Route path="/bookedservices" element={<BookedServicesPage />} />


        {/* staff */}
        <Route path='/StaffSignin' element={staff ? <Navigate to={"/staff"} /> : <SignInStaff />} />

        <Route path='/staff' element={staff ? <StaffPage /> : <SignInStaff />} />

        <Route path='/staffcarpet' element={staff ? <StaffCarpetPage /> : <SignInStaff />} />
        <Route path='/stafffloor' element={staff ? <StaffFloorPage /> : <SignInStaff />} />
        <Route path='/staffwall' element={staff ? <StaffWallPage /> : <SignInStaff />} />
        <Route path='/stafffurniture' element={staff ? <StaffFurniturePage /> : <SignInStaff />} />

        {/* examiner */}
        <Route path='/ExaminerSignin' element={examiner ? <Navigate to={"/examiner"} /> : <SignInExaminer />} />

        <Route path='/examiner' element={examiner ? <ExaminerPage /> : <SignInExaminer />} />

        <Route path='/examinercarpet' element={examiner ? <ExaminerCarpetPage /> : <SignInExaminer />} />
        <Route path='/examinerfloor' element={examiner ? <ExaminerFloorPage /> : <SignInExaminer />} />
        <Route path='/examinerwall' element={examiner ? <ExaminerWallPage /> : <SignInExaminer />} />
        <Route path='/examinerfurniture' element={examiner ? <ExaminerFurniturePage /> : <SignInExaminer />} />
      </Routes>
    </div>
  )
}

export default App
