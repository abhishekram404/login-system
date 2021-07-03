import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "http://localhost:4000/",
});

export default axiosBase;
