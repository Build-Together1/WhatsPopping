import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAllEvents } from "../services/apiRequest";
import "../styles/PopularEvents.css";
const PopularEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleEventClick = (event_id) => {
    navigate(`/events/${event_id}`);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="home-events">
      <h2>Popular Events</h2>
      <div className="home-events-container">
        {loading && <p>Loading events...</p>}
        {events.map((event, index) => (
          <div key={index} className="home-event">
            <div className="image-container">
              {event.event_image ? (
                <img className="tr" src={event.event_image} alt="Event" />
              ) : (
                <div className="no-image">No Image</div>
              )}
            </div>
            <div className="home-event-details">
              <h3
                style={{ cursor: "pointer" }}
                onClick={() => handleEventClick(event.id)}
              >
                {event.event_name}
              </h3>
              <p>{event.event_location}</p>
              <p>{event.event_date}</p>
              <p>{event.event_time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularEvents;
