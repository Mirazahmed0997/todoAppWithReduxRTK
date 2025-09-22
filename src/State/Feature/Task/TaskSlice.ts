import type { RootState } from "@/State/Store"
import type { ITask } from "@/State/Types/Types"
import { createSlice } from "@reduxjs/toolkit"

interface InitialState{
    task:ITask[],
    filter: "all"  |"High" |"Medium"| "Low"
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
    },
        {
        id:"gdfgfjd",
        title:"Implement Backend",
        description:"Backend",
        dueDate:"2025-11",
        isCompleted:  true,
        priority: "Low"
    },
    ],
    filter : "all"
}

const todoSlice= createSlice({
    name:"task",
    initialState,
    reducers:{}
})

export const selectTask = (state: RootState)=>
{
    return state.todos.task
}
export const selectFilter = (state: RootState)=>
{
    return state.todos.filter
}


export default todoSlice.reducer