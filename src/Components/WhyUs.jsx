import React, { useState, useEffect } from "react";
import "./WhyUs.css";

const WhyUs = () => {

 



  return (
    <div
      className="container whyus-sm d-flex"
      style={{ paddingTop: "10%", marginBottom: "10%", zIndex: "998" }}
    >
      <div
        className="heading sticky-top  text-light-bg col-md-6 col-12 z-3 "
        style={{
          color: "var(--text-color)",
          fontSize: "1.25rem",
          height: "60px",
        }}
      >
        Why Us?
      </div>
      <div className="frequent-que col-md-6 col-12 z-3">
        <div className="faq-containers transition-3ms">
          {questionAnswers.map((qa, index) => (
            <>
              <div className="green-border d-flex justify-content-center "></div>
              <Accordion title={qa.question} children={qa.answer} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
const questionAnswers = [
  {
    question: "Strategic Marketing Visionaries",
    answer:
      "Crafting campaigns that merge innovative strategies with real-world results.",
  },
  {
    question: "Maximized ROI, Minimized Spend",
    answer: "Achieve significant marketing results at a fraction of the cost",
  },
  {
    question: "Data-Driven, Creatively Inspired",
    answer:
      "Harnessing the power of analytics infused with creative brilliance.",
  },
  {
    question: "Versatile Expertise, Diverse Impact",
    answer:
      "Proven success across various industries with tailored marketing strategies.",
  },
];

export default WhyUs;

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
