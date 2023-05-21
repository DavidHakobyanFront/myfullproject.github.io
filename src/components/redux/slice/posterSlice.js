import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getPost = createAsyncThunk(
    "post/get",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            return response.data
        } catch (e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const posterSlice = createSlice({
    name: "Post",
    initialState:{
        loading : false,
        error : "",
        post : []
    },
    extraReducers : {
        [getPost.fulfilled.type]: (state, action) => {
            state.loading = false
            state.post = action.payload
            state.error = ""
        },
        [getPost.pending.type]: (state) => {
            state.loading = true
        },
        [getPost.rejected.type]: (state, action) => {
            state.error = action.payload
        }
    }
})
export default posterSlice.reducer