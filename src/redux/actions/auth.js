/** @format */

import axios from "axios";

export const loginAction = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      `/api/users`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    data.error
      ? dispatch({ type: "loginFail", payload: data.error })
      : dispatch({ type: "loginSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "loginFail", payload: "Something went wrong" });
  }
};
