import React, { useState } from "react";
import "../styles/Event.css";
import Footer from "./Footer";
import Exp1 from "../assets/images/Exp1.png";
import Exp2 from "../assets/images/Exp2.png";
import Exp3 from "../assets/images/Exp3.png";
import { getEvents } from "../data/event";

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState("paid");

  return (
    <div>
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
            <label htmlFor="category">
              Categories <br />
              <select id="category" name="category">
                <option value="select">Select</option>
                <option value="music">Music</option>
                <option value="sports">Sports</option>
                <option value="art">Art</option>
                <option value="food">Food</option>
              </select>
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
        <h1>Events</h1>
        <div className="event-nav">
          <span
            className={currentCategory === "paid" ? "active" : ""}
            onClick={() => setCurrentCategory("paid")}
          >
            Paid Events
          </span>
          <span
            className={currentCategory === "free" ? "active" : ""}
            onClick={() => setCurrentCategory("free")}
          >
            Free Events
          </span>
          <span
            className={currentCategory === "foryou" ? "active" : ""}
            onClick={() => setCurrentCategory("foryou")}
          >
            For You
          </span>
        </div>
        <div className="events">
          {getEvents(currentCategory).map((event, index) => (
            <div key={index} className="event">
              <img src={event.image} alt="Event" />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <p>{event.date}</p>
                <div className="event-price">
                  {currentCategory === "paid" && <p>$50</p>}
                  <p>
                    <strong>Get tickets</strong>
                  </p>
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
