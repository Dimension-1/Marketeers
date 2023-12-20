import React, { useState } from 'react';
import './WhyUs.css';
import plusIcon from "../assets/div.whyus__expand.svg";
import image from "../assets/Section.jpg.png";

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
      question: 'Result Driven',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      question: 'Cost Effective Value Add',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      question: 'Tech Driven Creativity',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      question: 'Tech Driven Expertise',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
  ];

  return (
    <div className="container d-flex vh-100" style={{paddingTop: '10%'}}>
       <div className="img-overlay-3 position-absolute right-0" >
      <img src={image} alt="" className="h-75 w-75 " />
    </div>
        <div className="heading text-light col-md-6 col-12 z-3 " style={{color: 'var(--text-color)', fontSize: "1.25rem"}}>
            Why Us?
        </div>
    <div className="frequent-que col-md-6 col-12">
      <div className="faq-containers">
        {questionAnswers.map((qa, index) => (
          <div key={index} className="mb-4 faq-padding green-border pt-5 pb-4">
            <div
              className={`question faq-question mb-0 text d-flex justify-content-between align-items-center ${openAnswers[index] ? 'open' : ''}`}
              id={`question${index + 1}`}
              onClick={() => toggleAnswer(index)}
            >
              
                
              
              <span className="" style={{ color: 'white' }}>
                {` ${qa.question}`}
              </span>
              <img src={plusIcon} alt=""  style={{ height: '100%', width: "6%" }}/>
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
