import { combineReducers } from "redux";
import { register_reducer } from "./registerReducer";
import { login_reducer } from "./loginReducer";
import { user_reducer } from "./userReducer";
// import { profile_reducer } from "./_profileReducer";

export const rootReducer = combineReducers({
  registerReducer: register_reducer,
  loginReducer: login_reducer,
  userReducer: user_reducer,
  // profileReducer: profile_reducer,
});

export default rootReducer;
