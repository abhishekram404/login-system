export const register_reducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTRATION_SUCCESSFUL":
      return {
        data: action.payload,
      };
    case "REGISTRATION_ERROR":
      return {
        error: action.error,
      };
    default:
      return state;
  }
};
