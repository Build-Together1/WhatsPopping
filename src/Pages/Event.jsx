import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Event.css";
import Footer from "./Footer";
import Exp1 from "../assets/images/Exp1.png";
import Exp2 from "../assets/images/Exp2.png";
import Exp3 from "../assets/images/Exp3.png";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getAllEvents, likeEvent, submitComment } from "../services/apiRequest";

const Product = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadEvents = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllEvents();
      setEventsData(
        data.map((event) => ({
          ...event,
          liked: false,
          showCommentForm: false,
        }))
      );
    } catch (err) {
      setError(err.message || "Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const handleLove = async (event_id, index) => {
    try {
      await likeEvent(event_id);
      const updatedEvents = [...eventsData];
      updatedEvents[index].liked = !updatedEvents[index].liked;
      updatedEvents[index].likes.like_count += updatedEvents[index].liked
        ? 1
        : -1;
      setEventsData(updatedEvents);
    } catch (err) {
      console.error(err.message || "Failed to like event");
    }
  };

  const handleCommentSubmit = async (event_id, index, comment) => {
    try {
      await submitComment(event_id, comment);
      const updatedEvents = [...eventsData];
      updatedEvents[index].comments.push(comment);
      setEventsData(updatedEvents);
    } catch (err) {
      console.error(err.message || "Failed to submit comment");
    }
  };

  const toggleCommentForm = (index) => {
    const updatedEvents = [...eventsData];
    updatedEvents[index].showCommentForm =
      !updatedEvents[index].showCommentForm;
    setEventsData(updatedEvents);
  };

  const handleEventClick = (event_id) => {
    navigate(`/events/${event_id}`);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="event-page">
      <div className="event-banner">
        <div className="banner-text">
          <h1>Explore Event</h1>
          <p>
            Embark on a journey of discovery with us and immerse yourself in the
            world of unforgettable events!
          </p>
          <div className="banner-category">
            <label htmlFor="event">
              Find your next event
              <input
                type="text"
                id="event"
                name="event"
                placeholder="Type of Event"
              />
            </label>
            <button>Search</button>
          </div>
        </div>
        <div className="banner-images">
          <img src={Exp1} alt="Exp1" />
          <img src={Exp2} alt="Exp2" />
          <img src={Exp3} alt="Exp3" />
        </div>
      </div>

      <div className="event-list">
        <h1>Trending Events</h1>
        <div className="events">
          {loading && <p>Loading events...</p>}
          {error && <p className="error">{error}</p>}
          {!loading &&
            !error &&
            eventsData.map((event, index) => (
              <div key={index} className="event">
                <img src={event.event_image} alt="Event" />
                <div className="event-details">
                  <h3
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEventClick(event.id)}
                  >
                    {event.event_name}
                  </h3>
                  <p>{event.event_location}</p>
                  <p>{event.event_date}</p>
                  <p>{event.event_time}</p>
                  <div className="like-comment-section">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLove(event.id, index);
                      }}
                    >
                      {event.liked ? (
                        <AiFillHeart style={{ color: "red" }} />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </button>
                    <span>{event.likes.like_count} Likes</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCommentForm(index);
                      }}
                    >
                      Comment
                    </button>
                    {event.showCommentForm && (
                      <div className="comments">
                        <h4>Comments:</h4>
                        <ul>
                          {event.comments.map((comment, commentIndex) => (
                            <li key={commentIndex}>{comment}</li>
                          ))}
                        </ul>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const comment = e.target.comment.value;
                            handleCommentSubmit(event.id, index, comment);
                            e.target.reset();
                          }}
                        >
                          <input
                            type="text"
                            name="comment"
                            placeholder="Add a comment"
                            required
                          />
                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
