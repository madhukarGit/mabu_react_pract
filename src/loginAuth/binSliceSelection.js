import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectionData: [], selectionApiFailed: "" };

const binSliceSelection = createSlice({
  name: "selection",
  initialState,
  reducers: {
    selectionData: (state, action) => {
      state.selectionData = action.payload;
    },
    selectionFail: (state, action) => {
      state.selectionData = [];
      state.selectionApiFailed = action.payload;
    },
  },
});

export const binSliceSelectionActions = binSliceSelection.actions;

export default binSliceSelection;
