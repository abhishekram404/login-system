import axios from "axios";

const authAxios = (token) =>
  axios.create({
    baseURL: "http://localhost:4000/",
    headers: { authorization: `Bearer ${token}` },
  });

export default authAxios;
