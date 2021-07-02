import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { fetch_profile } from "../redux/actions/_profileActions";

export default function Profile() {
  //   const dispatch = useDispatch();
  //   const [jwt, setJwt] = useState(null);

  //   const { token } = useSelector(
  //     (state) => state.loginReducer || state.registerReducer
  //   );

  //   const [profile, setProfile] = useState({});

  //   useEffect(() => {
  //     setJwt(token);
  //   }, [token]);

  //   useEffect(() => {
  //     try {
  //       dispatch(fetch_profile());
  //     } catch (err) {
  //       console.log(err.response.data.error);
  //     }
  //   }, []);

  return <div className="container">Welcome to your profile</div>;
}
