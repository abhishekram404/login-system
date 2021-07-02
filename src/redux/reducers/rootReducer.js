import { combineReducers } from "redux";
import { register_reducer } from "./registerReducer";
export const rootReducer = combineReducers({
  registerReducer: register_reducer,
});

export default rootReducer;
