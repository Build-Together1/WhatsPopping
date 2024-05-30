import React from "react";
import "../styles/Contact.css";
import Call from "../assets/images/icons/Call.png";
import Msg from "../assets/images/icons/Msg.png";
import Loc from "../assets/images/icons/Loc.png";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className="info">
        <h1>Contact Us</h1>
        <p>
          Questiong or Feedback? We'd love to hear from you, <br />
          we're just a message away!
        </p>
      </div>

      <div className="container mt-5">
        <div className="cont">
          <div className=" info_section">
            <div className="p-3 info-all">
              <div className="contact_header">
                <h1>Contact Information</h1>
                <p className="mb-5">Say something to start a live chat</p>
              </div>
              <div className="mb-5 details">
                <p>
                  <img src={Call} className="logo" alt="Responsive" />
                  <span>+1452 6993 789</span>{" "}
                </p>{" "}
                <br />
                <p>
                  <img src={Msg} className="logo" alt="Responsive" />
                  <span>layi@gmail.com</span>
                </p>{" "}
                <br />
                <p>
                  <img src={Loc} className="logo" alt="Responsive" />
                  <span className="">
                    4831 rue principale Rouyn City, Canada
                  </span>
                </p>
              </div>
              <div>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram  u"></i>
              </div>
            </div>
          </div>
          <div className="form">
            <form class="">
              <div className="inputs">
                <label for="inputFirstName" class="form-label">
                  First Name
                  <input
                    type="text"
                    class="form-control"
                    aria-label="First name"
                    required
                  />
                </label>

                <label for="inpuLastName" class="form-label">
                  Last Name
                  <input
                    type="text"
                    class="form-control"
                    id="inputLname"
                    aria-label="Last name"
                    required
                  />
                </label>

                <label for="inputEmail4" class="form-label">
                  Email
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    required
                  />
                </label>

                <label for="inputTell" class="form-label">
                  Phone No.
                  <input type="Phone" class="form-control" id="inputTell" />
                </label>
              </div>

              <div class="col-12">
                <label for="inputTel" class="form-label">
                  Messages
                </label>

                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  required
                ></textarea>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  style={{ width: "100%", background: "#6A1B9A" }}
                  class="btn btn-primary"
                >
                  Send Messages
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="subscribe">
        <h1>Subscribe to our Newsletter</h1>
        <p>Get daily updates on event into your inbox</p>
        <button>Subscribe</button>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
