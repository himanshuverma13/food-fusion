import axios from "axios";
import axiosInstance from "../../../Interceptor/axiosInterceptor";
const URL = `${process.env.REACT_APP_API}/cashier`;
const Token = JSON.parse(localStorage.getItem("userAuth"));
// console.log('Token: ', Token.accessToken);

export const RegistrationAPI = async (Payload) => {
  try {
    const response = await axios.post(`${URL}/register`, Payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const LoginAPI = async (Payload) => {
  try {
    const response = await axios.post(`${URL}/login`, Payload);
    return response;
  } catch (error) {
    throw error;
  }
};

// Order page Customer Order Form
export const CustomerOrderRegisterAPI = async (Payload) => {
  try {
    const response = await axiosInstance.post(`/customer/register`, Payload);
    return response;
  } catch (error) {
    throw error;
  }
};

//  Category Page all menu
export const FoodMenuAPI = async () => {
  try {
    const response = await axiosInstance.get(`${URL}/customer/allmenu`);
    return response;
  } catch (error) {
    throw error;
  }
};

//  Get Table APIs
export const GetTableAPI = async () => {
  try {
    const response = await axiosInstance.get(`${URL}/restaurant/getTable`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

// Table Status for Reserve , order Delived and ready for payment
export const CheckTableStatus = async (payload) => {
  try {
    const response = await axiosInstance.post(`${URL}/customer/register`, payload);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

//  Send order details to backend
export const SendOrderDetailstoAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(`${URL}/restaurant/create/order`,payload);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

//  get order details to backend
export const GetOrderDetailstoAPI = async () => {
  try {
    const response = await axiosInstance.get(`${URL}/restaurant/create/getallorder`);
    console.log('response?.data?.data: ', response?.data?.data);
    return response?.data?.data;
  } catch (error) {
    throw error;
  }
};

//  Send payment details to backend
export const SendPaymentDetailstoAPI = async () => {
  try {
    const response = await axiosInstance.post(`${URL}/restaurant/payment/order`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};