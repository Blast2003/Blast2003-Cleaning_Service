import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import OurTeamPage from './pages/OurTeamPage'
import ServicePage from './pages/ServicePage'
import ApprociatePage from './pages/ApprociatePage'
import Booking from './pages/Booking'
import ExaminerPage from './pages/ExaminerPage'
import StaffPage from './pages/StaffPage'

//Service Pages
import Carpet from './pages/Carpet'
import CarpetDetailPage from './pages/CarpetDetail'
import Floor from './pages/Floor'
import FloorDetailPage from './pages/FloorDetail'
import Wall from './pages/Wall'
import Furniture from './pages/Furniture'
import WallDetailPage from './pages/WallDetail'
import FurnitureDetailPage from './pages/FurnitureDetail'
import SignUpPage from './pages/SignUp'
import SignIn from './Authentication/SignIn'
import SignInStaff from './Authentication/SignInStaff'
import SignInExaminer from './Authentication/SignInExaminer'
import StaffCarpetPage from './pages/StaffCarpet'
import StaffFloorPage from './pages/StaffFloor'
import StaffWallPage from './pages/StaffWall'
import StaffFurniturePage from './pages/StaffFurniture'
import ExaminerCarpetPage from './pages/ExaminerCarpet'
import ExaminerFloorPage from './pages/ExaminerFloor'
import ExaminerWallPage from './pages/ExaminerWall'
import ExaminerFurniturePage from './pages/ExaminerFurniture'
import PricingPage from './pages/PricingPage'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/aboutUs' element={<AboutPage/>}/>
        <Route path='/ourTeam' element={<OurTeamPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/customerApprociate' element={<ApprociatePage/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/examiner' element={<ExaminerPage/>}/>
        <Route path='/carpet' element={<Carpet/>}/>
        <Route path='/carpetdetail' element={<CarpetDetailPage/>}/>
        <Route path='/floor' element={<Floor/>}/>
        <Route path='/floordetail' element={<FloorDetailPage/>}/>
        <Route path='/staff' element={<StaffPage/>}/>
        <Route path='/wall' element={<Wall/>}/>
        <Route path='/walldetail' element={<WallDetailPage/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/furnituredetail' element={<FurnitureDetailPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/StaffSignin' element={<SignInStaff/>}/>
        <Route path='/ExaminerSignin' element={<SignInExaminer/>}/>
        <Route path='/staffcarpet' element={<StaffCarpetPage/>}/>
        <Route path='/stafffloor' element={<StaffFloorPage/>}/>
        <Route path='/staffwall' element={<StaffWallPage/>}/>
        <Route path='/stafffurniture' element={<StaffFurniturePage/>}/>
        <Route path='/examinercarpet' element={<ExaminerCarpetPage/>}/>
        <Route path='/examinerfloor' element={<ExaminerFloorPage/>}/>
        <Route path='/examinerwall' element={<ExaminerWallPage/>}/>
        <Route path='/examinerfurniture' element={<ExaminerFurniturePage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
