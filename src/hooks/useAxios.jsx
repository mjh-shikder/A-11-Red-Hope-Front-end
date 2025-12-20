import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://a-11-red-hope-back-end.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
