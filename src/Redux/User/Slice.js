import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    users: [],
    loading: false,
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
        logoutUser: (state) => {
            return {
                ...state,
                user: null,
            }
        },
        addAddress: (state, actions) => {
            if(actions.payload.location === "" || actions.payload.name) {
                alert("Preencha todos os campos")
                return{ ...state }
            }

            if(state.user === null) {
                alert("Faça um login  para cadastrar o email")
                return{ ...state }
            }

            alert("Dados atualizado")
            return{
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: actions.payload.location,
                        number: actions.payload.number,
                    }
                }
            }
        },
        deleteAddress: (state) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    address: null,
                }
            }
        },
        fetchUsers: (state) => {
            console.log("passou aqui")
            state.loading = true;
        },
        fetchUsersSucces: (state, actions) =>{
            state.users = actions.payload;
            state.loading = false
        },
        fetchUsersFailure: (state,actions) => {
            console.log(actions.payload)
            console.log("caiu na failure")
            state.loading = false
        }

    }
})

export const {createUser, logoutUser, addAddress, deleteAddress, fetchUsers,
fetchUsersFailure, fetchUsersSucces
} = userSlice.actions
export default userSlice.reducer;