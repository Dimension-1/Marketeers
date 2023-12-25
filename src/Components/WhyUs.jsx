import React, { useState } from 'react';
import './WhyUs.css';
import plusIcon from "../assets/div.whyus__expand.svg";
import image from "../assets/Section.jpg.png";
import minusIcon from "../assets/minusIcon.svg";

const WhyUs = () => {
  const [openAnswers, setOpenAnswers] = useState([false, false, false]);

  const toggleAnswer = (index) => {
    setOpenAnswers((prevOpenAnswers) => {
      const updatedAnswers = [...prevOpenAnswers];
      updatedAnswers[index] = !updatedAnswers[index];
      return updatedAnswers;
    });
  };

  const questionAnswers = [
    {
      question: 'Strategic Marketing Visionaries',
      answer: 'Crafting campaigns that merge innovative strategies with real-world results.',
    },
    {
      question: 'Maximized ROI, Minimized Spend',
      answer: 'Achieve significant marketing results at a fraction of the cost',
    },
    {
      question: 'Data-Driven, Creatively Inspired',
      answer: 'Harnessing the power of analytics infused with creative brilliance.',
    },
    {
      question: 'Versatile Expertise, Diverse Impact',
      answer: 'Proven success across various industries with tailored marketing strategies.',
    },
  ];

  return (
    <div className="container whyus-sm d-flex" style={{paddingTop: '10%', marginBottom: '10%'}}>
       {/* <div className="img-overlay-3 position-absolute right-0" >
      <img src={image} alt="" className="h-75 w-75 " />
    </div> */}
        <div className="heading sticky-top  text-light col-md-6 col-12 z-3 " style={{color: 'var(--text-color)', fontSize: "1.25rem",  height: '60px', zIndex: "1000"}}>
            Why Us?
        </div>
    <div className="frequent-que col-md-6 col-12 z-3">
      <div className="faq-containers">
        {questionAnswers.map((qa, index) => (
          <div key={index} className="mb-4 faq-padding green-border">
            <div
              className={`question faq-question mb-0 text d-flex justify-content-between align-items-center ${openAnswers[index] ? 'open' : ''}`}
              id={`question${index + 1}`}
              onClick={() => toggleAnswer(index)}
            >
              
                
              
              <span className="span" style={{ color: 'white',  zIndex: 1 }}>
                {` ${qa.question}`}
              </span>
              <img src={openAnswers[index] ? minusIcon : plusIcon} alt=""  style={{ height: '100%', width: "6%" }}/>
            </div>
            <div className="answer faq-answer text border-none" id={`answer${index + 1}`} style={{ color: 'var(--text-color)', fontSize: "1.25rem", display: openAnswers[index] ? 'block' : 'none' }}>
              {qa.answer}
            </div>
          </div>
        ))}
        <div className="green-border d-flex justify-content-center pt-4"></div>
      </div>
    </div>
   
    </div>
  );
};

export default WhyUs;
