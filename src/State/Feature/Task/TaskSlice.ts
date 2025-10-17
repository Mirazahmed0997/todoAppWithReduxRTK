import type { RootState } from "@/State/Store";
import type { ITask } from "@/State/Types/Types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}

const initialState: InitialState = {
  task: [
    {
      id: "gdfgfjd",
      title: "Initialise Frontend",
      description: "Create Home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
      assignTo:null
    },
    {
      id: "gdfgfjdvbv",
      title: "Implement Backend",
      description: "Backend setup",
      dueDate: "2025-11",
      isCompleted: true,
      priority: "Low",
      assignTo:null
    },
  ],
  filter: "all",
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITask>) => {
      // generate a simple id if not provided
      const id = Math.random().toString(36).substring(2, 9);
      const todoData = { ...action.payload, id, isCompleted: false,assignTo : action.payload.assignTo? action.payload.assignTo:null};
      state.task.push(todoData);
    },

    toggolCompleteState: (state, action: PayloadAction<string>) => {
      const task = state.task.find((t) => t.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.task = state.task.filter((t) => t.id !== action.payload);
    },

    updateFilter: (state, action: PayloadAction<"all" | "Low" | "High" | "Medium">) => {
      state.filter = action.payload;
    },
  },
});

export const selectTask = (state: RootState) => {
  const { filter, task } = state.todos;

  if (filter === "Low") {
    return task.filter((t) => t.priority === "Low");
  } else if (filter === "Medium") {
    return task.filter((t) => t.priority === "Medium");
  } else if (filter === "High") {
    return task.filter((t) => t.priority === "High");
  } else {
    return task;
  }
};

export const selectFilter = (state: RootState) => state.todos.filter;

export const { addTodo, toggolCompleteState, deleteTask, updateFilter } = todoSlice.actions;

export default todoSlice.reducer;
