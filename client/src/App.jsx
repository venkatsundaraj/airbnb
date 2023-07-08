import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Hotels from './pages/Hotels'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Hotels/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/Register" element={<Register/>}/>
      </Routes>
     </React.Fragment>
  )
}

export default App
