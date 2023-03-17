import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated",
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        login: (state,{payload})=>{
            state.uid = payload.uid
            state.displayName = payload.displayName
            state.email = payload.email
            state.photoUrl = payload.photoUrl
            state.errorMessage = null
        },
        logout: (state,payload)=>{},
        chechingCredentials: (state)=>{
            state.status="checking"
        }
    }
})

export const {login,logout,chechingCredentials} = authSlice.actions;