import {configureStore} from "@reduxjs/toolkit";
import postReducer from'./slice/postSlice'
import userReducer from './slice/userSlice'
import commentsReducer from './slice/commentSlice'
import posterReducer from './slice/posterSlice'
import usercommentsReducer from './slice/usercommentsReducer'
const store = configureStore({
    reducer: {
        postReducer,
        userReducer,
        commentsReducer,
        posterReducer,
        usercommentsReducer
    }
})
export default store;