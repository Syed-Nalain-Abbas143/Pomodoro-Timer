import React, { useState } from 'react'
import Pomodoro from './pages/Pomodoro'
import ShortBreak from './pages/Shortbreak'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import themeContext from './Context/globalContext'

const App = () => {
  const [theme, setTheme] = useState('light');
  
  
  return (
    <themeContext.Provider value={{theme,setTheme}}>
      
      <div className={`min-h-screen w-full ${theme==='light'?'light':'dark'}`}>
     
      <Header />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Pomodoro />}/>
        <Route path='/short' element={<ShortBreak />}/>
      </Routes>

    </div>

    </themeContext.Provider>
  )
}

export default App
