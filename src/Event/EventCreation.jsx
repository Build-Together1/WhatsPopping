import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import SignupBg from "../assets/images/signup-background.png";
import { UserContext } from "../context/UserContext";
import { createEvent } from "../services/apiRequest";
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
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "event_location") {
      fetchLocationSuggestions(value);
    }
  };

  const fetchLocationSuggestions = async (query) => {
    if (!query) {
      setLocationSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json`,
        {
          params: {
            q: query,
            key: "f64157c5f5ff48a9a57f5eca86e53006",
            limit: 5,
          },
        }
      );
      const suggestions = response.data.results.map((result) => result.formatted);
      setLocationSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
      setLocationSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData({ ...formData, event_location: suggestion });
    setLocationSuggestions([]);
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
      const token = user?.token || localStorage.getItem("token");
      if (!token) {
        setError("User is not authenticated. Please log in first.");
        setLoading(false);
        return;
      }

      await createEvent(formData, token);
      navigate("/event");
    } catch (error) {
      console.error("Error creating event:", error);
      setError(error.message || "Event creation failed. Please try again.");
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

            <div className="date-time-wrapper">
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
            </div>

            <div className="category-location-wrapper">
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
              {locationSuggestions.length > 0 && (
                <ul className="suggestions-list">
                  {locationSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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

            <div className="btns">
              <button type="submit" className="pri-btn">
                {loading ? "Creating..." : "Create Event"}
              </button>
              <NavLink to="/event" className="cancel-btn">
                Cancel
              </NavLink>
            </div>

            <p className="error-message">
              {error && <strong className="n">{error}</strong>}
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
