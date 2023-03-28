import { async } from 'q';
import React, { useEffect, useState } from 'react'
import AppTable from './AppTable'
import Searchbar from './Searchbar'
import { getLocalUser } from '../helpers/ManageLocalStorage';
import { getUsers } from '../middleware/api';
import { getQuestions } from "../middleware/apiQuestions"
import { useNavigate } from 'react-router';


//notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppModal from './AppModal';
import CreateModal from './CreateModal';
import QuestionsTable from './QuestionsTable';
import DeleteModal from './DeleteModal';



const ManageQuestions = () => {

  const navigate = useNavigate()
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
   const user = getLocalUser()
   if (user?.token){
    loadQuestions()
  }else{
    navigate("/auth/login")
  }
   
}, []);


const loadQuestions = async ()=>{
  
  try {
    const response = await getQuestions()

    if(response?.state) {
      localStorage.setItem("questions",JSON.stringify(response));
      setQuestions(response?.questions)

      
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

const [modal, setModal] = useState({open: false,type: "editQuestion",  data: null});
const [modalDelete, setModalDelete] = useState({open: false,type: "deleteQuestion",  data: null});

const handleModal = (event) => {
  setModal(event)
}
const handleModalDelete = (event) => {
  setModalDelete(event)
}

const handleRefresh = () => {
  loadQuestions()
}

const handleFindQuestion = async(query)=> {
    console.log(query)
  /*
  
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
 */
}



  return (
    <div style={{width: "80%", marginLeft: "15px"}}>

      <Searchbar type="usuario" loadAll={()=>{handleRefresh()}} findUser={ (query)=>{handleFindQuestion(query)}}/>

      <br />
      
      <QuestionsTable questionsArray={questions} activeModalDelete={(event)=>{handleModalDelete(event)} } activeModal={(event)=>{handleModal(event)} }/>

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

      <DeleteModal opened={modalDelete?.open} activeModal={(event)=>{handleModalDelete(event)}} refresh={()=>{handleRefresh()}} type={modalDelete?.type} data={modalDelete?.data}/>



    </div>
  )
}

export default ManageQuestions
