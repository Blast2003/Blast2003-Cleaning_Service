import './App.css'
import DatePickerTime from './Components/datePicker'
import Feature from './Components/Features/Feature'
import Footer from './Components/Footer/Footer'
import Middle from './Components/Middle/Middle'
import Navbar from './Components/Navbar/Navbar'
import SignUp from './Components/SignUp/SignUp'
import Top from './Components/Top/Top'
import StaffCarpet from './pages/staffCarpet'
import StaffFurniture from './pages/staffFurniture'

function App() {
  return (
    <div className='container'>
      <div className="web">
        {/* <Navbar/>
        <Top/>
        <Middle/>
        <Feature/>
        <Footer/>  */}
        <StaffCarpet/>
        {/* <StaffFurniture/> */}
        {/* <DatePickerTime/> */}
      </div>  
    </div>
  )
}

export default App
