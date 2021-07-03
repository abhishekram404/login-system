import { combineReducers } from "redux";
import { form_reducer } from "./formReducer";
import { user_reducer } from "./userReducer";
// import { profile_reducer } from "./_profileReducer";

export const rootReducer = combineReducers({
  formReducer: form_reducer,
  userReducer: user_reducer,
  // profileReducer: profile_reducer,
});

export default rootReducer;
