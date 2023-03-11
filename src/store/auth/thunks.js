import { useDispatch } from "react-redux"
import { signInWithGoogle } from "../../firebase/providers"
import {chechingCredentials} from "./authSlice"


export const checkingAuthentication = ()=>{
    return async (dispatch)=>{
        dispatch(chechingCredentials())
    }
}

export const startGoogleSignIn=()=>{
    return async (dispatch)=>{
        dispatch(chechingCredentials())
        signInWithGoogle()
    }
}