import { jsonPlaceHolder } from "apis";
import { NotificationManager } from "react-notifications";
// import { NotificationManager } from "react-notifications";
import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_STARTED,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  FETCH_USER
} from "./types";

export const fetchPosts = () => async dispatch => {
  dispatch(fetchPostsStarted());
  try {
    const response = await jsonPlaceHolder.get(`/posts`);
    const { data } = response;
    console.log(response);
    NotificationManager.success("okokokok");
    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

const fetchPostsStarted = () => ({
  type: FETCH_POSTS_STARTED
});

const fetchPostsSuccess = payload => ({
  type: FETCH_POSTS_SUCCESS,
  payload
});

const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: {
    error
  }
});

export const deletePost = choosenId => async dispatch => {
  dispatch(deletePostStarted());
  try {
    const response = await jsonPlaceHolder.delete(`/posts/${choosenId}`);
    console.log(response);
    NotificationManager.success("okokokok");
    dispatch(deletePostSuccess(choosenId));
  } catch (error) {
    dispatch(deletePostFailure(error.message));
  }
};

const deletePostStarted = () => ({
  type: DELETE_POST_STARTED
});

const deletePostSuccess = id => ({
  type: DELETE_POST_SUCCESS,
  payload: {
    id
  }
});

const deletePostFailure = error => ({
  type: DELETE_POST_FAILURE,
  payload: {
    error
  }
});
