import React, { useState } from 'react'
import Pomodoro from './pages/Pomodoro'
import ShortBreak from './pages/Shortbreak'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  const [lightTheme, setLightTheme] = useState(true);
  console.log(lightTheme);
  
  return (
    <div className={`min-h-screen w-full ${lightTheme?'light':'dark'}`}>
     
      <Header lightTheme={lightTheme} setLightTheme={setLightTheme}/>
      <Navbar lightTheme={lightTheme}/>
      
      <Routes>
        <Route path='/' element={<Pomodoro lightTheme={lightTheme}/>}/>
        <Route path='/short' element={<ShortBreak lightTheme={lightTheme}/>}></Route>
      </Routes>

    </div>
  )
}

export default App
