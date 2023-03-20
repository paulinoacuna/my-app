import React, { useRef,useState,useEffect } from 'react'
import {getAuth} from "../../middleware/api"
import {useNavigate} from "react-router-dom"

import { Button, Card, Checkbox, Space } from 'antd';
import { Field, Form, Formik, validateYupSchema } from 'formik';
import { object, string, number, date, InferType } from 'yup';



import {checkingAuthentication, startGoogleSignIn} from "../../store/auth/thunks"
import { useDispatch, useSelector } from 'react-redux';
import { registerUserWithEmailAndPassword } from '../../firebase/providers';

//Styles
import "./styles.css";

import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';

import BootForm from 'react-bootstrap/Form';
//la direccion está incompleta introduce un @

import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {



  const dispatch = useDispatch()
  const authInfoStore = useSelector(state => state.auth)

  const navigate = useNavigate();

  console.log(authInfoStore)
  //uso de store de Redux

 const initialValues = {
  email: "danielc@gmail.com",
  password: "123456"
}

//useRef() solo rendriza cuando se envia por submit
const myRef = useRef("")

//myRef.current.values       | Objeto que guarda todos los valores de los Field
//myRef.current.submitForm() | retorna promesa

const [loading, setLoading] = React.useState(false);

const submit = async ()=>{

  console.log("enviado")
    //fetch al api login
    console.log(myRef.current.values)
    //firebase
    //dispatch(registerUserWithEmailAndPassword(myRef?.current?.values))
    setLoading(true);
      const response = await getAuth(myRef?.current?.values)

      if(response?.state) {
        console.log(response)
        //dispatch(response)
        //cambiar de pagina
           navigate("/app")
      }else{
        //alerta, correo y password invalidos
        toast.warn('No se ha podido encontrar tu cuenta. Revisa que tu correo y contraseña sean válidos e intenta nuevamente', {
          position: "bottom-right",
          });
      }
    setLoading(false)
}

const onGoogleSignIn = ()=>{
  dispatch(startGoogleSignIn())
}
//uso de YUP
let userSchema = object().shape({
  email: string().email("\u26A0 Email inválido").required('\u26A0 Campo requerido'),
  password: string().min(6, 'Mínimo 6 caracteres').max(16, 'Máximo 16 caracteres').required('\u26A0 Campo requerido')
});


//PASSWORD
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  //NOTIFICACTION
  
  /*
    <Button type='submit' onClick={()=>myRef.current.submitForm()}>Crear usuario en Firebase</Button>
    <Button type='submit' onClick={()=>onGoogleSignIn()}>Google</Button>
   */
  return (
  
    <div className='container'>
      <div className='img'>
        <img src="https://placekitten.com/468/400" alt='login picture'/>
      </div>
      <div className='login'>
      <Card className='card'
            actions={[ 
                  <LoadingButton type='submit' onClick={() => myRef.current.submitForm()} endIcon={<LoginIcon />}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                                >
                                <span className='btn-submit'>Iniciar Sesión</span>
                  </LoadingButton>
                ]}>


                  


            <Typography><b>¡Bienvenido!</b></Typography>
            <Typography>Iniciar sesión para continuar.</Typography>
            <br />
        <Formik innerRef={myRef} onSubmit={submit} initialValues={initialValues} validationSchema={userSchema}>
        {({ errors, touched }) => (
          <Form >
            <div>
              <label> Correo</label>
              <Field className="field" name="email" type="email" placeholder="example@email.com"/>
            </div>
            
            {errors.email ? <span className='error'>{errors.email}</span> : <span >No compartiremos tu email con nadie más.</span>}
            <br />
            <br />
            <div>
              <label> Contraseña</label>
              
              <Field className="field" name="password" type={passwordShown ? "text" : "password"} placeholder="password"/>
              <div style={{display:'flex'}}>
              {errors.password ? <span className='error'> {errors.password} </span> : passwordShown ? <span>Ocultar contraseña</span> : <span>Mostrar contraseña</span>}
              <div className='showpass' onClick={togglePassword}>&nbsp; {!passwordShown ? <VisibilityIcon fontSize='small'/> : <VisibilityOffIcon fontSize='small'/> }</div>      
              </div>
            </div>
            

          </Form>
          )}
        </Formik>

      </Card>
      </div>



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