import axios from "axios";
import { useSelector } from "react-redux";
export const fetch_profile = () => {
  return async (dispatch) => {
    try {
      const { token } = await useSelector(
        (state) => state.registerReducer || state.loginReducer
      );
      const profile = await axios.get("http://localhost:4000/user/profile", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetch_profile_success(profile));
    } catch (error) {
      dispatch(fetch_profile_error(error.message));
    }
  };
};

export const fetch_profile_success = (profile) => {
  return {
    type: "FETCH_PROFILE_SUCCESS",
    payload: profile,
  };
};

export const fetch_profile_error = (error) => {
  return {
    type: "FETCH_PROFILE_ERROR",
    payload: error,
  };
};
