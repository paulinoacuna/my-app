import React from 'react'
import AppCard from './AppCard'


const DashBoard = ({user}) => {

  if (user?.role === "admin"){
    //TODO mostrar links de admin, else nostrar links estudiante
}

  return (
    <div className='right-dashboard'>
      <AppCard cardName="Administrar estudiantes" cardUrl= "/admin/users" cardLabel= "Ver, crear y eliminar usuarios estudiantes"/>      
      <AppCard cardName="Gestionar preguntas" cardUrl= "/admin/questions" cardLabel= "Visualiza todas tus preguntas, crea nuevas, cambialas o eliminalas"/>
    </div>
   

  )
}

export default DashBoard
