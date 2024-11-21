export const RegistrationAPI = (Payload) => {
    try {
      console.log('Payload: ', Payload);
      return {message: "success"}
  } catch (error) {
    console.log("error: ", error);
  }
};

export const LoginAPI = (Payload) => {
    try {
      console.log('Payload: ', Payload);
      return {message: "success"}
  } catch (error) {
    console.log("error: ", error);
  }
};
