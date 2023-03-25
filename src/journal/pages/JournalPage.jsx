
import React, { useRef,useState,useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import AppCard from '../../components/AppCard';





import "./styles.css"


const JournalPage = () => {

const navigate = useNavigate();

const [user, setUser] = useState();

  useEffect(() => {
    //get user localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    user?.token ? setUser(user) : navigate("/auth/login")
  }, []);



  return (
    <div className='app-container'>
      <div className="up">
        <h4>Bienvenido al sistema de preguntas del Bootcamp DINARA FrontEnd</h4>
        {user?.role === "admin" ? <h4>Usuario Administrador</h4> : <h4>Usuario Estudiante</h4>}
        <h4>Hola {user?.name.split(" ")[0]}</h4>
      </div>


      <div className='down'>
        <div className='left-navbar'>
            <Link className='item' to="">Administrar estudiantes</Link>
            <Link className='item' to="">Gestionar preguntas</Link>
            <Link className='item' to="">Mas cositas</Link>
        </div>
        <div className="right-dashboard">

          <AppCard cardName="Administrar estudiantes" cardUrl= "/admin/users" cardLabel= "Ver, crear y eliminar usuarios estudiantes"/>      
          <AppCard cardName="Gestionar preguntas" cardUrl= "/admin/questions" cardLabel= "Visualiza todas tus preguntas, crea nuevas, cambialas o eliminalas"/>
        
        
        </div>

      </div>
    </div>
  )
}

export default JournalPage
