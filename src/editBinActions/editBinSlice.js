import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  binGrainInitialData: [],
  binSuggestionData: [],
  saveSuggestionData: {},
  closeDrawer: false,
  updatedBin: "",
};

const binGrainSlice = createSlice({
  name: "editGrain",
  initialState: initialState,
  reducers: {
    editGrainRequest: (state, action) => {
      state.binGrainInitialData = action.payload;
    },
    binSuggestionRequest: (state, action) => {
      state.binSuggestionData = action.payload;
    },
    saveSuggestionRequest: (state, action) => {
      state.saveSuggestionData = action.payload;
    },
    reloadSuggestionInitalLoad: (state) => {
      state.binSuggestionData = [];
      state.saveSuggestionData = [];
      state.closeDrawer = true;
    },
    closeDrawer: (state, action) => {
      state.closeDrawer = action.payload;
    },
    loadedBin: (state, action) => {
      state.updatedBin(action.payload);
    },
  },
});

export const binGrainActions = binGrainSlice.actions;

export default binGrainSlice;
