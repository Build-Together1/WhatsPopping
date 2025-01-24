import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAllEvents } from "../services/apiRequest";
import "../styles/TrendingEvents.css";

const TrendingEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const eventsPerPage = 4;
  const navigate = useNavigate();

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

  const handleEventClick = (eventId) => {
    if (!eventId) {
      console.error("Event ID is undefined");
      return;
    }
    navigate(`/events/${eventId}`);
    console.log(eventId);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(events.length / eventsPerPage) - 1)
    );
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

  const paginatedEvents = events.slice(
    currentPage * eventsPerPage,
    (currentPage + 1) * eventsPerPage
  );

  return (
    <section className="home-events">
      <div className="home-events-header">
        <h2>Trending Events Near You</h2>
        <div className="pagination-buttons">
          <button
            className="nav-button"
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            <span>&lt;</span> Prev
          </button>
          <button
            className="nav-button"
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(events.length / eventsPerPage) - 1
            }
          >
            Next &gt;
          </button>
        </div>
      </div>
      <div className="home-events-container">
        {loading && <p>Loading events...</p>}
        {paginatedEvents.map((event) => (
          <div key={event.id} className="home-event">
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
              <p>{truncateDescription(event.event_description, 10)}</p>
              <button
                className="read-more-button"
                onClick={() => handleEventClick(event.id)}
              >
                Read More
              </button>
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

export default TrendingEvents;
