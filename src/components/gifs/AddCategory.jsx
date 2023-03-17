import {React, useState} from 'react'

const AddCategory = ({addCategory}) => {

    const [inputValue, setInputValue] = useState("");

const onInputChange = (event)=>{
    setInputValue(event.target.value)
}

const onSubmit = (event)=>{
    event.preventDefault()
    if(inputValue.trim() !== ""){
        addCategory(inputValue.trim())
    }
    setInputValue("")
}

    //onClick  | click en el elemento HTML
    //onChange | cambios en elemento HTML | event.target.value       tiene el valor de la funcion OnChange
    //onSubmit | envia todos los valores  | event.preventDefault()   previene envío de formulario y recarga de pagina
    //String.trim | quita espacios al rededor
    
  return (
    <form onSubmit={(event)=>{onSubmit(event)}}>
        <input type="text" value={inputValue} placeholder='Buscar gif' onChange={(event)=>{onInputChange(event)}}/>
    </form>
  )
}

export default AddCategory
