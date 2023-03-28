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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 840,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateModal({opened, data, type, activeModal, refresh}) {


  
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
      case "createUser":
         //ok
         try {
          
          const response = await createUser(myRef.current.values)
      
          if(response?.state) {
              toast.success('Usuario creado con éxito', {
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
      
      case "editUser":
        //ok
        try {
          const response = await updateUser(myRef.current.values)
          
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
  //setformValues(myRef.current.values)
  //fetch api pasando  values
  console.log(myRef.current.values)
}

//YUP form validation
let userSchema = object().shape({
  firstName: string().required(),
  secondName: string().required(),
  surname: string().required(),
  secondSurName: string().required(),
  typeDocument: number().required(),
  documentNumber: number().required(),
  email: string().email("\u26A0 Email inválido").required('\u26A0 Campo requerido'),
  phone: number().required(),
  role: number().required(),
  password: string().required(),

});

const initialValues = ({


 
  firstName: data?.firstName.split(" ")[0],
  secondName: data?.firstName.split(" ")[1],
  surname: data?.firstName.split(" ")[2],
  secondSurName: data?.firstName.split(" ")[3],

  documentNumber: Number(data?.documentNumber),
  typeDocument: "CC",
  phone: Number(data?.phone),
  role: "Estudiante",
  
  email: data?.email,
  password: "",
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
            {type == "editUser" ? <>Editar Usuario </>: <>Crear Usuario</>}
          </Typography>
          <Typography id="modal-modal-description" variant="span" component="span">
            {type == "editUser" ? <>Completa los campos requeridos para editar el registro </>: <>Ingresa los datos requeridos para registrar un nuevo usuario</>}
          </Typography>
          <br />
          <br />
          
          <div>
          <Formik innerRef={myRef} onSubmit={submit} initialValues={initialValues} validationSchema={userSchema}>
        {({ errors, touched }) => (
          <Form >
            <div style={{display:"flex"}}>

            <div style={{marginRight: "30px"}}>
              <label> Primer Nombre</label>
              <Field className="field" name="firstName" type="text" />
            </div>

            <div style={{marginRight: "30px"}}>
              <label> Segundo Nombre</label>
              <Field className="field" name="secondName" type="text" />
            </div>

            <div style={{marginRight: "30px"}}>
              <label> Primer Apellido</label>
              <Field className="field" name="surname" type="text" />
            </div>

            <div>
              <label> Segundo Apellido</label>
              <Field className="field" name="secondSurName" type="text" />
            </div>
            </div>

            <br /> 


          <div style={{display:"flex" }}>

            <div style={{marginRight: "30px"}}>
              <label>Documento</label>
              <Field className="field"  name="documentNumber" type="number"/>
            </div>

            <div style={{marginRight: "30px"}}>
              <label> Tipo Doc. ▼</label>
              <Field style={{display: "none"}}  name="typeDocument" type="text" value={selectValueDoc}/>
              <SelectButton type={"document"} handleValue={(value)=>{setSelectValueDoc(value)}}/>
            </div>

            <div style={{marginRight: "30px"}}>
              <label>Teléfono</label>
              <Field className="field"  name="phone" type="number"/>
            </div>

            <div style={{marginRight: "30px"}}>
              <label>Rol ▼</label>
              <Field style={{display: "none"}} name="role" type="text" value={selectValueRole}/>
              <SelectButton type={"role"} handleValue={(value)=>{setSelectValueRole(value)}}/>
            </div>
          </div>


          <br />


          <div style={{display:"flex"}}>

            <div style={{marginRight: "30px"}}>
              <label> Correo</label>
              <Field className="field"  name="email" type="email" placeholder="ejemplo@email.com"/>
            </div>

            <div style={{display: "none" }}>
              <label> Contraseña</label>  
              <Field className="field" name="password" type="password" placeholder="contraseña"/>
            </div>

            </div>

          </Form>
          )}
        </Formik>
        </div>

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
