import { combineReducers } from "redux";
import { register_reducer } from "./registerReducer";
import { login_reducer } from "./loginReducer";
import { user_reducer } from "./userReducer";

export const rootReducer = combineReducers({
  registerReducer: register_reducer,
  loginReducer: login_reducer,
  userReducer: user_reducer,
});

export default rootReducer;
