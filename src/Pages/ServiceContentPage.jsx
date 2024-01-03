import React, {useState, useRef, useEffect} from "react";
import serviceData from './ServiceData.json'; 
import { useParams, Link} from 'react-router-dom';
import Services from "../Components/Services";
import Navbar from "../Components/Navbar";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png";
import blog3 from "../assets/blog3.png";
import BlogContent from "../Components/BlogContent";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import plusIcon from "../assets/div.whyus__expand.svg";
import image from "../assets/Section.jpg.png";
import minusIcon from "../assets/minusIcon.svg";
import tick from "../assets/tick.svg";
import value1 from "../assets/carbon_data-1.svg";
import value2 from "../assets/carbon_result-old.svg";
import value3 from "../assets/carbon_text-link-analysis.svg";
import value4 from "../assets/fluent_person-feedback-20-regular.svg";
import value5 from "../assets/fluent_person-feedback-20-regular.svg";
import value6 from "../assets/iconamoon_profile-circle-thin.svg";
import value7 from "../assets/la_tools.svg";
import value8 from "../assets/material-symbols-light_business-center-outline.svg";
import value9 from "../assets/material-symbols-light_manage-search-rounded.svg";
import value10 from "../assets/ph_record-thin.svg";
import value11 from "../assets/tabler_wave-triangle.svg";
import value12 from "../assets/Vector (2).svg";

const ServiceContentPage = () => {
     const { serviceName } = useParams();
     const [openAnswers, setOpenAnswers] = useState([false, false, false]);
     const [imageIndex, setImageIndex] = useState(0);

     const toggleAnswer = (index) => {
       setOpenAnswers((prevOpenAnswers) => {
         const updatedAnswers = [...prevOpenAnswers];
         updatedAnswers[index] = !updatedAnswers[index];
         return updatedAnswers;
       });
     };
   

    // Find the selected service data from the JSON
    const selectedService = serviceData.services.find(service => service.headline === serviceName);
    console.log(selectedService.whyUs.image, "image");
    console.log(selectedService.whyYouNeedTheService)
    if (!selectedService) {
      return <div>Service not found</div>;
    }

    const imageArray = {
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        value10,
        value11,
        value12
      };


  return (
    <div className="w-100 img-container position-relative overflow-x-hidden">
      <Navbar/>
        <div className="header-container d-flex flex-column  gap-1 mb-lg-5 mt-5">

            <div className="service-detailedContent" style={{marginLeft: "5%", marginRight: "15%", padding: "2%"}}>
            <div
          className="btn mt-md-4"
          style={{ color: "var(--main-text-color)", cursor: "initial" }}
        >
          <span style={{color: "var(--secondary-text-color)", fontWeight: "500"}}>Services / </span>
          {selectedService.headline}
        </div>

        <h1 className=" main-heading text-light-bg font-7">{selectedService.heading}</h1>
        <p className="p-color font-1 flex-end market-headline fw-medium" style={{color: 'var(--text-color)'}}>{selectedService.subheading}</p>
            </div>

            <div className="service-needs d-flex  rating-container z-3 position-relative justify-content-between" style={{paddingTop: '10%', paddingBottom: '10%', backgroundColor: "var(--secondary-bg)" }}>
            <div className="heading faq-heading sticky-top text-dark col-md-6 col-12 z-3 fw-medium mb-sm-4" style={{color: 'var(--text-color)', fontSize: "3rem",  zIndex: "1000"}}>
            Why you need the service
        </div>
        <ul className="text text-dark align-items-center" style={{ zIndex: 1, fontSize: "1.6rem", padding: 0, listStyleType: "none" }}>
        {selectedService.whyYouNeedTheService && selectedService.whyYouNeedTheService.map((reason, index) => (
  <li className="mb-4" key={index} style={{ listStyle: 'none', position: 'relative', paddingLeft: '30px' }}>
    <img src={tick} alt="" style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', marginRight: '10px' }} />
    {reason}
  </li>
))}

</ul>

            </div>
    
            <div class="container-small">
  <div class="single__wrapper">
    <div class="column-50 flex-vertical is-single-process">
    <div class="spacing-container-04 hide-on-mobile"></div>
      <div class="single_process-sticky-heading ">
        <h2 style={{color:'white'}}class="line-height-1 h3 is-process">The Process</h2>
        <div class="p-body lighter opacity-05 w-dyn-bind-empty"></div>
      </div>
    </div>
    <div class="column-50 flex-vertical">
      <div class="spacing-container-04 hide-on-mobile"></div>
      <div class="spacing-container-04 hide-on-mobile"></div>
      <div className="single-process-wrap" >
      {selectedService.theProcess && selectedService.theProcess.map((process, index) => (
  <div key={index} className="single-service">
    <div className="single__process-item-wrapper" style={{ backgroundColor: "var(--custom-btn)" }}>
      <div className="single__process-number-wrap text-accent">
        <div className="h3" style={{ color: "var(--main-text-color)" }}>{index + 1}</div>
      </div>
      <div className="single__proces-content-holder">
        <h3 className="p-leading is-bigger text-balance text-light">{process.step}</h3>
        <div className="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
          {process.description && process.description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
      <div className="card-hider" style={{ backgroundColor: 'blue', willChange: 'opacity', opacity: '0' }}></div>
    </div>
  </div>
))}

            </div>
    </div>
  </div>
</div>


<div
      className="d-flex flex-column text-light-bg gap-4"
      style={{ padding: "5%" }}
    >
      <h1 className="m-md-1 main-heading" style={{ fontSize: "5rem" }}>
        Why Us?
      </h1>

      <div className="row d-flex justify-content-center align-items-baseline ">
      {selectedService.whyUs && selectedService.whyUs.map((value, index) => (
  <div key={index} className="col-6 col-lg-3 gap-3 d-flex flex-column">

      <img
        src={imageArray[imageIndex]}
        alt=""
        style={{ width: "30%" }}
      />
    
    <div
      className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
      style={{ left: "50%" }}
    ></div>
    <h4>{value.title}</h4>
    <p>{value.description}</p>
  </div>
))}

      </div>
    </div>

    <div className=" service-needs d-flex  rating-container z-3 position-relative justify-content-between " style={{ marginTop: '10%', marginBottom: '10%', width: '100%', backgroundColor: '#D7E0EE', position: 'absolute', zIndex: '2', borderRadius: '24px' }}>
            <div className="img-overlay position-absolute" style={{ top: "-10%", right: "86%", transform: 'rotate(15deg)' }}>
            </div>

            <div style={{backgroundColor:'#D7E0EE'}}class="page-spacing__large bg--2 radius-36 logo-changer z-index-5 is-success">
                <div style={{backgroundColor:'#D7E0EE'}}class="container-small">
                    <div class="single__wrapper">
                        <div class="column-50 flex-vertical is-single-success">
                            <div data-w-id="4d016f08-20f0-2fb1-9562-59519628945c" class="success-block is--1" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: '1'}}>
                                <h2 class="h2 is-smaller is-success-story" style={{color: "var(--bg-color)"}}>Success <br></br>Story</h2>
                            </div>
                            <div data-w-id="09d4f82f-29a1-3d9b-2777-b9f51644597c" class="success-block is--2" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: '1', backgroundColor: "var(--bg-color)"}}>
                                <h3 class="h4 line-height-1-1">The<br></br>Challenge</h3>
                                <div class="p-body-normal opacity-06">
                                    {selectedService.successStory.challenge}
                                </div>
                            </div>
                        </div>
                        <div class="column-50 flex-vertical is-single-success">
                            <div class="spacing-container-04 hide-on-mobile"></div>
                            <div data-w-id="edc211ce-cde1-7a4e-bf78-b9ac7eaaac3b p-3" class="success-block is--3" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: '1'}}>
                                <h3 class="h4 line-height-1-1">The<br></br>Solution</h3>
                                <div class="p-body-normal opacity-06">
                                {selectedService.successStory.solution}
                                </div>
                            </div>
                            <div data-w-id="96b38126-1429-00fa-0d22-0c2e96550388" class="success-block is--4" style={{backgroundColor:'#8AABC3',transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: '1'}}>
                                <h3 style={{color:'#27292B'}}class="h4 line-height-1-1">
                                    The<br></br>
                                    Result</h3>
                                <div class="p-body-normal opacity-06 text-balance">
                                {selectedService.successStory.result}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div
          className="service-box-container  d-flex justify-content-center d-flex flex-column align-items-center"
          style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
        >
          <h1 className="text-light-bg mb-4 text-align-end d-flex align-items-end flex-column">
          {selectedService && selectedService.contact && (
  selectedService.contact.split('\n').map((text, index) => (
    <p key={index} style={{ margin: 0, padding: 0 }}>{text}</p>
  ))
)}

          </h1>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
          Get in touch
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
          </Link>
        </div>




        </div>


        <Services title="More Services" displayCard={false} />


        <div
      className=" z-3 position-relative bg-white rating-container gap-4 p-md-5  "
      style={{}}
    >
      <div className="d-flex justify-content-center align-items-center">
        <h1
          className="p-3 blog-headline "
          style={{
            fontSize: "5rem",
            color: "var( --primary-text)",
          }}
        >
          Related resources
        </h1>
      </div>
      <div className="cols blog-sm d-flex gap-4 justify-content-center align-items-center ">
      <div className="col-12 col-md-4 col-lg-3 d-flex flex-column">
      <Link   to={{
                  pathname: "/blogs/1"
                }}style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="">
          <img src={blog} alt="img blog-img-sm" className=" blog w-100" />
          <div className="d-flex justify-content-between">
            <p
              className="pt-2"
              style={{ color: "var(--text-color)", fontSize: "1rem" }}
            >
              Blog
            </p>
            <p
              className="pt-2"
              style={{ color: "var(--text-color)", fontSize: "1rem" }}
            >
              October 23, 2023
            </p>
          </div>
          <h4 style={{ color: "var(--primary-text)", fontSize: "1.75rem" }}>
            Startup Market Sizing: Founder's Guide to TAM SAM SOM
          </h4>
          <div
            className="btn mt-md-4"
            style={{ color: "var(--text-color)", cursor: "pointer" }}
          >
            Pay-Per-Click Advertising (PPC)
          </div>
        </div>
      </Link>
    </div>

    <div className="col-12 col-md-4 col-lg-3 d-flex flex-column ">
  <Link to={{ pathname: "/blogs/2" }} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div>
      <img src={blog2} alt="img blog-img-sm" className=" blog w-100" />
      <div className="d-flex justify-content-between">
        <p
          className="pt-2"
          style={{ color: "var(--text-color)", fontSize: "1rem" }}
        >
          Blog
        </p>
        <p
          className="pt-2"
          style={{ color: "var(--text-color)", fontSize: "1rem" }}
        >
          October 2, 2023
        </p>
      </div>
      <h4 style={{ color: "var(--primary-text)", fontSize: "1.75rem" }}>
        7 Simple Steps to Ace Your Startup Market Research
      </h4>
      <div className="btn mt-md-4" style={{ color: "var(--text-color)", cursor: "initial" }}>
        Email and SMS Marketing
      </div>
    </div>
  </Link>
</div>


<div className="col-12 col-md-4 col-lg-3 d-flex flex-column ">
  <Link to={{ pathname: "/blogs/3" }} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="">
      <img src={blog3} alt="img blog-img-sm" className=" blog w-100" />
      <div className="d-flex justify-content-between">
        <p
          className="pt-2"
          style={{ color: "var( --text-color)", fontSize: "1rem" }}
        >
          Blog
        </p>
        <p
          className="pt-2"
          style={{ color: "var( --text-color)", fontSize: "1rem" }}
        >
          September 27, 2023
        </p>
      </div>
      <h4 style={{ color: "var( --primary-text)", fontSize: "1.75rem" }}>
        Research and Planning for a New Business in 4 Steps
      </h4>
      <div
        className="btn mt-md-4"
        style={{ color: "var(--text-color)", cursor: "initial" }}
      >
        Influencer Marketing
      </div>
    </div>
  </Link>
</div>

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
  {selectedService && selectedService.questionAnswers ? (
    selectedService.questionAnswers.map((qa, index) => (
      <div key={index} className="mb-4 faq-padding green-border">
        <div
          className={`question faq-question mb-0 text d-flex justify-content-between text-dark align-items-center ${openAnswers[index] ? 'open' : ''}`}
          id={`question${index + 1}`}
          onClick={() => toggleAnswer(index)}
        >
          <span className="" style={{ zIndex: 1, fontSize: "1.6rem"}}>
            {` ${qa.question}`}
          </span>
          <img src={openAnswers[index] ? minusIcon : plusIcon} alt="" style={{ height: '100%', width: "6%" }}/>
        </div>
        <div className="answer faq-answer text border-none" id={`answer${index + 1}`} style={{ color: 'var(--text-color)', fontSize: "1.25rem", display: openAnswers[index] ? 'block' : 'none' }}>
          {qa.answer}
        </div>
      </div>
    ))
  ) : (
    <p>No questions and answers available for the selected service.</p>
  )}
  <div className="green-border d-flex justify-content-center pt-4"></div>
</div>

    </div>
   
    </div>

    <Contact/>
    <Footer/>

  </div>
  )
}

export default ServiceContentPage