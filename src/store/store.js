import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../editBinActions/dashboardBinSlics";

import binGrainSlice from "../editBinActions/editBinSlice";
import binSliceSelection from "../loginAuth/binSliceSelection";
import loginSlice from "../loginAuth/loginSlice";
const store = configureStore({
  reducer: {
    auth: loginSlice.reducer,
    selection: binSliceSelection.reducer,
    editGrain: binGrainSlice.reducer,
    dashboard: dashboardSlice.reducer,
  },
});
export default store;
