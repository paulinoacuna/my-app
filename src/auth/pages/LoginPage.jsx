import React, { useRef } from 'react'
import { Button, Card, Checkbox, Space } from 'antd';
import { Field, Form, Formik, validateYupSchema } from 'formik';

import {checkingAuthentication, startGoogleSignIn} from "../../store/auth/thunks"
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch()

 //uso de formik y ant design
 const initialValues = {
  email: "example@unal.edu.co",
  password: "1236456"
}

//useRef() solo rendriza cuando se envia por submit
const myRef = useRef("")

//myRef.current.values       | Objeto que guarda todos los valores de los Field
//myRef.current.submitForm() | retorna promesa



//const {values} = formikRef.current
//console.log(values)


const submit = ()=>{
  dispatch(checkingAuthentication())
  console.log(myRef.current.values)
}
const onGoogleSignIn = ()=>{
  dispatch(startGoogleSignIn())
}

  return (
    <div>
      <Card actions={[
                <div>
                <Button type='submit' onClick={()=>myRef.current.submitForm()}>Enviar</Button>
                <Button type='submit' onClick={()=>onGoogleSignIn()}>Google</Button>
                </div>
                ]}>
        
        <Formik innerRef={myRef} onSubmit={submit} initialValues={initialValues} validationSchema="">
          <Form >
            <div>
              <label>Correo</label>
              <Field name="email" type="email"/>
            </div>

            <div>
              <label>Contrasena</label>
              <Field name="password" type="password"/>
            </div>

          </Form>
        </Formik>
      </Card>
      Loginpage
    </div>
  )
}

export default LoginPage
