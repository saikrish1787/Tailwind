import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedin: false };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedin = true;
    },
    signin: (state) => {
      state.isLoggedin = false;
    },
    toggle: (state) => {
      state.isLoggedin = !state.isLoggedin;
    },
  },
});

export const store = configureStore({ reducer: loginSlice.reducer });

export const loginActions = loginSlice.actions;
