import type { RootState } from "@/State/Store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// ✅ Define the User type
export interface IUser {
  id: string;
  name: string;
  email: string;
}

// ✅ Define initial state type
interface UserState {
  users: IUser[];
}

// ✅ Initial data (optional)
const initialState: UserState = {
  users: [
    {
    id: "123",
    name:"Miraz",
    email:"ahmedmiraz87@gmail.com"
  }
],
};

// ✅ Create the slice
const userSlice = createSlice({
  name: "user", // 🔹 Must match your store key name (`Users`)
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<IUser, "id">>) => {
      // Create unique ID
      const id = Math.random().toString(36).substring(2, 9);
      const newUser: IUser = { ...action.payload, id };
      state.users.push(newUser);
    },

    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },
});

// ✅ Selectors
export const selectUsers = (state: RootState) => state.Users.users; 
// 🔹 Must match the reducer key from your store (`Users`)

// ✅ Export actions and reducer
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
