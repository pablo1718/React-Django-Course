import axios from "axios";
import {
  AUTH_ERROR,
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";
import { showErrors } from "./messages";

//CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  //User Loading
  dispatch({ type: USER_LOADING });
  //Get token from the state using getState method
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((resp) => {
      dispatch({
        type: USER_LOADED,
        payload: resp.data,
      });
    })
    .catch((e) => {
      dispatch(showErrors(e.response.data, e.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

//LOGIN USER
export const login = (username, password) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request Body
  const body = JSON.stringify({ username, password });

  //Request
  axios
    .post("/api/auth/login", body, config)
    .then((resp) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: resp.data,
      });
    })
    .catch((e) => {
      dispatch(showErrors(e.response.data, e.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

//REGISTER USER
export const register =
  ({ username, email, password }) =>
  (dispatch) => {
    //Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //Request Body
    const body = JSON.stringify({ username, email, password });
    console.log(body);

    //Request
    axios
      .post("/api/auth/register", body, config)
      .then((resp) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: resp.data,
        });
      })
      .catch((e) => {
        dispatch(showErrors(e.response.data, e.response.status));
        dispatch({ type: REGISTER_FAIL });
      });
  };

//Logout user
export const logout = () => (dispatch, getState) => {
  //Get token from the state using getState method
  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then((resp) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((e) => {
      dispatch(showErrors(e.response.data, e.response.status));
    });
};

// Setup config with TOKEN (Helper function)
export const tokenConfig = (getState) => {
  //Get token from the state using getState method
  const token = getState().auth.token;
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //Add token if it exist
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
