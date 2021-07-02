import axios from "axios";
export const send_register_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data, error } = await axios.post(
        "http://localhost:4000/user/register",
        {
          name: formData.name,
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }
      );

      if (data) {
        console.log(data);
        dispatch(register_request_success(data));
        // return <Redirect to="/" />;
      } else {
        console.log(error);
        dispatch(register_error(error));
      }
    } catch (err) {
      dispatch(register_error(err));
    }
  };
};

export const register_request_success = (data) => {
  return {
    type: "REGISTRATION_SUCCESSFUL",
    payload: data,
  };
};

export const register_error = (err) => {
  return {
    type: "REGISTRATION_ERROR",
    error: err,
  };
};
