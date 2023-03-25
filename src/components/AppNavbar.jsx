import React from 'react'
const AppNavbar = ({user}) => {

  return (
    <div className='up'>
      <h4>Bienvenido al sistema de preguntas del Bootcamp DINARA FrontEnd</h4>
        {user?.role === "admin" ? <h4>Usuario Administrador</h4> : <h4>Usuario Estudiante</h4>}
      <h4>Hola {user?.name.split(" ")[0]}</h4>
    </div>
  )
}

export default AppNavbar
