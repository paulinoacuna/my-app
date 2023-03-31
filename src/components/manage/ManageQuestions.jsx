import { async } from 'q';
import React, { useEffect, useState } from 'react'
import AppTable from '../table/AppTable'
import Searchbar from '../navigation/Searchbar'
import { getLocalUser } from '../../helpers/ManageLocalStorage';
import { getUsers } from '../../middleware/apiUsers';
import { getQuestions } from "../../middleware/apiQuestions"
import { useNavigate } from 'react-router';


//notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import QuestionModal from '../modal/QuestionModal';


import QuestionsTable from '../table/QuestionsTable';
import DeleteModal from '../modal/DeleteModal';



const ManageQuestions = ({role}) => {

  const navigate = useNavigate()
  const [questions, setQuestions] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
   const user = getLocalUser()
   if (user?.token){
    loadQuestions()
    if (user?.role == "admin"){
      setShow(true)
    }else if (user?.role == "student"){
      setShow(false)
    }
  }else{
    navigate("/auth/login")
  }
   
}, []);


const loadQuestions = async ()=>{
  
  try {
    const response = await getQuestions()

    if(response?.state) {
      localStorage.setItem("questions",JSON.stringify(response));
     
      response?.questions.sort((a,b)=>{return a.question.localeCompare(b.question);})
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

const handleFind = async(query)=> {

  //event == user to find
  //en users buscar juan
  await loadQuestions()
 
  const questionsFinded = questions.filter((question)=>{return(question.question.includes(query))
  
  })

  //console.log(usersFinded)
  if(questionsFinded != undefined && questionsFinded.length >= 1){
    setQuestions(questionsFinded)

    //console.log(users)
 
}
}



  return (
    <div style={{width: "80%", marginLeft: "15px"}}>
      <div style={{display: show ? 'block' : 'none' }}  >
      <Searchbar type="pregunta" loadAll={()=>{handleRefresh()}} find={ (query)=>{handleFind(query)}}/>
      </div>

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

    

      <QuestionModal opened={modal?.open} activeModal={(event)=>{handleModal(event)}} refresh={()=>{handleRefresh()}} type={modal?.type} data={modal?.data}/>

      <DeleteModal opened={modalDelete?.open} activeModal={(event)=>{handleModalDelete(event)}} refresh={()=>{handleRefresh()}} type={modalDelete?.type} data={modalDelete?.data}/>



    </div>
  )
}

export default ManageQuestions
