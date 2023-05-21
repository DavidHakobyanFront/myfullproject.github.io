import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getComments = createAsyncThunk(
    "comment/get",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const getCommentstodo = createAsyncThunk(
    "comment/gettodo",
    async (_, thunkAPI) => {
        console.log(10)
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            return response.data
        }catch (e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)


export const commentsSlice = createSlice({
    name: "Comments",
    initialState: {
        loading: false,
        error: "",
        comments: [],
        usercomments: [],
        allComments: [],
        oneComment: {}
    },
    extraReducers: {
        [getComments.fulfilled.type]: (state, action) => {
            state.loading = false
            state.comments = action.payload
            state.error = ""
        },
        [getComments.pending.type]: (state) => {
            state.loading = true
        },
        [getComments.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [getCommentstodo.fulfilled.type]: (state, action) => {
            state.allComments = action.payload
            state.error = ""
        }

    }
})
export default commentsSlice.reducer