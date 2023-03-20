//import { useDispatch } from "react-redux"
import { registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers"

import {chechingCredentials,login} from "./authSlice"


export const checkingAuthentication = ()=>{
    return async (dispatch)=>{
        dispatch(chechingCredentials())
    }
}

export const startGoogleSignIn=()=>{
    return async (dispatch)=>{
        dispatch(chechingCredentials())
        const result = await signInWithGoogle()
        dispatch(login(result))
    }
}

export const startCreatingWithEmailAndPassword=(email,password,displayName)=>{

    return async (dispatch)=>{
        const res = await registerUserWithEmailAndPassword(email,password,displayName)
        console.log(res)
    }
}


export const saveUserLogin = (data)=>{
    return async (dispatch)=>{
        const res = await dispatch(login(data))
        console.log(res)

    }
}