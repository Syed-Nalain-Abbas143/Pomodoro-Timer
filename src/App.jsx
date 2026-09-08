import React from 'react'
import Pomodoro from './pages/Pomodoro'
import ShortBreak from './pages/Shortbreak'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div className=''>
      <Header />
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Pomodoro />}/>
        <Route path='/short' element={<ShortBreak/>}></Route>
      </Routes>
    </div>
  )
}

export default App
