import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Statebasics from './components/Statebasics'
import Eg from './components/Eg'
import Counter from './components/Counter'
import Textinput from './components/Textinput'
import Datafetch from './components/Datafetch'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dataform from './components/Dataform'
import Datacard from './components/Datacard'


function App() {
  const [count, setCount] = useState(0)
    
  return (
    <>
     <Navbar/>
     
       
        <Routes>
          <Route path='/' element={<Datafetch/>}/>
          <Route path='/c' element={<Counter/>}/>
          <Route path='/t' element={<Textinput/>}/>
          <Route path='/f' element={<Dataform/>}/>          
          <Route path='/dc' element={<Datacard/>}/>          
        </Routes>
 
    </>
  )
}

export default App
