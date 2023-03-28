import {user} from "../fakeData"
import { getLocalUser } from "../helpers/ManageLocalStorage";

//IMPORTANT controlando llamado backend o fakeDatas
const enableApi = true;



const url = "http://127.0.0.1:4001/api/v1"
let path = ""

// Example POST method implementation:
export const getAuth = async ({email,password}) => {
    // Default options are marked with *

    if (!enableApi) {
      if(email === "danielc@gmail.com" && password === "123456"){
        return user[0]
      }else{
        return user[1]
      }

    }else{
      
    const data = {
        email: email,
        password: password
        }
    path = `${url}/login`
    
       
      const response = await fetch(path, {

        method: "POST", // *GET, POST, PUT, DELETE, etc.
        //mode: "no-cors", // no-cors, *cors, same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //redirect: "follow", // manual, *follow, error
       // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
      );
      
      return response.json(); // parses JSON response into native JavaScript objects


  }
}

export const getUsers = async ()=>{

  let {token} = getLocalUser()
  path = `${url}/user/getUsers`

    
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

export const updateUser = async (data)=> {
  let {token} = getLocalUser()

  Reflect.deleteProperty(data, 'password');
  data.state = true

  switch (data.typeDocument) {
    case "CC":
      data.typeDocument = 1
      break;
      case "CE":
      data.typeDocument = 2
      break;
      case "TI":
      data.typeDocument = 3
      break;

    default:
      data.typeDocument = 1
      break;
  }

  switch (data.role) {
    case "Administrador":
      data.role = 1
    break;
    case "Estudiante":
      data.role = 2
      break;
    
    default:
      data.role = 1
      break;
  }

console.log(data)
  path = `${url}/user/update/${data.documentNumber}`


    
  const response = await fetch(path, {

    method: "PUT",
    headers: {
      "Content-Type": "application/json",   
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data),
  }
  );
  
  return response.json(); // parses JSON response into native JavaScript objects


}


export const createUser = async (data)=>{
  let {token} = getLocalUser()

  data.state = true
  data.password = data.documentNumber.toString()
  

  switch (data.typeDocument) {
    case "CC":
      data.typeDocument = 1
      break;
      case "CE":
      data.typeDocument = 2
      break;
      case "TI":
      data.typeDocument = 3
      break;

    default:
      data.typeDocument = 1
      break;
  }

  switch (data.role) {
    case "Administrador":
      data.role = 1
    break;
    case "Estudiante":
      data.role = 2
      break;
    
    default:
      data.role = 1
      break;
  }

console.log(data)

  path = `${url}/user/create`


  const response = await fetch(path, {

    method: "POST",
    headers: {
      "Content-Type": "application/json",   
       // 'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data),
  }
  );
  
  return response.json(); // parses JSON response into native JavaScript objects

}


export const deleteUser = async (data)=>{
  let {token} = getLocalUser()

console.log(data)
  path = `${url}/user/update/${data.documentNumber}`

  const response = await fetch(path, {

    method: "PUT",
    headers: {
      "Content-Type": "application/json",   
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({state: false}),
  }
  );
  
  return response.json(); // parses JSON response into native JavaScript objects


}
