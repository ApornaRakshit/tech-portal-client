import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://tech-portal-server-five.vercel.app",   // ✅ FIXED
});

const useAxiosSecure = () => axiosSecure;

export default useAxiosSecure;
