import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Book from './Book'
import Plan from './Plan'
import About from './About'
import Ticket from './Ticket'
import Virtual from './Virtual'
import Monument from './Monument'
import Map from './Map'
import LandingPage from './LandingPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Objects from './Objects'
function App(props) {
  return (
    <BrowserRouter>
    <div>
      <Routes>
    <Route path="/register" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/book" element={<Book/>}></Route>
    <Route path="/plan" element={<Plan/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/ticket" element={<Ticket/>}></Route>
    <Route path="/virtual" element={<Virtual/>}></Route>
    <Route path="/monument" element={<Monument Objects={Objects}/>}></Route>
    <Route path="/map" element={<Map/>}></Route>
    <Route path="/" element={<LandingPage/>}></Route>
   

   
     </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
