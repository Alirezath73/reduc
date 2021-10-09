import { combineReducers } from "redux";
import bugReducer from "./bugReducer";
import projectReducer from "./projectReducer";

const reducers = combineReducers({
  bugs: bugReducer,
  project: projectReducer,
});

export default reducers;
