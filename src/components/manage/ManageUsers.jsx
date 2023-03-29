import { async } from 'q';
import React, { useEffect, useState } from 'react'
import AppTable from '../table/AppTable'
import Searchbar from '../navigation/Searchbar'
import { getLocalUser } from '../../helpers/ManageLocalStorage';
import { getUsers } from '../../middleware/api';
import { useNavigate } from 'react-router';


//notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserModal from '../modal/UserModal';
import DeleteModal from '../modal/DeleteModal';



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
const [modalDelete, setModalDelete] = useState({open: false,type: "deleteUser",  data: null});

const handleModal = (event) => {
  setModal(event)
}
const handleModalDelete = (event) => {
  setModalDelete(event)
}

const handleRefresh = () => {
  loadUsers()
}

const handleFindUser = async(query)=> {
  //event == user to find
  //en users buscar juan
  await loadUsers()
 
  const usersFinded = users.filter((user)=>{return (user.firstName.includes(query)) ||
                                    user.secondName.includes(query) || user.surname.includes(query)
                                    || user.secondSurName.includes(query) || 
                                    user.email.includes(query) ||
                                    user.documentNumber.includes(query) ||
                                    user.phone.includes(query)
                                  
                                  })

  //console.log(usersFinded)
  if(usersFinded != undefined && usersFinded.length >= 1){
    setUsers(usersFinded)

    //console.log(users)

  }

}

  return (
    <div style={{width: "80%", marginLeft: "15px"}}>
      <Searchbar type="usuario" loadAll={()=>{handleRefresh()}} find={ (query)=>{handleFindUser(query)}}/>
      <br />
      <AppTable usersArray={users} activeModalDelete={(event)=>{handleModalDelete(event)}} activeModal={(event)=>{handleModal(event)}}/>
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

      
      <UserModal opened={modal?.open} activeModal={(event)=>{handleModal(event)}} refresh={()=>{handleRefresh()}} type={modal?.type} data={modal?.data}/>

      <DeleteModal opened={modalDelete?.open} activeModal={(event)=>{handleModalDelete(event)}} refresh={()=>{handleRefresh()}} type={modalDelete?.type} data={modalDelete?.data}/>


    </div>
  )
}

export default ManageUsers
