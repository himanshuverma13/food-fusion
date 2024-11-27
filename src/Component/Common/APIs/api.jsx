import axios from "axios";
import axiosInstance from "../../../Interceptor/axiosInterceptor";
const URL = `${process.env.REACT_APP_API}/cashier`;
const Token = JSON.parse(localStorage.getItem("userAuth"));
// console.log('Token: ', Token.accessToken);

export const RegistrationAPI = async (Payload) => {
  try {
    const response = await axios.post(`${URL}/register`, Payload);
    console.log("Payload: ", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const LoginAPI = async (Payload) => {
  try {
    const response = await axios.post(`${URL}/login`, Payload);
    console.log("Payload: ", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};

// Order page Customer Order Form

export const CustomerOrderRegisterAPI = async (Payload) => {
  try {
    const response = await axiosInstance.post(`/customer/register`, Payload);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};

  //  Category Page all menu

  export const FoodMenuAPI = async () => {
    try {
      const response = await axios.get(`${URL}/customer/allmenu`, {
        headers: {
          Authorization: `Bearer ${Token?.accessToken}`,
          session:`${Token?.session}`,
          "ngrok-skip-browser-warning": "69420",
        },
      });
      console.log("Payload: ", response.data);
      return response;
    } catch (error) {
      console.log("error: ", error);
    }
  };


//  Get Table APIs
export const GetTableAPI = async () => {
  try {
    const response = await axios.get(`${URL}/restaurant/getTable`, {
      headers: {
        Authorization: `Bearer ${Token?.accessToken}`,
        session: `${Token?.session}`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    console.log("Payload: ", response.data);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
