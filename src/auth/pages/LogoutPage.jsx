import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
      
    console.log("cerrando sesión..")
    localStorage.removeItem("user")


      setTimeout(() => {
        navigate("/auth/login")
    }, 2000);
    }, []);
   
    
  return (
    <div>
      
    </div>
  )
}

export default LogoutPage
