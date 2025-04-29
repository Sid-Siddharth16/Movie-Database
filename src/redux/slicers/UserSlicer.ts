import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Users {
    users: [] || undefined,
    
};

const initialState: Users = {
    users: []
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