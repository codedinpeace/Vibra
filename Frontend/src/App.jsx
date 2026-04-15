import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Features/FaceDetection/Components/Home'
import Router from './Router'
import { useAuthStore } from './Features/auth/hooks/useAuthStore'

const App = () => {

  const {handleCheck} = useAuthStore()

  useEffect(()=>{
    (async () => {
      await handleCheck()
    })();
  }, [])

  return (
    <>
   <Router />
    </>
  )
}

export default App