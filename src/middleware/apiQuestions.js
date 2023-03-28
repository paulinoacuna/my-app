import { getLocalUser } from "../helpers/ManageLocalStorage";

//IMPORTANT controlando llamado backend o fakeDatas
const enableApi = true;


const url = "http://127.0.0.1:4001/api/v1"
let path = ""

// Example POST method implementation:


export const getQuestions = async ()=>{

  let {token} = getLocalUser()
  path = `${url}/form/getquestions`

    
  const response = await fetch(path, {

    method: "GET",
    headers: {
      "Content-Type": "application/json",   
        'Authorization': `Bearer ${token}`
    },
  }
  );
  
  return response.json(); // parses JSON response into native JavaScript objects



  
}


export const deleteQuestion = async (data)=>{
  
  let {token} = getLocalUser()

  path = `${url}/questions/deleteQuestion/${data?.id}`

    
  const response = await fetch(path, {

    method: "DELETE",
    headers: {
      "Content-Type": "application/json",   
        'Authorization': `Bearer ${token}`
    },
  }
  );
  
  return response.json(); // parses JSON response into native JavaScript objects
}

