
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDKTu51e_OyO-m-xHrOAJVYoJ8pGE-WHoc",
  authDomain: "bootcamp-react-70a08.firebaseapp.com",
  projectId: "bootcamp-react-70a08",
  storageBucket: "bootcamp-react-70a08.appspot.com",
  messagingSenderId: "124597709127",
  appId: "1:124597709127:web:3ea2a7870a094253d70462"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)