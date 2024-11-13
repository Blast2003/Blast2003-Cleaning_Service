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
        <Route path='/' element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path='/aboutUs' element={<AboutPage/>}/>
        <Route path='/ourTeam' element={<OurTeamPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/customerApprociate' element={<ApprociatePage/>}/>
        <Route path='/booking' element={ customer ? <Booking/> : <SignIn/>}/>


        {/* Service + Task Detail */}
        <Route path='/carpet' element={<Carpet/>}/>
        <Route path='/floor' element={<Floor/>}/>
        <Route path='/wall' element={<Wall/>}/>
        <Route path='/furniture' element={<Furniture/>}/>

        {/* Customer */}
        <Route path="/signin" element={customer ? <HomePage/> : <SignIn />} />
        <Route path="/signup" element={customer ? <HomePage /> : <SignUpPage/>} />


        {/* staff */}
        <Route path='/StaffSignin' element={ staff ? <Navigate to={"/staff"}/> : <SignInStaff/>}/>

        <Route path='/staff' element={ staff ? <StaffPage/> : <SignInStaff/>} />

        <Route path='/staffcarpet' element={staff ? <StaffCarpetPage/> : <SignInStaff/>}/>
        <Route path='/stafffloor' element={staff ? <StaffFloorPage/> : <SignInStaff/>}/>
        <Route path='/staffwall' element={staff ? <StaffWallPage/> : <SignInStaff/>}/>
        <Route path='/stafffurniture' element={staff ? <StaffFurniturePage/> : <SignInStaff/>}/>

        {/* examiner */}
        <Route path='/ExaminerSignin' element={examiner ? <Navigate to={"/examiner"}/> : <SignInExaminer/>}/>

        <Route path='/examiner' element={examiner ? <ExaminerPage/> : <SignInExaminer/>}/>

        <Route path='/examinercarpet' element={examiner ? <ExaminerCarpetPage/> : <SignInExaminer/>}/>
        <Route path='/examinerfloor' element={examiner ? <ExaminerFloorPage/> : <SignInExaminer/>}/>
        <Route path='/examinerwall' element={examiner ? <ExaminerWallPage/> : <SignInExaminer/>}/>
        <Route path='/examinerfurniture' element={examiner ? <ExaminerFurniturePage/> : <SignInExaminer/>}/>
      </Routes>
    </div>
  )
}

export default App
