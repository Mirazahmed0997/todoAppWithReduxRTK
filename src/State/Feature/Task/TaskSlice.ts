import { createSlice } from "@reduxjs/toolkit"
import { ITask } from './../../Types/Types';

interface InitialState{
    task:ITask[]
}

const initialState : InitialState={
    task:[
        {
        id:"gdfgfjd",
        title:"initialise frontend",
        description:"Create Home page and routing",
        dueDate:"2025-11",
        isCompleted: false,
        priority: "High"
    }
    ]
}

const todoSlice= createSlice({
    name:"task",
    initialState,
    reducers:{}
})


export default todoSlice.reducer