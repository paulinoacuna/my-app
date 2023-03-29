
import React, { useState,useEffect } from 'react'
import { useNavigate} from "react-router-dom"
//import AppCard from '../../components/AppCard';
import AppNavbar from '../../components/navigation/AppNavbar';
import DashBoard from '../../components/DashBoard';
import FloatingAction from '../../components/FloatingAction';
import SideNavbar from '../../components/navigation/SideNavbar';

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
        <AppNavbar user={user}/>
        <div className='down' >
            <SideNavbar user={user}/>
            <DashBoard  user={user}/>
        </div>
        
    </div>
  )
}

export default JournalPage
