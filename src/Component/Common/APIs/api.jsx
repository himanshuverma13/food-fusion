import axios from "axios";
const URL = `${process.env.REACT_APP_API}/cashier`;
// const Token = JSON.parse(localStorage.getItem('userAuth'));
const Token = "JSON.parse(localStorage.getItem('userAuth'));"

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
    const response = await axios.post(`${URL}/customer/register`, Payload,{
      headers: {
        Authorization: `Bearer ${Token?.accessToken}`,
        sessionId:`${Token?.sessionId}`
      },
    });
    console.log("Payload: ", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};

//  Category Page all menu

export const FoodMenuAPI = async () => {
  try {
    const response = await axios.get(`${URL}/customer/allmenu`,{
      headers: {
        Authorization: `Bearer ${Token?.accessToken}`,
        sessionId:`${Token?.sessionId}`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    console.log("Payload: ", response.data);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
