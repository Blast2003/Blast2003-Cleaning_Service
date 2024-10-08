import './App.css'
import Feature from './Components/Features/Feature'
import Footer from './Components/Footer/Footer'
import Middle from './Components/Middle/Middle'
import Navbar from './Components/Navbar/Navbar'
import Top from './Components/Top/Top'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Top/>
      <Middle/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default App
