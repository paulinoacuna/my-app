import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AppCard from './AppCard'


const DashBoard = ({user}) => {


  const [showAdminCards, setShowAdminCards] = useState(false);
  const [showStudentCards, setShowStudentCards] = useState(false);



useEffect(() => {
  if (user?.role === "admin"){
    setShowStudentCards(false)
    setShowAdminCards(true)
}else if (user?.role === "student") {
    setShowAdminCards(false)
    setShowStudentCards(true)
}
  
}, [user]);


  return (
    <div className='right-dashboard'>
      <div style={{display: showAdminCards ? "flex" :"none" }}>
      <AppCard  cardName="Administra tus usuarios" cardUrl= "/admin/users" cardLabel= "Ver, crear y eliminar usuarios administrativos o estudiantes"/>      
      <AppCard  cardName="Gestiona tus preguntas" cardUrl= "/admin/questions" cardLabel= "Visualiza todas tus preguntas, crea nuevas, o cambialas"/>
      </div>

      <div style={{display: showStudentCards ? "flex" :"none" }}>
      <AppCard  cardName="Responder Preguntas" cardUrl= "/student/form" cardLabel= "Responde las preguntas que tu profesor ha dejado para tí"/>      
      </div>
      
      
    </div>
   

  )
}

export default DashBoard
