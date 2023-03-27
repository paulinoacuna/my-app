import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import { deleteUser, updateUser } from '../middleware/api';
import Input from '@mui/material/Input';
import { Field, Form, Formik, validateYupSchema } from 'formik';
import { object, string, number, date, InferType } from 'yup';


//notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AppModal({opened, data, type, activeModal, refresh}) {
  const [open, setOpen] = React.useState(false);


    useEffect(() => {
        opened ? setOpen(true) : setOpen(false);
        
    }, [opened]);


  const handleClose = () => {
    setOpen(false)
    activeModal({open: false, data: null})
}

const handleAction = async (type)=>{
    switch (type) {
        case "delete":
            //fetch delete
            try {
                //const response = await deleteUser(data.documentNumber)
            
                if(true) {
                    toast.success('Registro eliminado con éxito', {
                        position: "top-center",
                        });
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


//edit case
const myRef = React.useRef("")

const [initialValues, setInitialValues] = useState({});

useEffect(() => {
  if(data){
    setInitialValues({
      firstName: data.firstName,
      document:data.documentNumber,
      typeDocument: data.typeDocument,
      email: data.email,
      phone: data.phone
    })
  }
  console.log(initialValues)
}, [data]);


const submit = ()=>{
  //setformValues(myRef.current.values)
  //fetch api pasando  values
  console.log(myRef.current.values)
}

//YUP form validation
let userSchema = object().shape({
  name: string().required(),
  document: string().required(),
  typeDocument: number().required(),
  email: string().email("\u26A0 Email inválido").required('\u26A0 Campo requerido'),
  phone: string().required()
});



/* ther descript
     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          </Typography>
           */

  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Editar Usuario
          </Typography>

          <div>

          <Formik innerRef={myRef} onSubmit={submit} initialValues={initialValues} validationSchema={userSchema}>
        {({ errors, touched }) => (
          <Form >
            <div style={{display:"flex"}}>
            <div style={{marginRight: "30px"}}>
              <label> Documento</label>
              <Field className="field" name="document" type="text" />
            </div>
              <br />
            <div>
              <label> Nombre</label>
              <Field className="field" name="firstName" type="text" />
            </div>
            </div>
            <br /> 
            <div style={{display:"flex"}}>
            <div style={{marginRight: "30px"}}>
              <label> Correo</label>
              <Field className="field"  name="email" type="email" placeholder="ejemplo@email.com"/>
              
            </div>
            
            <br />

            <div>
              <label> Teléfono</label>
              <Field className="field" name="phone" type="text" />
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
    </div>
  );
}