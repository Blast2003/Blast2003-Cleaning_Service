import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import OurTeamPage from './pages/OurTeamPage'
import ServicePage from './pages/ServicePage'
import ApprociatePage from './pages/ApprociatePage'
import SignUp from './Components/SignUp/SignUp'
import Booking from './pages/Booking'
import ExaminerPage from './pages/ExaminerPage'
import Staff from './pages/StaffPage'

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
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/examiner' element={<ExaminerPage/>}/>
        <Route path='/staff' element={<Staff/>}/>
      </Routes>
    </div>
  )
}

export default App
