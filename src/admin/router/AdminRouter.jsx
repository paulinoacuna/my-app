import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import QuestionsPage from '../pages/QuestionsPage'
import UsersPage from '../pages/UsersPage'

const AuthRouter = () => {
  //Nivel manejando pages
  return (
    <Routes>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/questions' element={<QuestionsPage/>}/>
      <Route path='/*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AuthRouter
 

