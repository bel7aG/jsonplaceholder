import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_STARTED,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  FETCH_USER
} from "actions/types";

const initialState = {
  loading: false,
  payload: [],
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        loading: true
      };

    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        payload: [...payload],
        error: null
      };

    case FETCH_POSTS_FAILURE:
      let { error } = payload;
      return {
        ...state,
        loading: false,
        error
      };

    case DELETE_POST_STARTED:
      return {
        ...state,
        loading: true
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: state.payload.filter(({ id }) => id !== payload.id)
      };

    case DELETE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };

    default:
      return state;
  }
};
