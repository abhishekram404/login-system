export const profile_reducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "FETCH_PROFILE_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "FETCH_PROFILE_ERROR":
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
