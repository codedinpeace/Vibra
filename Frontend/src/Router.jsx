import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Features/FaceDetection/Components/Home'
import Login from './Features/auth/pages/Login'
import Register from './Features/auth/pages/Register'
import { AuthContext } from './Features/auth/context/auth.context'

const Router = () => {

  const context = useContext(AuthContext)
  const {loggedIn} = context

  return (
    <>
    <Routes>
        <Route path='/' element={ loggedIn ? <Home/> : <Navigate to='/login' />} />
        <Route path='/login' element={ loggedIn ? <Navigate to='/' /> : <Login />} />
        <Route path='/register' element={loggedIn ? <Navigate to='/' /> : <Register />} />
    </Routes>
    </>
  )
}

export default Router