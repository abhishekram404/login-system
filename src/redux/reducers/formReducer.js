export const form_reducer = (
  state = { error: { loginError: null, registerError: null } },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        error: { loginError: null, registerError: null },
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error: { ...state.error, loginError: action.payload },
      };

    case "REGISTRATION_SUCCESSFUL":
      return {
        ...state,
        error: { loginError: null, registerError: null },
      };
    case "REGISTRATION_ERROR":
      return {
        ...state,
        error: { ...state.error, registerError: action.payload },
      };

    case "LOGOUT":
      return {
        ...state,
        error: { loginError: null, registerError: null },
      };

    default:
      return state;
  }
};

export default form_reducer;
