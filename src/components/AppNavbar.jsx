
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo/Logo'


const AppNavbar = ({user}) => {

  

  return (
    <div className='up'>
      <div style={{display: "flex",marginLeft: "20px"}}>
      <Logo/>
      <h4 style={{display: "flex", marginLeft: "20px"}}>Sistema de preguntas | Bootcamp DINARA</h4>
      </div>

      <div style={{display: "flex",marginRight: "20px"}}>

      {user?.role === "admin" ? <h4>Usuario Administrador</h4> : <h4>Usuario Estudiante</h4>}

      <h4 style={{marginLeft: "20px"}} >  Hola {user?.name.split(" ")[0]}</h4>
      </div>
      
      
    </div>
  )
}

export default AppNavbar
