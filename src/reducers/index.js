import { combineReducers } from "redux";
import people from "./people";
import auth from "./auth";

const rootReducer = combineReducers({
  people,
  auth
});

export default rootReducer;
