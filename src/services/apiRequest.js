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

export const getUserDetails = async (id) => {
  if (!id) {
    throw new Error("User ID not provided");
  }

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/users/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(
      "Error fetching user details:",
      error.response?.data || error
    );
    throw error;
  }
};

export const updateUserDetails = async (id, data) => {
  if (!id) {
    throw new Error("User ID not provided");
  }

  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_BASEURL}/users/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error updating user details:", error.response?.data || error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  if (!id) {
    throw new Error("User ID not provided");
  }

  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BASEURL}/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error deleting user:", error.response?.data || error);
    throw error;
  }
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
