import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: 1,
        name: "Caua",
        email: "caua@teste.com",
        address: null,
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {

    }
})

export default userSlice.reducer;