import React from "react";
import "../styles/Home.css";
import FAQ from "../commponents/Faq";
import Profile from "../assets/images/profile.png";
import HuggingImg from "../assets/images/Frame 1000001967.png";
import Drinking from "../assets/images/Frame 1000001968.png";
import Footer from "./Footer";
import Image174 from "../assets/images/image 174.png";
import Image175 from "../assets/images/image 175.png";

const Home = () => {
  // const teamData = [
  //   {
  //     image: Profile,
  //     description: "Description for image 1",
  //   },
  //   {
  //     image: Profile,
  //     description: "Description for image 2",
  //   },
  //   {
  //     image: Profile,
  //     description: "Description for image 3",
  //   },
  //   {
  //     image: Profile,
  //     description: "Description for image 4",
  //   },
  //   {
  //     image: Profile,
  //     description: "Description for image 5",
  //   },
  //   {
  //     image: Profile,
  //     description: "Description for image 6",
  //   },
  //   {
  //     image: Profile,
  //     description: "Description for image 7",
  //   },
  //   {
  //     image: Profile,
  //     description: "Description for image 8",
  //   },
  // ];

  return (
    <div>
      <div className="about-us">
        <section className="about-banner">
          <h1> Navigate the Event Verse with Whatspopping</h1>
          <p>
            Create live or virtual events, discover and book exciting local
            events, festivals and experiences near you
          </p>
          <div className="banner-buttons">
            <button className="btn-a">Find your next event</button>
            <button className="btn-b">Create an Accout</button>
          </div>
        </section>

        <hr />

        <section className="services">
          <h2>Do more with Whatspopping</h2>

          <div className="each">
            <img src={HuggingImg} alt="" srcset="" />
            <div>
              <h3>Discover Events</h3>
              <p>
                Create an unforgettable event experience from free to a paid or
                invite-only event that enhances brand perception. At
                Whatspopping, we make it easy for event organizers like you to
                create, promote and sell tickets to your event creating a
                memorable experience with the right tools and amazing customer
                support.
              </p>
            </div>

            <div>
              <h3>Smooth and Secure Payments</h3>
              <p>
                Create an unforgettable event experience from free to a paid or
                invite-only event that enhances brand perception. At
                Whatspopping, we make it easy for event organizers like you to
                create, promote and sell tickets to your event creating a
                memorable experience with the right tools and amazing customer
                support.
              </p>
            </div>
            <img src={Drinking} alt="" srcset="" />
          </div>
        </section>

        <section className="find-event">
          <div className="event-text">
            <h1>FIND FELLOW EVENT ENTHUSIASTS</h1>
            <p>
              Immerse yourself in our vibrant event community!Connect, Discover,
              Share: Join our vibrant event community and find fellow
              enthusiasts, insightful tips, and a space to share your
              unforgettable experiences. Explore a diverse tapestry of events,
              ignite your passions with music festivals and insightful
              workshops, and broaden your horizons through captivating
              experiences. Engage in meaningful conversations, share your
              unforgettable moments, and learn from the diverse perspectives of
              fellow enthusiasts.{" "}
            </p>
          </div>
          <div className="event-img">
            <img className="event-img" src={Image174} alt="" srcset="" />
            <img className="event-img" src={Image175} alt="" srcset="" />
          </div>
        </section>

        <section className="review">
          <h1>What people say about us</h1>
          <div className="review-cards">
            <div className="each-card">
              <div className="card-header">
                <img src={Profile} alt="" srcset="" />
                <div className="card-header-text">
                  <h3>Bisi Olaoye</h3>
                  <p>Digital Marketer</p>
                </div>
              </div>
              <p>
                Promoting my event through this platform has been incredibly
                successful. The reach and targeted advertising ensured a large
                and engaged audience, and the user-friendly registration process
                made it easy for attendees to sign up. I highly recommend them
                to any event organizer."
              </p>
            </div>
            <div className="each-card">
              <div className="card-header">
                <img src={Profile} alt="" srcset="" />
                <div className="card-header-text">
                  <h3>Bisi Olaoye</h3>
                  <p>Digital Marketer</p>
                </div>
              </div>
              <p>
                Promoting my event through this platform has been incredibly
                successful. The reach and targeted advertising ensured a large
                and engaged audience, and the user-friendly registration process
                made it easy for attendees to sign up. I highly recommend them
                to any event organizer."
              </p>
            </div>
            <div className="each-card">
              <div className="card-header">
                <img src={Profile} alt="" srcset="" />
                <div className="card-header-text">
                  <h3>Bisi Olaoye</h3>
                  <p>Digital Marketer</p>
                </div>
              </div>
              <p>
                Promoting my event through this platform has been incredibly
                successful. The reach and targeted advertising ensured a large
                and engaged audience, and the user-friendly registration process
                made it easy for attendees to sign up. I highly recommend them
                to any event organizer."
              </p>
            </div>
          </div>
        </section>

        <FAQ></FAQ>

        <section className="newsletter">
          <h1>Subscribe to our Newsletter</h1>
          <p>Get daily updates on event into your inbox</p>
          <button>Subscribe</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
