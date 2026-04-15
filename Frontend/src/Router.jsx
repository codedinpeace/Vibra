import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Features/FaceDetection/Components/Home'
import Login from './Features/auth/pages/Login'
import Register from './Features/auth/pages/Register'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}

export default Router