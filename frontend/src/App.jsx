import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

// default
import HomePage from './pages/default/HomePage'
import AboutPage from './pages/default/AboutPage'
import OurTeamPage from './pages/default/OurTeamPage'
import ServicePage from './pages/default/ServicePage'
import ApprociatePage from './pages/default/ApprociatePage'
import Booking from './pages/default/Booking'
import ExaminerPage from './pages/examiner/ExaminerPage'
import StaffPage from './pages/staff/StaffPage'
import DetailStaffPage from "./pages/default/DetailStaffPage"
import UserAgreementPage from "./pages/default/UserAgreementPage"
import PricingPage from "./pages/default/PricingPage"

// booked 
import BookedCarpet from "./pages/booked/BookedCarpet"
import BookedFurniture from "./pages/booked/BookedFurniture"
import BookedWall from "./pages/booked/BookedWall"
import BookedFloor from "./pages/booked/BookedFloor"
import BookedServicePage from "./pages/booked/BookedServicePage"

//Service Pages
import Carpet from './pages/default/Carpet'
import Floor from './pages/default/Floor'
import Wall from './pages/default/Wall'
import Furniture from './pages/default/Furniture'


// authentication
import SignUpPage from './pages/default/SignUp'
import SignIn from './Authentication/SignIn'
import SignInStaff from './Authentication/SignInStaff'
import SignInExaminer from './Authentication/SignInExaminer'

//staff
import StaffCarpetPage from './pages/staff/StaffCarpet'
import StaffFloorPage from './pages/staff/StaffFloor'
import StaffWallPage from './pages/staff/StaffWall'
import StaffFurniturePage from './pages/staff/StaffFurniture'

//examiner
import ExaminerCarpetPage from './pages/examiner/ExaminerCarpet'
import ExaminerFloorPage from './pages/examiner/ExaminerFloor'
import ExaminerWallPage from './pages/examiner/ExaminerWall'
import ExaminerFurniturePage from './pages/examiner/ExaminerFurniture'


import { useRecoilValue } from 'recoil'
import customerAtom from './atom/customerAtom'
import staffAtom from './atom/staffAtom'
import examinerAtom from './atom/examinerAtom'
import contractAtom from './atom/contractAtom'
import logoutSuccessAtom from './atom/logoutSuccessAtom'
import UpdateProfile from './pages/default/UpdateProfile'
import UpdateProfileStaff from './pages/staff/UpdateProfile'
import UpdateProfileExaminer from './pages/examiner/UpdateProfile'
import SuccessPaymentPage from './pages/booked/SuccessPaymentPage'

function App() {

  const customer = useRecoilValue(customerAtom)
  const staff = useRecoilValue(staffAtom)
  const examiner = useRecoilValue(examinerAtom)
  const contract = useRecoilValue(contractAtom)

  //  alway reset after each refresh time when don't set the local storage
  // const logout = useRecoilValue(logoutSuccessAtom)
  console.log(customer)
  console.log(staff)
  console.log(examiner)
  console.log(contract)
  // console.log(logout)

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
        <Route path='/staffDetails/:staffName' element={<DetailStaffPage/>}/>
        <Route path='/customer/staffDetails/:staffName' element={<DetailStaffPage/>}/>


        {/* Service + Task Detail in each service (Default)*/}
        <Route path='/service/carpet' element={<Carpet/>}/>
        <Route path='/service/floor' element={<Floor/>}/>
        <Route path='/service/wall' element={<Wall/>}/>
        <Route path='/service/furniture' element={<Furniture/>}/>


        {/* Customer authentication*/}
        <Route path="/signin" element={customer ? <Navigate to={"/customer/home"}/> : <SignIn />} />
        <Route path="/signup" element={customer ? <Navigate to={"/customer/home"} /> : <SignUpPage/>} />


        {/* Customer Page */}
        <Route path="/customer/home" element={customer ?<HomePage/> : <Navigate to={"/home"}/>} />
        <Route path="/customer/pricing" element={customer ? <PricingPage/> : <Navigate to={"/pricing"}/>} />
        <Route path="/customer/aboutUs" element={customer ? <AboutPage/> : <Navigate to={"/aboutUs"}/>}/>
        <Route path="/customer/ourTeam" element={customer ? <OurTeamPage/> : <Navigate to={"/ourTeam"}/>} />
        <Route path="/customer/customerApprociate" element={customer ? <ApprociatePage/> : <Navigate to={"/customerApprociate"}/>} />
        <Route path='/customer/service' element={customer ? <ServicePage/> : <Navigate to={"/service"}/>}/>
        <Route path='/customer/staffDetails' element={ customer ? <Navigate to={"/customer/staffDetails/:staffName"}/> : <Navigate to={"/staffDetails/:staffName"}/>}/>
        <Route path='/customer/updateProfile' element={ customer ? <UpdateProfile/> : <Navigate to={"/"}/>}/>
        <Route path='/customer/booking' element={ customer ? <Booking/> : <Navigate to={"/"}/>}/>
        <Route path='/customer/userAgreement' element={ customer ? <UserAgreementPage/> : <Navigate to={"/"}/>}/>

        

        {/* Service + Task Detail in each service (Customer)*/}
        <Route path='/customer/service/carpet' element={customer ? <Carpet/> : <Navigate to={"/service/carpet"}/>}/>
        <Route path='/customer/service/floor' element={customer ? <Floor/> : <Navigate to={"/service/floor"}/>}/>
        <Route path='/customer/service/wall' element={customer ? <Wall/> : <Navigate to={"/service/wall"}/>}/>
        <Route path='/customer/service/furniture' element={customer ? <Furniture/> : <Navigate to={"/service/furniture"}/>}/>



        {/* Service + Task Detail in each service (Customer) after "Booked" */}
        <Route path='/customer/booked/service/carpet' element={customer ? <BookedCarpet/> : <Navigate to={"/"}/>}/>
        <Route path='/customer/booked/service/floor' element={customer ? <BookedFloor/> : <Navigate to={"/"}/>}/>
        <Route path='/customer/booked/service/wall' element={customer ? <BookedWall/> : <Navigate to={"/"}/>}/>
        <Route path='/customer/booked/service/furniture' element={customer ? <BookedFurniture/> : <Navigate to={"/"}/>}/>
        <Route path='/customer/booked/service' element={customer ? <BookedServicePage/> : <Navigate to={"/"}/>}/>
        <Route path='/customer/booked/service/success' element={customer ? <SuccessPaymentPage/> : <Navigate to={"/"}/>}/>
        



        {/* staff */}
        <Route path='/StaffSignin' element={ staff ? <Navigate to={"/staff"}/> : <SignInStaff/>}/>
        <Route path='/staff' element={ staff ? <StaffPage/> : <SignInStaff/>} />
        <Route path='/staff/staffcarpet' element={staff ? <StaffCarpetPage/> : <Navigate to={"/staff"}/>}/>
        <Route path='/staff/stafffloor' element={staff ? <StaffFloorPage/> : <Navigate to={"/staff"}/>}/>
        <Route path='/staff/staffwall' element={staff ? <StaffWallPage/> : <Navigate to={"/staff"}/>}/>
        <Route path='/staff/stafffurniture' element={staff ? <StaffFurniturePage/> : <Navigate to={"/staff"}/>}/>
        <Route path='/staff/updateProfile' element={ staff ? <UpdateProfileStaff/> : <Navigate to={"/staff"}/>}/>


        {/* examiner */}
        <Route path='/ExaminerSignin' element={examiner ? <Navigate to={"/examiner"}/> : <SignInExaminer/>}/>
        <Route path='/examiner' element={examiner ? <ExaminerPage/> : <SignInExaminer/>}/>
        <Route path='/examiner/examinercarpet' element={examiner ? <ExaminerCarpetPage/> : <Navigate to={"/examiner"}/>}/>
        <Route path='/examiner/examinerfloor' element={examiner ? <ExaminerFloorPage/> : <Navigate to={"/examiner"}/>}/>
        <Route path='/examiner/examinerwall' element={examiner ? <ExaminerWallPage/> : <Navigate to={"/examiner"}/>}/>
        <Route path='/examiner/examinerfurniture' element={examiner ? <ExaminerFurniturePage/> : <Navigate to={"/examiner"}/>}/>
        <Route path='/examiner/updateProfile' element={ examiner ? <UpdateProfileExaminer/> : <Navigate to={"/examiner"}/>}/>

      </Routes>
    </div>
  )
}

export default App
