import React from 'react'
import { Link } from 'react-router-dom'

const SideNavbar = ({user}) => {

    if (user?.role === "admin"){
        //TODO mostrar links de admin, else nostrar links estudiante
    }
    
  return (

    <div className='left-navbar'>
        <Link className='item' to="/admin/users">Administrar estudiantes</Link>
        <Link className='item' to="/admin/questions">Gestionar preguntas</Link>
        <Link className='item' to="/auth/logout">Salir</Link>
    </div>

  )
}

export default SideNavbar
