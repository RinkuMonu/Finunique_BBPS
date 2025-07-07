import axios from "axios";

const axiosInstance = axios.create({

  baseURL: "https://bbpsrepo.onrender.com/api/", 

  // baseURL: 'https://7qcwg3jk-8080.inc1.devtunnels.ms/api/',
  // baseURL: "http://localhost:8080/api/",

  // baseURL: 'https://1979-2401-4900-1c1b-b183-ad00-4f01-f61e-5178.ngrok-free.app/api/',
  // baseURL: 'https://api.finuniques.in/api/',
 
  headers: {
    "Content-Type": "application/json",
  },  
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");

      console.error("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
