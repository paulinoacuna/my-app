import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../../components/AppNavbar';
import ManageUsers from '../../components/ManageUsers';
import SideNavbar from '../../components/SideNavbar';

const UsersPage = () => {

  
const navigate = useNavigate();
const [user, setUser] = useState();

  useEffect(() => {
    //get user localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    user?.token ? setUser(user) : navigate("/auth/login")
  }, []);


  return (
    <div className='app-container'>
      <AppNavbar user={user}/>
    <div className='down' >
      <SideNavbar user={user}/>
      <ManageUsers/>
    </div>
    </div>
  )
}

export default UsersPage