import React, { useEffect, useState } from 'react'
import Pomodoro from './pages/Pomodoro'
import ShortBreak from './pages/Shortbreak'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import themeContext from './Context/globalContext'

const App = () => {
  const [theme, setTheme] = useState(()=>{
    const getTheme = localStorage.getItem("theme");
    return getTheme || 'light';
  });
  
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem("theme",theme)
  }, [theme]);

  return (
    
      
      <div>

     <themeContext.Provider value={{theme,setTheme}}>

      <Header />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Pomodoro />}/>
        <Route path='/short' element={<ShortBreak />}/>
      </Routes>

      </themeContext.Provider>

    </div>

    
  )
}

export default App
