import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"user",
    initialState: {
        isConnected: false,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userName:"",
        createdAt: "",
        updatedAt: "",
        id: "",
        token:"",
    },
    reducers: {
        addLogin: (state, action) => {
                state.email = action.payload.email;
                state.password = action.payload.password;
            },
        addToken: (state, action) => {
                state.token = action.payload;
                state.isConnected = !state.isConnected;
            },
        deleteToken: (state, action) => {
                state.token = action.payload;
                state.isConnected = !state.isConnected;
            },
        addUserInformation:(state, action) => {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.userName = action.payload.userName;
                state.createdAt = action.payload.createdAt;
                state.updatedAt = action.payload.updatedAt;
                state.id = action.payload.id;
        },
        changeUsername:(state, action) => {
            state.userName = action.payload.userName;
        },  
        },
    });

export const { addLogin, addToken, deleteToken, addUserInformation, changeUsername} = loginSlice.actions;

export const store = configureStore({
    reducer: {
        user: loginSlice.reducer,
    },
});