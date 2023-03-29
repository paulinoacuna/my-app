import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../../components/navigation/AppNavbar';
import SideNavbar from '../../components/navigation/SideNavbar';
import ManageQuestions from '../../components/manage/ManageQuestions';
import FloatingAction from '../../components/FloatingAction';
import SendButton from '../../components/SendButton';

const FormPage = () => {

  
  
const navigate = useNavigate();
const [user, setUser] = useState();
const [questions, setQuestions] = useState();

  useEffect(() => {
    //get user localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    user?.token ? setUser(user) : navigate("/auth/login")

    const questions = JSON.parse(localStorage.getItem("questions"))
    setQuestions(questions)
  }, []);


  return (
    <div className='app-container'>
      <AppNavbar user={user}/>
    <div className='down' >
      <SideNavbar user={user}/>
      <ManageQuestions role={user?.role}/>
      
      <SendButton typeAction={"sendQuestions"} data={questions?.questions}/>
    </div>
    </div>

    

  )
}

export default FormPage
