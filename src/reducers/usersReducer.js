import {
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "actions/types";

const usersInitState = {
  loading: false,
  payload: [],
  error: null
};

export default (state = usersInitState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_STARTED:
      return {
        ...state,
        loading: true
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: [...state.payload, action.payload]
      };

    default:
      return state;
  }
};
