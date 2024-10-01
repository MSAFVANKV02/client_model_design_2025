import {  createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


const initialState = {
    user: null,
    userAddress: [],
    status: "idle",
    isLoggedIn: false,
    loading: false,
    error: null,
  };
  

  const userAuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginSuccess(state, action) {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.status = "succeeded";
      },
      loginFailure(state, action) {
        state.error = action.payload.error;
        state.status = "failed";
      },
      logout(state) {
        state.user = null;
        state.isLoggedIn = false;
        state.status = "idle";
      },
    //   getUserAddressSuccess(state, action) {
    //     state.userAddress = action.payload.addresses;
    //   },
    //   getUserAddressFailure(state, action) {
    //     state.error = action.payload.error;
    //   },
    },
    // extraReducers: {
      
    // },
  })

export const { loginSuccess, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
