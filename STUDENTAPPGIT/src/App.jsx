import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Addstudent from './components/Addstudent'
import Viewstudent from './components/Viewstudent'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Addstudent/>}/>
        <Route path='/' element={<Viewstudent/>}/>

      </Routes>
    </>
  )
}

export default App
