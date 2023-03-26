import React from 'react'
import AppCard from './AppCard'


const DashBoard = ({user}) => {

  if (user?.role === "admin"){
    //TODO mostrar links de admin, else nostrar links estudiante
}

  return (
    <div className='right-dashboard'>
      <AppCard cardName="Administra tus usuarios" cardUrl= "/admin/users" cardLabel= "Ver, crear y eliminar usuarios administrativos o estudiantes"/>      
      <AppCard cardName="Gestiona tus preguntas" cardUrl= "/admin/questions" cardLabel= "Visualiza todas tus preguntas, crea nuevas, o cambialas"/>
      
    </div>
   

  )
}

export default DashBoard
