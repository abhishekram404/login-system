export const user_reducer = (
  state = { users: null, loading: true, error: null },
  action
) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_USERS_ERROR":
      return {
        ...state,
        users: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
