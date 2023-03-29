import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Link } from 'react-router-dom'

const SideNavbar = ({user}) => {


  const [displayed, setDisplayed] = useState(false);



    useEffect(() => {
      if (user?.role === "admin"){
        //TODO mostrar links de admin, else nostrar links estudiante
        setDisplayed(true)

    }else if (user?.role === "student") {
      setDisplayed(false)
    }
    }, [user]);


    
  return (

    <div className='left-navbar'>
        <Link className='item' to="/app">DashBoard</Link>
        
        
        <Link className='item' style={{display: displayed ? 'block' : 'none' }}  to="/admin/users">Administrar Usuarios</Link>
        <Link className='item' style={{display: displayed ? 'block' : 'none' }} to="/admin/questions">Gestionar preguntas</Link>
      

        <Link className='item' to="/auth/logout">Salir</Link>
    </div>

  )
}

export default SideNavbar
