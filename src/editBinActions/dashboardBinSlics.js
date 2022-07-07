import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashbaordBins: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    dashboardBinApiRequest: (state, action) => {
      state.dashbaordBins = action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
