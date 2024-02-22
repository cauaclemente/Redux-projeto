import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        createUser: (state, actions) => {
            return{
                ...state,
                user:{
                    name: actions.payload.name,
                    email: actions.payload.email,
                    address: null,
                }
            }
        },
        logoutUser : (state) => {
            return {
                ...state,
                user: null,
            }
        }


    }
})

export const {createUser, logoutUser} = userSlice.actions
export default userSlice.reducer;