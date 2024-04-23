import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeEN from './HomeEN.jsx'
import HomePL from './HomePL.jsx'
import './App.css'

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeEN />} />
          <Route path="/pl" element={<HomePL />} />
        </Routes>
      </BrowserRouter>
  ) 
  
}

export default App
