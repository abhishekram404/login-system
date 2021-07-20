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
      console.log(error);
      dispatch(fetch_users_error(error.response?.data.error || error.message));
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

export const delete_user = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/user/delete", {
        id,
      });
      dispatch(fetch_users_success(data.users));
    } catch (error) {
      dispatch(fetch_users_error(error.response?.data.error || error.message));
    }
  };
};

// TODO  create deleteUser success and failure
