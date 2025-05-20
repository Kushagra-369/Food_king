import React from 'react'
import Navbar from './components/Navbar'
import Pizza from './components/Pizza'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Pizza/>
      </BrowserRouter>

    </div>
  )
}
