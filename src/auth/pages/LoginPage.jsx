import React, { useRef } from 'react'
import { Button, Card, Checkbox, Space } from 'antd';
import { Field, Form, Formik, validateYupSchema } from 'formik';
import { object, string, number, date, InferType } from 'yup';

import {checkingAuthentication, startGoogleSignIn} from "../../store/auth/thunks"
import { useDispatch, useSelector } from 'react-redux';
import { registerUserWithEmailAndPassword } from '../../firebase/providers';

const LoginPage = () => {
  const dispatch = useDispatch()
  const authInfoStore = useSelector(state => state.auth)
  console.log(authInfoStore)
  //uso de store de Redux

 const initialValues = {
  email: "example@gmail.com",
  password: "1236456"
}

//useRef() solo rendriza cuando se envia por submit
const myRef = useRef("")

//myRef.current.values       | Objeto que guarda todos los valores de los Field
//myRef.current.submitForm() | retorna promesa

const submit = ()=>{
  console.log("enviado")
  dispatch(registerUserWithEmailAndPassword(myRef?.current?.values))
  console.log(myRef.current.values)
}
const onGoogleSignIn = ()=>{
  dispatch(startGoogleSignIn())
}
//uso de YUP
let userSchema = object({
  email: string().email(),
});

  return (
    <div>
      <Card actions={[
                <div>
                <Button type='submit' onClick={()=>myRef.current.submitForm()}>Crear usuario en Firebase</Button>
                <Button type='submit' onClick={()=>onGoogleSignIn()}>Google</Button>
                </div>
                ]}>
        <Formik innerRef={myRef} onSubmit={submit} initialValues={initialValues} validationSchema={userSchema}>
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
