import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getUserComments = createAsyncThunk(
    "user/comments/get",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            return response.data
        }catch (e){
            thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const userCommentsSlice = createSlice({
    name: "UserComment",
    initialState: {
        loading : false,
        error: "",
        usercomments: []
    },
    extraReducers: {
        [getUserComments.fulfilled.type] : (state, action) => {
            state.loading = false
            state.usercomments = action.payload
            state.error = ""
        },
        [getUserComments.rejected.type] : (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [getUserComments.pending.type] : (state, action) => {
            state.loading = true
        }
    }
})
export default userCommentsSlice.reducer