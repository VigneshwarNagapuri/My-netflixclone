import React from 'react'
import Home from './pages/Home/home.jsx'
import Login from './pages/Login/Login.jsx'
import { Routes,Route } from 'react-router-dom'
import Player from './pages/Login/Login.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      
    </div>
  )
}

export default App
