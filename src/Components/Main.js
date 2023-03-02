import React from 'react'
import App from './App'
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Main = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Main