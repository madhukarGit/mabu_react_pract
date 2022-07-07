import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  error: "",
  data: [],
  token: "",
};
const loginSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
      state.token = action.payload;
    },
    loginFail: (state, action) => {
      state.isAuth = false;
      state.error = action.payload;
      state.token = "";
    },
    userData: (state, action) => {
      state.data = action.payload;
      state.token = action.payload.accessToken;
    },
    logout: (state, action) => {
      state.isAuth = false;
      state.data = [];
      state.token = "";
    },
  },
});

export const authActions = loginSlice.actions;

export default loginSlice;
