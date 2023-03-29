import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useEffect } from 'react';

import { Field, Form, Formik, validateYupSchema } from 'formik';
import { object, string, number, date, InferType } from 'yup';


//notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { createUser, updateUser } from '../../middleware/api';
import SelectButton from '../SelectButton';
import { createQuestion, editQuestion } from '../../middleware/apiQuestions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 640,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserModal({opened, data, type, activeModal, refresh}) {

  const myRef = React.useRef("")
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
      opened ? setOpen(true) : setOpen(false);
  }, [opened,type]);

  
  const handleClose = () => {
    setOpen(false)
    activeModal({open: false, data: null})
}

const handleAction = async (type)=>{
  switch (type) {
      case "createQuestion":
         //ok
         try {
          
          const response = await createQuestion(myRef.current.values)
      
          if(response?.state) {
              toast.success('Pregunta creada con éxito', {
                  position: "top-center",
                  });

              handleClose()

              //refresh
              refresh()
  
          }else{
            //alerta, correo y password invalidos
            toast.warn('Error al crear. Intente nuevamente.', {
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

          break;
      
      case "editQuestion":
        //ok
        try {
          const response = await editQuestion(myRef.current.values)
          
          if(response?.state) {
            toast.success('Registro actualizado con éxito', {
            position: "top-center",
             });

            handleClose()
            //refresh
            refresh()

          }else{
            //alerta, correo y password invalidos
          toast.warn('Error al actualizar. Intente nuevamente.', {
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

            break;
      default:
  
          break;
  }
}



const submit = ()=>{
  console.log(myRef.current.values)
}

//YUP form validation
let userSchema = object().shape({
    question:string().required(),
    option_A:string().required(),
    option_B:string().required(),
    option_C:string().required(),
    option_D:string().required(),

});

const initialValues = ({

  id: data?.id,
  question: data?.question,
  options_1: data?.options_1,
  options_2: data?.options_2,
  options_3: data?.options_3,
  options_4: data?.options_4

})

const [selectValueRole, setSelectValueRole] = useState("Estudiante");
const [selectValueDoc, setSelectValueDoc] = useState("C.C.");

  return (
    <>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {type == "editQuestion" ? <>Editar Pregunta </>: <>Crear Pregunta</>}
          </Typography>
          <Typography id="modal-modal-description" variant="span" component="span">
            {type == "editQuestion" ? <>Completa los campos requeridos para editar el registro </>: <>Ingresa los datos requeridos para registrar una nueva pregunta</>}
          </Typography>
          <br />
          <br />
          
          
          <Formik innerRef={myRef} onSubmit={submit} initialValues={initialValues} validationSchema={userSchema}>
        {({ errors, touched }) => (
          <Form >

            <div>
              <label> Nombre de la pregunta</label>
              <Field className="field" name="question" type="text" />
            </div>
            <br />

            <div style={{display:"flex", justifyContent: "space-around"}}>
            <div>
              <label> Opción A</label>
              <Field disabled={type == "editQuestion" ? true : false} className="field" name="options_1" type="text" />
            </div>

            <div >
              <label> Opción B</label>
              <Field disabled={type == "editQuestion" ? true : false} className="field" name="options_2" type="text" />
            </div>
            </div>
            <br />

            <div style={{display:"flex", justifyContent: "space-around"}}>
            <div>
              <label> Opción C</label>
              <Field disabled={type == "editQuestion" ? true : false} className="field" name="options_3" type="text" />
            </div>

            <div>
              <label> Opción C</label>
              <Field disabled={type == "editQuestion" ? true : false} className="field" name="options_4" type="text" />
            </div>
            </div>

            <div style={{display: "none"}}>
            <Field sx={{display: "none"}} name="id" type="text" />
            </div>

            <br /> 
          </Form>
          )}
        </Formik>
        

        <br />
        <br />
            <div style={{display: "flex", justifyContent: "flex-end"}}>
          <Button sx={{marginRight:"20px"}} onClick={() => handleClose()} variant="contained" color="info" >Cancelar</Button>
          <Button  variant="contained" color="success" onClick={() => {handleAction(type);myRef.current.submitForm()}} type='submit' >Guardar</Button>
            </div>
        </Box>

      </Modal>
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
  </>
  );
}
