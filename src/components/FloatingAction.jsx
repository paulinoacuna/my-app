import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import CreateModal from './modal/CreateModal';
import { useState } from 'react';

export default function FloatingAction({typeAction}) {


const [modal, setModal] = useState({open: false,type: "createUser",  data: null});


//createUser



const handleAction = (typeAction)=>{
  switch (typeAction) {
    case "createUser":
      //active Modal
      setModal({open: true,type: "createUser",  data: null})
    break;

    case "createQuestion":
      //active Modal
      setModal({open: true,type: "createQuestion",  data: null})
      
    break;
  
    default:
      setModal({open: true,type: "createUser",  data: null})
      break;
  }
}

const handleModal = (event) => {
  setModal(event)
}




  return (
    <Box sx={{ m: 1 , position: "fixed", right: 20, bottom: 20} }>
      <Fab onClick={()=>{handleAction(typeAction)}} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
       <CreateModal opened={modal?.open} activeModal={(event)=>{handleModal(event)}} refresh={()=>{}} type={modal?.type} data={modal?.data}/>
    </Box>

  );
}