import { async } from 'q';
import React, { useEffect, useState } from 'react'
import AppTable from './AppTable'
import Searchbar from './Searchbar'
import { getLocalUser } from '../helpers/ManageLocalStorage';
import { getUsers } from '../middleware/api';
import { useNavigate } from 'react-router';


//notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppModal from './AppModal';
import CreateModal from './CreateModal';



const ManageUsers = () => {

  const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  useEffect(() => {
   const user = getLocalUser()
   if (user?.token){
    loadUsers()
  }else{
    navigate("/auth/login")
  }
   
}, []);


const loadUsers = async ()=>{
  
  try {
    const response = await getUsers()

    if(response?.state) {
      localStorage.setItem("users",JSON.stringify(response));
      setUsers(response?.users)

      
    }else{
      //alerta, correo y password invalidos
      toast.warn('Error al solicitar usuarios. Intente nuevamente.', {
        position: "bottom-right",
        });
    }

  } catch (error) {
    console.error(error);
    //alerta, correo y password invalidos
    toast.warn('Error en la solicitud. Intenta mas tarde.', {
      position: "bottom-right",
      });
  }
}

const [modal, setModal] = useState({open: false,type: "editUser",  data: null});

const handleModal = (event) => {
  setModal(event)
}

const handleRefresh = () => {
  loadUsers()
}

  return (
    <div style={{width: "80%", marginLeft: "15px"}}>
      <Searchbar type="usuario"/>
      <br />
      <AppTable usersArray={users} activeModal={(event)=>{handleModal(event)}}/>
      <ToastContainer 
            position="top-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />

      
      <CreateModal opened={modal?.open} activeModal={(event)=>{handleModal(event)}} refresh={()=>{handleRefresh()}} type={modal?.type} data={modal?.data}/>



    </div>
  )
}

export default ManageUsers
