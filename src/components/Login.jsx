import React, { useRef,useState,useEffect } from 'react'

import { Button, Card, Checkbox, Space } from 'antd';
import { Field, Form, Formik, validateYupSchema } from 'formik';
import { object, string, number, date, InferType } from 'yup';

import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';

import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = ({setformValues, loading}) => {

  //useRef() solo rendriza cuando se envia por submit
  //myRef.current.values       | Objeto que guarda todos los valores de los Field
  //myRef.current.submitForm() | retorna promesa

  const myRef = useRef("")
  const [passwordShown, setPasswordShown] = useState(false);
  
  const initialValues = {
    email: "danielc@gmail.com",
    password: "123456"
  }

  const submit = ()=>{
    setformValues(myRef.current.values)
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  //YUP form validation
  let userSchema = object().shape({
    email: string().email("\u26A0 Email inválido").required('\u26A0 Campo requerido'),
    password: string().min(6, 'Mínimo 6 caracteres').max(16, 'Máximo 16 caracteres').required('\u26A0 Campo requerido')
  });
  
  
  return (
    <>
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
              <Field className="field" name="email" type="email" placeholder="ejemplo@email.com"/>
            </div>
            
            {errors.email ? <span className='error'>{errors.email}</span> : <span >No compartiremos tu email con nadie más.</span>}
            <br />
            <br />
            <div>
              <label> Contraseña</label>
              
              <Field className="field" name="password" type={passwordShown ? "text" : "password"} placeholder="contraseña"/>
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
    </>
  )
}

export default Login
