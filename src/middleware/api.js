import {user} from "../fakeData"

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



  

