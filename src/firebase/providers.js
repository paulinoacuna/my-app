//configuracion para auth con google

import {createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
//import { Children } from "react";

import {firebaseAuth} from "./config"

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(firebaseAuth,googleProvider)
        const {displayName,email,photoURL,uid} = result?.user
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
    } catch (error) {
        const errorMessage = error?.menssage
        return {
            ok: false,
            errorMessage,
        }

    }
}

export const registerUserWithEmailAndPassword = async({email,password,displayName})=>{
    try {
        const res = await createUserWithEmailAndPassword(firebaseAuth,email,password)
        console.log(res)


        const {uid,photoURL} = res?.user
        return {
            ok: true,
            uid,
            photoURL,
            email
        }





    } catch (error) {
        //const errorMessage = error?.menssage
        console.log(error)
        return {
            ok: false
        }
    }
}