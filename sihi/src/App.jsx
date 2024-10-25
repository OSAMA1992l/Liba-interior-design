
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Navbar/Home'
import Service from './Components/Navbar/Service'
import Contact from './Components/Navbar/Contact'
import Footer from './Components/footer/footer'

function App() {

  return (
     <>
   <Navbar/>
   
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/Contact' element={<Contact/>}/>
   <Route path='/Service' element={<Service/>}/>
   </Routes>
   <Service/>
   <Contact/>
   <Footer/>
     </>
  )
}

export default App
