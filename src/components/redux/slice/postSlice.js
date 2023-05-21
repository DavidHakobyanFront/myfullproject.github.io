import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    posts: [],
    loading: false,
    error: ''
}

export const getPosts = createAsyncThunk(
    "get",
    async (_,thunkAPI)=> {
        try {
            const getpost =await axios.get("http://localhost:5002/posts")
            return getpost.data
        }catch (e){
            return thunkAPI.rejectWithValue(e.message)
        }
    })
export const savePost = createAsyncThunk(
    "save",
    async ({id,title}, thunkAPI) => {
        try {
            const savepost =await axios.put(`http://localhost:5002/posts/${id}`,{title})
            return savepost.data
        }catch (e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)



export const addPost = createAsyncThunk(
    'posts/add',
    async (post, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5002/posts", post)
            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const deletePost = createAsyncThunk(
    'posts/add',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:5002/posts/${id}`)
            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)


const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getPosts.pending.type]: (state) => {
            state.loading = true
        },
        [getPosts.fulfilled.type]: (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        },
        [getPosts.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        [addPost.fulfilled.type]: (state, action) => {

        },
        [getPosts.rejected.type]: (state, action) => {

        },

    }
})

export default postSlice.reducer