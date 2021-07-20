import axios from "axios";
import history from "../../history";
export const send_login_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "/user/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );

      if (data.token) {
        await dispatch(login_success());
        history.push("/");
        return;
      }
      await dispatch(login_error(data.error));
    } catch (error) {
      console.error(error);
      dispatch(login_error(error.response?.data.error || error.message));
      // dispatch(login_error("Kuch toh gadbad hai daya"));
    }
  };
};

const login_success = (data) => {
  return {
    type: "LOGIN_SUCCESS",
  };
};

const login_error = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

export const send_register_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:4000/user/register", {
        name: formData.name,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        isAdmin: formData.isAdmin,
      });

      if (data.token) {
        await dispatch(register_request_success());
        history.push("/users");
        return;
      }
      await dispatch(register_error(data.error));
      history.push("/register");
      return;
    } catch (error) {
      console.log(error.response);
      await dispatch(
        register_error(error.response?.data.error || error.message)
      );
      history.push("/register");
    }
  };
};
export const register_request_success = (data) => {
  return {
    type: "REGISTRATION_SUCCESSFUL",
  };
};

export const register_error = (error) => {
  return {
    type: "REGISTRATION_ERROR",
    payload: error,
  };
};

export const logout_action = () => {
  return {
    type: "LOGOUT",
  };
};
