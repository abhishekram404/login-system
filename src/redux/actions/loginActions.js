import axios from "axios";
import history from "../../history";
export const send_login_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/user/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.token) {
        await dispatch(login_success(data.token));
        history.push("/");
        return;
      }
      await dispatch(login_error(data.error));
    } catch (error) {
      dispatch(login_error(error.response.data.error));
      // dispatch(login_error("Kuch toh gadbad hai daya"));
    }
  };
};

const login_success = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

const login_error = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};
