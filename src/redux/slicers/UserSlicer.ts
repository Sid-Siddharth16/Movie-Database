import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  username: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}
const savedUser = localStorage.getItem('user');
const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: !!savedUser,
  error: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Users>) => {
      const { user_id } = action.payload;

      if (initialState.user_id === user.user_id) {
        {
        }
      }
    },
  },
});
