import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
//import JournalApp from '../../JournalApp'
import JournalPage from '../pages/JournalPage'


const JournalRouter = () => {
  //Nivel manejando pages
  return (
   <Routes>
    <Route path='/' element={<JournalPage/>}/>

    <Route path='/*' element={<Navigate to="/"/>}/>
    <Route/>

   </Routes>
  )
}

export default JournalRouter
