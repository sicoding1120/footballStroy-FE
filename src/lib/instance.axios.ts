import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://footballstorybe.vercel.app", // Ganti dengan base URL backend kamu
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
