import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Users {
    user_id: String,
    user_name: String,
    password: String,
    email: String,
    error: String,
};

const initialState: Users = {
    user_id: "",
    user_name: "",
    password: "", 
    email: "",
    error: ""
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<Users>) => {
            const {user_id}  = action.payload;

            if(initialState.user_id === user.user_id){
                {}
            }
        }
    }
})