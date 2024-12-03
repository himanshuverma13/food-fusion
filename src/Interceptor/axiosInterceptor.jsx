import axios from "axios";

 
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/cashier`,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});
 
/*
Interceptor to add token to request headers
**/
axiosInstance.interceptors.request.use(
  (config) => {
    const userAuth = JSON.parse(localStorage.getItem("userAuth"))
    if (userAuth) config.headers["Authorization"] = `Bearer ${userAuth.accessToken}`;
    if (userAuth) config.headers["Session"] = `${userAuth.session}`;
 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
axiosInstance.interceptors.response.use(
  (response) => {
    // if (response?.data?.message) toastSuccess(response?.data?.message);
 
    return response;
  },
  (error) => {
    // if (error?.message) toastError(error?.message);
 
    if (error.response && error.response.status === 401) {
      // For example, log out the user and redirect to login page
    //   localStorage.removeItem("token");
    //   window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
 
export default axiosInstance;