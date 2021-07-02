import initialState from "./initialState";
export const login_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        token: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default login_reducer;
