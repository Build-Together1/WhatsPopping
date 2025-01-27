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

export const resetPassword = async ({email_address}) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/reset_password`,
      {
        email_address,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const changePassword = async ({email_address, password, confirm_password, otp}) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/confirm_password_reset`,
      {
        email_address,
        password,
        confirm_password,
        otp
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

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}/events/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error.response?.data || error);
    throw error.response || error;
  }
};

export const getEvent = async (eventId) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}/events/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching event:", error.response?.data || error);
    throw error.response || error;
  }
};


export const createEvent = async (formData, token) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/events/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.setItem("eventId", response.data.id);
    console.log("Event created successfully:", response.data.id);
    return response;
  } catch (error) {
    console.error("Error creating event:", error.response?.data || error);
    throw error.response || error;
  }
};



export const getEventDetails = async (eventId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/events/${eventId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching event details:", error.response?.data || error);
    throw error.response || error;
  }
};

export const likeEvent = async (event_id) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASEURL}/events/${event_id}/like`);
    return response.data;
  } catch (error) {
    console.error("Error liking event:", error.response?.data || error);
    throw error.response || error;
  }
};

export const submitComment = async (event_id, comment) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/comments/${event_id}`,
      { comment },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting comment:", error.response?.data || error);
    throw error.response || error;
  }
};
