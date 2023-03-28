//import { useDispatch } from "react-redux"
//import { registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers"

import {chechingCredentials,login} from "./authSlice"


export const checkingAuthentication = ()=>{
    return async (dispatch)=>{
        dispatch(chechingCredentials())
    }
}

export const saveUserLogin = (data)=>{
    return async (dispatch)=>{
        const res = await dispatch(login(data))
        console.log(res)

    }
}