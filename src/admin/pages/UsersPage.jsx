import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../../components/navigation/AppNavbar';
import FloatingAction from '../../components/FloatingAction';
import ManageUsers from '../../components/manage/ManageUsers';
import SideNavbar from '../../components/navigation/SideNavbar';

const UsersPage = () => {

  
const navigate = useNavigate();
const [user, setUser] = useState();

  useEffect(() => {
    //verify token
    const user = JSON.parse(localStorage.getItem("user"))
    user?.token ? setUser(user) : navigate("/auth/login")
  }, []);



  return (
    <div className='app-container'>
      <AppNavbar user={user}/>
    <div className='down' >
      <SideNavbar user={user}/>
      <ManageUsers/>
      <FloatingAction typeAction={"createUser"}/>
    </div>
    </div>
  )
}

export default UsersPage
