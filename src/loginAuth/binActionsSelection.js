import { binSliceSelectionActions } from "./binSliceSelection";
import axios from "axios";
import { authActions } from "./loginSlice";

export const binSelection = (token) => {
  return async (dispatch) => {
    const binSelectionRequest = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/bin/bin_allocations",
        { headers: { "x-access-token": token } }
      );
      if (response.statusText === "OK") {
        dispatch(binSliceSelectionActions.selectionData(response.data));
      }
    };
    try {
      await binSelectionRequest().catch((err) => {
        dispatch(binSliceSelectionActions.selectionFail(err.message));
      });
    } catch (err) {
      authActions.loginFail(err);
    }
  };
};
