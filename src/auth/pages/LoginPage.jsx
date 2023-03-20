import React, { useRef,useState,useEffect } from 'react'
import {getAuth} from "../../middleware/api"
import {useNavigate} from "react-router-dom"

//components
import Login from "../../components/Login"

//notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//redux
import {saveUserLogin} from "../../store/auth/thunks"
import { useDispatch, useSelector } from 'react-redux';

import "./styles.css";


const LoginPage = () => {

//REDUX
const dispatch = useDispatch()
const authInfoStore = useSelector(state => state.auth)
const navigate = useNavigate();

//console.log("Store/auth:")
//console.log(authInfoStore)

const [formValues, setformValues] = useState();
const [loading, setLoading] = React.useState(false);


  const submit = async ()=>{
    console.log("Sesión iniciada")

      setLoading(true);
        const response = await getAuth(formValues)
  
        if(response?.state) {
          console.log(response)
          localStorage.setItem(response);
          dispatch(saveUserLogin(response))
          navigate("/app")
        }else{
          //alerta, correo y password invalidos
          toast.warn('Correo y contraseña inválidos. Intenta nuevamente.', {
            position: "bottom-right",
            });
        }
      setLoading(false)
  }

useEffect(() => {
  if (formValues) submit()
}, [formValues]);

  return (
  
    <div className='container'>
      <Login  setformValues={setformValues} loading={loading}/>
      <div>
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
      </div>
    </div>
   
  )
}

export default LoginPage