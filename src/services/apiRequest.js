import axios from "axios";

export const login = async ({ email_address, password }) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/login`,
      {
        email_address,
        password,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/users/`,
      data,
      {
        headers: {
          "Content-Type": "application/json", 
        },
      }
    );
    return response;
  } catch (error) {
    console.error("API Error:", error.response?.data || error); 
    return error.response;
  }
};


export const generateOtp = async (email_address) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/generate_otp`,
      { email_address }
    );
    return response;
  } catch (error) {
    console.error("Error generating OTP:", error);
    throw error;
  }
};

export const verifyEmail = async ({ email_address, otp }) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/verify_email`,
      {
        email_address,
        otp,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getUserDetails = async (userId) => {
  const token = localStorage.getItem("token");
  if (!token) {
      throw new Error("Token not found");
  }

  return axios.post(
      `https://whats-popping-server.onrender.com/users/${userId}`,
      {},
      {
          headers: {
              Authorization: `Bearer ${token}`, // Include the token in headers
          },
      }
  );
};



export const getEvents = async (request) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/events/`,
      request
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getEvent = async (event_id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/events/${event_id}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
