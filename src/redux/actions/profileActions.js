



// Redux action creator for fetching profile data
// by sending the jwt token to the server

import axios from "axios";
export const fetch_profile = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/user/profile", {
        withCredentials: true,
      });

      if (await data) {
        await dispatch(fetch_profile_success(data.user));
        return;
      }
      dispatch(fetch_profile_error(data.error));
    } catch (error) {
      console.log(error?.response?.data);
      dispatch(fetch_profile_error(error?.response?.data || error.message));
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
