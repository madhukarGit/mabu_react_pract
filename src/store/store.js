import loginSlice from "../loginAuth/loginSlice";

import { configureStore } from "@reduxjs/toolkit";
import binSliceSelection from "../loginAuth/binSliceSelection";

const store = configureStore({
  reducer: { auth: loginSlice.reducer, selection: binSliceSelection.reducer },
});
export default store;
