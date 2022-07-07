import axios from "axios";
import { dashboardActions } from "./dashboardBinSlics";

export const dashboardBinSelection = (token) => {
  return async (dispatch) => {
    const dashboardBin = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/operation/dashboard",
        {
          headers: { "x-access-token": token },
        }
      );
      console.log("responsei s ", response);
      if (response.statusText === "OK") {
        dispatch(dashboardActions.dashboardBinApiRequest(response.data.data));
      }
    };

    try {
      await dashboardBin().catch((err) => {
        console.log(err);
      });
    } catch (err) {}
  };
};
