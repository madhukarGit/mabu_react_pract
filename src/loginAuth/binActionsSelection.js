import { binSliceSelectionActions } from "./binSliceSelection";
import axios from "axios";

export const binSelection = (token) => {
  return async (dispatch) => {
    console.log("selection");
    const binSelectionRequest = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/bin/bin_allocations",
        { headers: { "x-access-token": token } }
      );
      console.log("response is ", response);
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
