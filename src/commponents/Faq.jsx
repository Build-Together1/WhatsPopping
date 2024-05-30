import React, { useState } from "react";
import "../styles/FAQ.css";
import Frame10002321 from "../assets/images/Frame 1000002321.png"

const FAQ = () => {
  // Define FAQ data
  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  // State to manage which question's answer is currently displayed
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the display of answers
  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      // If the same question is clicked again, close it
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-text">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="question" onClick={() => toggleAnswer(index)}>
                <h5>{faq.question}</h5>
                <span className={activeIndex === index ? "minus" : "plus"}>
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && <p className="answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-img">
        <img src={Frame10002321} alt="" srcset="" />
      </div>
    </div>
  );
};

export default FAQ;
