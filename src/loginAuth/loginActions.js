import { authActions } from "./loginSlice";
import axios from "axios";

export const loginUser = (userData) => {
  return async (dispatch) => {
    const sendLoginRequest = async () => {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        {
          user_email: userData.user,
          user_password: userData.pwd,
        }
      );
      console.log("response is ", response.data.accessToken);
      if (response.statusText === "OK") {
        dispatch(authActions.loginSuccess(response.data.accessToken));
        dispatch(authActions.userData(response.data));
      }
    };
    try {
      await sendLoginRequest().catch((err) => {
        dispatch(authActions.loginFail(err.message));
      });
    } catch (err) {
      authActions.loginFail(err);
    }
  };
};
