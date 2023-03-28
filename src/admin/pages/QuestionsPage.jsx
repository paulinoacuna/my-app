import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../../components/AppNavbar';
import SideNavbar from '../../components/SideNavbar';
import ManageQuestions from '../../components/ManageQuestions';
import FloatingAction from '../../components/FloatingAction';

const QuestionsPage = () => {

  
  
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
      <ManageQuestions/>
      <FloatingAction typeAction={"createQuestion"}/>
    </div>
    </div>

    

  )
}

export default QuestionsPage
