import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import SignupBg from "../assets/images/signup-background.png";
import { UserContext } from "../context/UserContext";
import "./EventCreation.css";

const EventCreation = () => {
  const [formData, setFormData] = useState({
    event_image: "",
    event_name: "",
    event_date: "",
    event_time: "",
    event_location: "",
    event_description: "",
    event_category: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, event_image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Check if user is logged in
      if (!user.id || !user.token) {
        console.log("token", user.token);
        setError("User is not authenticated. Please log in first.");
        setLoading(false);
  
        // Redirect to login after a short delay
        setTimeout(() => {
          navigate("/auth");
        }, 2000); // 2 seconds delay
        return;
      }
  
      console.log("Using token:", user.token);
      console.log("using id:", user.id);
      const response = await axios.post(
        "https://whats-popping-server.onrender.com/events/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
  
      if (response.status === 201) {
        navigate("/event");
      } else {
        setError("Event creation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        setError(error.response.data.message || "Authorization failed.");
      } else if (error.request) {
        setError("No response from the server. Please check your internet connection.");
      } else {
        setError("An error occurred while setting up the request.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="event-creation">
      <div className="event-creation-container">
        <div className="event-creation-header">
          <h1>Create an Event</h1>
          <p>Fill in the details below to create a new event</p>
        </div>

        <div className="event-creation-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="event_image" className="form-label">
                Event Image
              </label>
              <input
                type="file"
                id="event_image"
                name="event_image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event_name" className="form-label">
                Event Name
              </label>
              <input
                type="text"
                id="event_name"
                name="event_name"
                value={formData.event_name}
                onChange={handleChange}
                placeholder="Enter event name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event_date" className="form-label">
                Date
              </label>
              <input
                type="date"
                id="event_date"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event_time" className="form-label">
                Time
              </label>
              <input
                type="time"
                id="event_time"
                name="event_time"
                value={formData.event_time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event_location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="event_location"
                name="event_location"
                value={formData.event_location}
                onChange={handleChange}
                placeholder="Enter event location"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event_description" className="form-label">
                Description
              </label>
              <textarea
                id="event_description"
                name="event_description"
                value={formData.event_description}
                onChange={handleChange}
                placeholder="Enter event description"
                rows="4"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event_category" className="form-label">
                Category
              </label>
              <select
                id="event_category"
                name="event_category"
                value={formData.event_category}
                onChange={handleChange}
                required
              >
                <option value="">Select event category</option>
                <option value="music">Music</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
                <option value="fashion">Fashion</option>
                <option value="arts">Arts</option>
              </select>
            </div>

            <button type="submit" className="buttonv">
              {loading ? "Creating Event..." : "Create Event"}
            </button>

            <p className="error-message">{error && <strong className="n">{error}</strong>}</p>

            <p className="cancel-option">
              <NavLink to="/events">Cancel</NavLink>
            </p>
          </form>
        </div>
      </div>

      <div className="event-creation-image">
        <img src={SignupBg} alt="Signup Background" />
      </div>
    </div>
  );
};

export default EventCreation;
