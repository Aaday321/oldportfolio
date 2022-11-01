import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {NavBar} from './comps/Nav/NavBar'
import {
  Route,
  Routes,
  Link,
  BrowserRouter
} from 'react-router-dom'
import React from 'react'
import Nav from './pages/Nav'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
