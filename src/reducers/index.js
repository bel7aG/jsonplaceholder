import { combineReducers } from "redux";
import jsonPlaceHolder from "./JsonPlaceHolderReducer";
import users from "./usersReducer";

const reducers = combineReducers({
  jsonPlaceHolder,
  users
});

export default reducers;
