import { memo } from "react";
import { jsonPlaceHolder } from "apis";
import { NotificationManager } from "react-notifications";
import {
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "./types";

import LinearProgress from "@material-ui/core/LinearProgress";

export const fetchUser = choosenId => async dispatch => {
  dispatch(fetchUserStarted());
  try {
    const response = await jsonPlaceHolder.get(`/users/${choosenId}`);
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error));
  }
};

const fetchUserStarted = () => ({
  type: FETCH_USER_STARTED
});

const fetchUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload
});

const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: {
    error
  }
});
