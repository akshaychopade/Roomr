import { ToastAndroid } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../config/constants";

export const login = (username, password) => {
  return {
    type: "LOGIN",
    username: username,
    password: password
  };
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

export function loginFromAPI(username, password) {
  return dispatch => {
    // dispatch(getLogin());
    fetch("https://reqres.in/api/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);

        if (response.token) {
          // alert(JSON.stringify(response.token));
          console.log(response);
          dispatch(loginSuccess(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          dispatch(loginError(error));
          throw error;
        }
      })
      .catch(error => {
        console.log("request failed", error);
      });
  };
}

export function getLogin() {
  return {
    type: LOGIN_USER
  };
}

export function loginSuccess(response) {
  // ToastAndroid.show("Login Success ", ToastAndroid.LONG);
  return dispatch => {
    dispatch({ response, type: LOGIN_USER_SUCCESS });
  };
}

export function loginError() {
  ToastAndroid.show("Login Failure ", ToastAndroid.LONG);
  return { error, type: LOGIN_USER_FAILURE };
}
