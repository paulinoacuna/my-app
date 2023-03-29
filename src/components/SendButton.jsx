
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import UserModal from './modal/UserModal';
import QuestionModal from "./modal/QuestionModal"
import { useState } from 'react';
import { Button } from '@mui/material';

export default function FloatingAction({typeAction, data}) {



//createUser



const handleAction = (typeAction)=>{
  switch (typeAction) {
    case "sendQuestions":
        console.log("No existe Endpoint, enviar las preguntas por metodo POST: ")
        console.log(data)
    break;

    default:
      
      break;
  }
}



  return (
    <Box sx={{ m: 1 , position: "fixed", right: 20, bottom: 20} }>
      <Button onClick={()=>{handleAction(typeAction)}}  variant="contained" color='success' endIcon={<SendIcon />}>
        Enviar Respuestas
      </Button>
     
    </Box>

  );
}