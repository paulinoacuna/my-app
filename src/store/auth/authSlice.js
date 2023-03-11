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
        login: (state,action)=>{},
        logout: (state,payload)=>{},
        chechingCredentials: (state)=>{
            state.status="checking"
        }
    }
})

export const {login,logout,chechingCredentials} = authSlice.actions;