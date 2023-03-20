import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated",
        id: null,
        email: null,
        name: null,
        photoUrl: null,
        message: null,
        role: null
    },
    reducers: {
        login: (state,{payload})=>{
            state.status = payload.state
            state.id = payload.id
            state.message = payload.message
            state.name = payload.name
            state.role = payload.role
            //state.email = payload.email
            //state.photoUrl = payload.photoUrl
       
        },
        logout: (state,payload)=>{},
        chechingCredentials: (state)=>{
            state.status="checking"
        }
    }
})

export const {login,logout,chechingCredentials} = authSlice.actions;