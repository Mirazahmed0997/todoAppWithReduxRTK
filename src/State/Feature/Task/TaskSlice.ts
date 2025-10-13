import type { RootState } from "@/State/Store"
import type { ITask } from "@/State/Types/Types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

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
        id:"gdfgfjdvbv",
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
    reducers:{
        addTodo :(state,action : PayloadAction<ITask>)=>
        {
            const id= "123456"
            const todoData= {
                ...action.payload,id,isCompleted:false
            }
            state.task.push(todoData)
        },


        toggolCompleteState: (state, action: PayloadAction<string>)=>
        {
            state.task.forEach((singletask)=>singletask.id===action.payload ? (singletask.isCompleted= !singletask.isCompleted )
            : singletask
        )
        },

        deleteTask: (state, action: PayloadAction<string>)=>
        {
            state.task= state.task.filter((singleTask)=> singleTask.id !== action.payload)
        }
    }
})

export const selectTask = (state: RootState)=>
{
    return state.todos.task
}
export const selectFilter = (state: RootState)=>
{
    return state.todos.filter
}

export const { addTodo ,toggolCompleteState,deleteTask} = todoSlice.actions



export default todoSlice.reducer