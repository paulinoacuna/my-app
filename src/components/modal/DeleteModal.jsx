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
import { createUser, deleteUser, updateUser } from '../../middleware/apiUsers';
import SelectButton from '../SelectButton';
import { deleteQuestion } from '../../middleware/apiQuestions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 410,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({opened, data, type, activeModal, refresh}) {


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
      case "deleteUser":
          //ok
          try {
          
            const response = await deleteUser(data)
        
            if(response?.state) {
                toast.success('Eliminado con éxito', {
                    position: "top-center",
                    });
  
                handleClose()
  
                //refresh
                refresh()
    
            }else{
              //alerta, correo y password invalidos
              toast.warn('Error al eliminar. Intente nuevamente.', {
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

      case "deleteQuestion":

            //ok
            try {
          
              const response = await deleteQuestion(data)
          
              if(response?.state) {
                  toast.success('Eliminada con éxito', {
                      position: "top-center",
                      });
    
                  handleClose()
    
                  //refresh
                  refresh()
      
              }else{
                //alerta, correo y password invalidos
                toast.warn('Error al eliminar. Intente nuevamente.', {
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
            {type == "deleteUser" ? <>Eliminar Usuario </>: <>Eliminar Pregunta </>}
          </Typography>
          <Typography id="modal-modal-description" variant="span" component="span">
            {type == "deleteUser" ? <>¿Estás seguro que deseas eliminar el usuario {data?.firstName} ? </>: <>¿Estás seguro que deseas eliminar esta pregunta?</>}
          </Typography>

        <br />
        <br />
            <div style={{display: "flex", justifyContent: "flex-end"}}>
          <Button sx={{marginRight:"20px"}} onClick={() => handleClose()} variant="contained" color="info" >Cancelar</Button>
          <Button  variant="contained" color="error" onClick={() => {handleAction(type)}}>Eliminar</Button>
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
