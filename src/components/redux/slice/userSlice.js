import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const  addUsers= createAsyncThunk("add"  ,
    async ({username,email,password})=>{

        try {
            const response=await axios.post(`  http://localhost:5002/users`,{username,email,password})
            return response.data
        }
        catch (e){
            console.log(e)
        }

    })
export const getUsers= createAsyncThunk("get"  ,
    async ()=>{
        try {
            const response=await axios.get(`  http://localhost:5002/users`)
            return response.data
        }
        catch (e){
            console.log(e)
        }

    })
const userSlice=createSlice({
    name:  "users",
    initialState:{
        loading:false,
        users:[]
    },extraReducers:{
        [getUsers.pending.type]:(state)=>{
            state.loading=true

        }, [getUsers.fulfilled.type]:(state,action)=>{
            state.loading=false
            state.users=action.payload
        }}
})

export default userSlice.reducer

