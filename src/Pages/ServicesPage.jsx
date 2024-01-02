import React, { useState, useRef } from 'react';
import Services from "../Components/Services";
import SVG from "../assets/SVG.svg";
import gsap from "gsap";
import { useParams, Link} from 'react-router-dom';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import forecast from "../assets/arrow-up.svg";
import plusIcon from "../assets/div.whyus__expand.svg";
import image from "../assets/DesktopBlue.svg"
import minusIcon from "../assets/minusIcon.svg";
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import serviceIcon from '../assets/Services.svg';
import arrowDown from "../assets/ArrowDown.svg";
import influencer from "../assets/influencer.svg";
import sms from "../assets/sms.svg";
import onlineRep from "../assets/online.svg";
import cro from "../assets/cro.svg";
import analysis from "../assets/analysis.svg";
import marketing from "../assets/marketing.svg";

  

const ServicesPage = () => {
  const [openAnswers, setOpenAnswers] = useState([false, false, false]);
  const sidecutRef = useRef(null); // Create a ref for the sidecut image
  const serviceName = "Pay-Per-Click-Advertising";
const serviceName1 = "Email and SMS Marketing";
const serviceName2 = "Influencer Marketing";
const serviceName3 = "Conversion Rate Optimization";
const serviceName4 = "Online Reputation Management";
const serviceName5 = "Customer Experience Strategy";
const serviceName6 = "Marketing Consultation and Strategy";
const serviceName7 = "Analytics and Data Analysis";

const handleSidecutClick = () => {
  if (sidecutRef.current) {
    const yOffset = -60; // Adjust this value based on your layout
    const y = sidecutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};


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
    <div className="w-100 img-container position-relative overflow-x-hidden">
      <div className="img-overlay-7 position-absolute z-0">
      <img src={image} alt="" className="" />
    </div>
    <div className="img-overlay position-absolute" style={{ top: "5%", right: "45%", transform: 'rotate(260deg)' }}>
          <img src={image} alt="" className="" />
        </div>
      <div className="content-wrapper ">
        <Navbar/>
        <div className="header-container d-flex flex-column  justify-content-center align-items-center">
          <h1 className=" p-4 main-heading text-light-bg font-7">
            Your biggest business challenges.{" "}
            <span style={{ color: "var(--main-text-color)" }}>Solved.</span>{" "}
          </h1>
          <div className="services-container gallery d-flex gap-1 mb-lg-5 marginTop-0">
        <div className="cards d-flex flex-nowrap w-100 ">
          
        <Link to={`/service/${encodeURIComponent(serviceName)}`} className="service-box d-flex justify-content-between flex-column" style={{ textDecoration: 'none'}}>
            <span className="d-flex justify-content-between">
              
              <img src={forecast} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Pay-Per-Click Advertising (PPC)

              </p>
              </div>
        </Link>

        <Link to={`/service/${encodeURIComponent(serviceName1)}`} className="service-box  d-flex justify-content-between flex-column" style={{ textDecoration: 'none'}}>
            <span className="d-flex justify-content-between">
              
              <img src={sms} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Email and SMS Marketing
              </p>
              </div>
          </Link>

          <Link to={`/service/${encodeURIComponent(serviceName2)}`} className="service-box  d-flex justify-content-between flex-column" style={{ textDecoration: 'none'}}>
            <span className="d-flex justify-content-between">
              
              <img src={influencer} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Influencer Marketing


              </p>
              </div>
          </Link>

          <Link to={`/service/${encodeURIComponent(serviceName3)}`} className="service-box  d-flex justify-content-between flex-column" style={{ textDecoration: 'none'}}>
            <span className="d-flex justify-content-between">
              
              <img src={cro} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Conversion Rate Optimization (CRO)

              </p>
              </div>
              </Link>   

        </div>
        <img src={serviceIcon} alt="serviceIcon" className=""  style={{ 
          position: "absolute",
          zIndex: 998,
          left: '11%',
          top: '-2px',
      
 }}/>
  <img
    src={arrowDown}
    alt="arrowDown"
    className=" position-absolute bottom-30 z-3"
    style={{right: "-1px", cursor: "pointer"}}
    onClick={handleSidecutClick}
    
  />
      </div>
      
      <div className="services-container gallery d-flex gap-1 mb-lg-5 marginTop-0">
        <div className="cards d-flex flex-nowrap w-100 ">
        <Link to={`/service/${encodeURIComponent(serviceName4)}`} className="service-box  d-flex justify-content-between flex-column" style={{ textDecoration: 'none'}}>
            <span className="d-flex justify-content-between">
              
              <img src={onlineRep} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium fw-medium" style={{color: 'var(--text-color)'}}>
              Online Reputation Management

              </p>
              </div>
          </Link>

          <Link to={`/service/${encodeURIComponent(serviceName5)}`} className="service-box  d-flex justify-content-between flex-column" style={{ textDecoration: 'none'}}>
            <span className="d-flex justify-content-between">
              
              <img src={SVG} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Customer Experience (CX) Strategy


              </p>
              </div>
              </Link>

              <Link to={`/service/${encodeURIComponent(serviceName6)}`} className="service-box  d-flex justify-content-between flex-column" style={{ textDecoration: 'none'}}>
            <span className="d-flex justify-content-between">
              
              <img src={marketing} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Marketing Consultation and Strategy

              </p>
              </div>
              </Link>

              <Link to={`/service/${encodeURIComponent(serviceName7)}`} className="service-box  d-flex justify-content-between flex-column" style={{ textDecoration: 'none'}}>
            <span className="d-flex justify-content-between">
              
              <img src={analysis} className="" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g opacity="0.16" clip-path="url(#clip0_1_50)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
                    fill="#DCEFD8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_50">
                    <rect
                      width="16.19"
                      height="16.18"
                      fill="white"
                      transform="translate(0.22995 0.0200195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="content">
              <p className="p-color font-2 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>
              Analytics and Data Analysis



              </p>
              </div>
              </Link>
         
        
        </div>
      </div>
     
        </div>
        <div
        ref={sidecutRef}
          className="service-box-container  d-flex justify-content-center d-flex flex-column align-items-center"
          style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
        >
          <h1 className="text-light-bg mb-4">
            Not seeing what you are looking for?
          </h1>
          <div
            className="svg-icon d-flex"
            style={{
              padding: "0.9rem 1.3rem",
              marginLeft: "1rem",
              fontSize: "1.2rem",
              fontWeight: "500",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--main-text-color)",
              border: "none",
              borderRadius: "3rem",
              cursor: "pointer", // Fix the typo here
              transition: "background-color 0.3s ease",
              boxSizing: "border-box", // Fix the typo here
              gap: "0.9rem",
            }}
          >
            Request Service
            <span
              style={{
                borderRadius: "50%", // Make it a circle
                background: "#262D29",
                display: "flex",
                width: "10px",
                height: "10px",
                padding: "10.82px 12.46px 10.81px 12.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></span>
          </div>
        </div>

        <div className=" d-flex  rating-container z-3 position-relative " style={{paddingTop: '10%', paddingBottom: '10%', backgroundColor: "var(--secondary-bg)" }} >
       {/* <div className="img-overlay-3 position-absolute right-0" >
      <img src={image} alt="" className="h-75 w-75 " />
    </div> */}
        <div className="heading faq-heading sticky-top text-dark col-md-6 col-12 z-3 fw-medium mb-sm-4" style={{color: 'var(--text-color)', fontSize: "3rem",  zIndex: "1000"}}>
            Frequently Asked Questions
        </div>
    <div className="frequent-que col-md-6 col-12 z-3">
      <div className="faq-containers">
        {questionAnswers.map((qa, index) => (
          <div key={index} className="mb-4 faq-padding green-border">
            <div
              className={`question faq-question mb-0 text d-flex justify-content-between text-dark align-items-center ${openAnswers[index] ? 'open' : ''}`}
              id={`question${index + 1}`}
              onClick={() => toggleAnswer(index)}
            >
              
                
              
              <span className="span" style={{ zIndex: 1, fontSize: "1.6rem"}}>
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
<Contact/>
<Footer/>
      </div>
    </div>
  );
};

export default ServicesPage;
