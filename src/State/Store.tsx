
import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './Feature/Task/TaskSlice'
import userReducer from "./Feature/User/UserSlice";
const store = configureStore({
    reducer:{
        todos: taskReducer,
        Users: userReducer,
    },
})

export default store;
export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch