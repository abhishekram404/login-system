import axios from "axios";
export const fetch_users = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/user/all");

      if (data.users) {
        dispatch(fetch_users_success(data.users));
        return;
      }
      dispatch(fetch_users_error(data.error));
    } catch (error) {
      dispatch(fetch_users_error(error.response.data.error));
    }
  };
};

const fetch_users_success = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

const fetch_users_error = (error) => {
  return {
    type: "FETCH_USERS_ERROR",
    payload: error,
  };
};
