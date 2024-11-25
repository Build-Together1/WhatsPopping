import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import SignupBg from "../assets/images/signup-background.png"; 
import "./EventCreation.css";

const EventCreation = () => {
  const [formData, setFormData] = useState({
    event_name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://whats-popping-server.onrender.com/events", formData);

      if (response.status === 201) {
        navigate("/admin-dashboard");
      } else {
        setError("Event creation failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setError(
          `Error: ${error.response.data.message || "An error occurred. Please try again."}`
        );
      } else if (error.request) {
        setError("No response from the server. Please check your internet connection.");
      } else {
        setError("An error occurred while setting up the request.");
      }
      console.error("Error creating event:", error);
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
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter event location"
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter event description"
                rows="4"
                required 
              />
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
