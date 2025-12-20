import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "./useAuthContext";

const axiosSecure = axios.create({
  baseURL: "https://a-11-red-hope-back-end.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken} `;
      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;
