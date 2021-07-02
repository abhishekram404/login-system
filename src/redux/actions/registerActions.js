import axios from "axios";
import history from "../../history";

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

      // TODO : Fix the unknown error
      if (data.token) {
        await dispatch(register_request_success(data.token));
        history.push("/users");
        return;
      }
      await dispatch(register_error(data.error));
      history.push("/register");
      return;
    } catch (error) {
      await dispatch(register_error(error.response.data.error));
      history.push("/register");
    }
  };
};
export const register_request_success = (data) => {
  return {
    type: "REGISTRATION_SUCCESSFUL",
    payload: data,
  };
};

export const register_error = (error) => {
  return {
    type: "REGISTRATION_ERROR",
    payload: error,
  };
};
