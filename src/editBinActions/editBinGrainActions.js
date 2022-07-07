import { binGrainActions } from "./editBinSlice";

import axios from "axios";

export const editBinGrainSelection = (token) => {
  return async (dispatch) => {
    const editBinGrainSelectionRequest = async () => {
      const response = await axios.get("http://localhost:8080/api/bin/lists", {
        headers: { "x-access-token": token },
      });
      if (response.statusText === "OK") {
        dispatch(binGrainActions.editGrainRequest(response.data));
      }
    };

    try {
      await editBinGrainSelectionRequest().catch((err) => {
        console.log(err);
      });
    } catch (err) {}
  };
};

export const saveBinGrainSuggestion = (token, reqBody) => {
  return async (dispatch) => {
    const saveSuggestionBinRequest = async () => {
      const response = await axios.post(
        "http://localhost:8080/api/bin/bin_selection/suggest",
        reqBody,
        {
          headers: { "x-access-token": token },
        }
      );
      if (response.statusText === "OK") {
        dispatch(binGrainActions.binSuggestionRequest(response.data));
      }
    };
    try {
      await saveSuggestionBinRequest().catch((err) => {
        console.log(err);
      });
    } catch (err) {}
  };
};

export const saveSuggestionDataApi = (token, reqBody) => {
  return async (dispatch) => {
    const saveSuggestionBinRequest = async () => {
      const response = await axios.post(
        "http://localhost:8080/api/bin/bin_selection/savesuggest",
        reqBody,
        {
          headers: { "x-access-token": token },
        }
      );
      if (response.statusText === "OK") {
        dispatch(binGrainActions.saveSuggestionRequest(response.data));
      }
    };
    try {
      await saveSuggestionBinRequest().catch((err) => {
        console.log(err);
      });
    } catch (err) {}
  };
};
