import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Single from './Single'
import Multiple from './Multiple'
import About from './About'
import ErrorPage from './ErrorPage'
import Navbar from './Navbar'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/single" element={<Single />} />
          <Route path="/multiple" element={<Multiple />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App