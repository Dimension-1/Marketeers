import React, { useState } from 'react';
import './WhyUs.css';

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
  ];

  return (
    <div className="container d-flex vh-100" style={{paddingTop: '5%'}}>
        <div className="heading text-light col-md-6 col-12">
            Why Us?
        </div>
    <div className="frequent-que col-md-6 col-12">
      <div className="faq-containers">
        {questionAnswers.map((qa, index) => (
          <div key={index} className="mb-4 faq-padding">
            <div
              className={`question faq-question mb-0 text d-flex justify-content-between align-items-center ${openAnswers[index] ? 'open' : ''}`}
              id={`question${index + 1}`}
              onClick={() => toggleAnswer(index)}
            >
              <span className="ms-2" style={{ color: 'white' }}>
                {` ${qa.question}`}
              </span>
            </div>
            <div className="answer faq-answer text mb-0 mt-0 border-none" id={`answer${index + 1}`} style={{ color: 'white', display: openAnswers[index] ? 'block' : 'none' }}>
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
