import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from "../pages/LoginPage"

const AuthRouter = () => {
  //Nivel manejando pages
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
    
      <Route path='/*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AuthRouter
