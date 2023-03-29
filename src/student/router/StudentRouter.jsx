import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import FormPage from '../pages/FormPage'


const StudentRouter = () => {

  return (
    <Routes>
      <Route path='/form' element={<FormPage/>}/>
      <Route path='/*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default StudentRouter
 

