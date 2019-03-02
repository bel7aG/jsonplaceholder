import { jsonPlaceHolder } from "apis";
import { NotificationManager } from "react-notifications";
import { FETCH_USER } from "./types";
import LinearProgress from "@material-ui/core/LinearProgress";

export const fetchUser = choosenId => async dispatch => {
  try {
    const response = await jsonPlaceHolder.get(`/users/${choosenId}`);
    console.log(response);
    dispatch({
      type: FETCH_USER
    });
  } catch {}
};
