import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    userEmail: "",
  },
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout(state, action) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    getUserEmail(state, action) {
      state.userEmail = action.payload;
    },
  },
});

export default authSlice.reducer;
export let { loginSuccess, logout, getUserEmail } = authSlice.actions;
