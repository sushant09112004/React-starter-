import React from 'react'
import { useState } from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Home from './components/test/page'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div> 
    <Home/>
     {/* <Navbar/>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes> */}
   </div>
  )
}

export default App
