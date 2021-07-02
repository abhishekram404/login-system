export const register_reducer = (
  state = { token: null, error: null },
  action
) => {
  switch (action.type) {
    case "REGISTRATION_SUCCESSFUL":
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    case "REGISTRATION_ERROR":
      return {
        ...state,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
