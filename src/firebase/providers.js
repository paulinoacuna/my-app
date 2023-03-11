//configuracion para auth con google
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"

import {firebaseAuth} from "./config"

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(firebaseAuth,googleProvider)
        const credentials = googleProvider.credentialFromResult(result)
        console.log(credentials)
    } catch (error) {
        console.log(error)
    }
}