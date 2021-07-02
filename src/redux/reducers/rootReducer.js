import { combineReducers } from "redux";
import { register_reducer } from "./registerReducer";
import { login_reducer } from "./loginReducer";
export const rootReducer = combineReducers({
  registerReducer: register_reducer,
  loginReducer: login_reducer,
});

export default rootReducer;
