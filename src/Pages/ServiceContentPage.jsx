import React, { useState, useRef, useEffect } from "react";
import serviceData from "./ServiceData.json";
import { useParams, Link } from "react-router-dom";
import Services from "../Components/Services";
import Navbar from "../Components/Navbar";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png";
import blog3 from "../assets/blog3.png";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import plusIcon from "../assets/div.whyus__expand.svg";
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
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
const ServiceContentPage = () => {
  const { serviceName } = useParams();
  const [openAnswers, setOpenAnswers] = useState([false, false, false]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const toggleAnswer = (index) => {
    setOpenAnswers((prevOpenAnswers) => {
      const updatedAnswers = [...prevOpenAnswers];
      updatedAnswers[index] = !updatedAnswers[index];
      return updatedAnswers;
    });
  };

  // Find the selected service data from the JSON
  const selectedService = serviceData.services.find(
    (service) => service.headline === serviceName
  );
  console.log(selectedService.whyUs.image, "image");
  console.log(selectedService.whyYouNeedTheService);
  if (!selectedService) {
    return <div>Service not found</div>;
  }

  const imageArray = [
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
    value12,
  ];

  return (
    <div className="w-100 img-container position-relative overflow-x-hidden">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="header-container d-flex flex-column  gap-1 mb-lg-5 mt-4rem noPaddingAtMobile">
            <div
              className="service-detailedContent"
              style={{
                marginLeft: "5%",
                marginRight: "5%",
                padding: "2%",
                marginBottom: "1rem",
              }}
            >
              <Link
                to={"/services"}
                className="btn mt-md-4 button-bigt"
                style={{fontFamily: "MyCustomFont", color: "var(--main-text-color)", cursor: "pointer" }}
              >
                <span
                  style={{
                    color: "var(--secondary-text-color)",
                    fontWeight: "500",
                    fontFamily: "MyCustomFont",
                  }}
                >
                  Services /{" "}
                </span>
                {selectedService.headline}
              </Link>

              <h1 className=" main-heading text-light-bg font-5 slide-up mt-4" style={{fontFamily: "MyCustomFont",}}>
                {selectedService.heading}
              </h1>
              <p
                className="p-color font-1 flex-end market-headline"
                style={{fontFamily: "MyCustomFont", color: "var(--text-color)" }}
              >
                {selectedService.subheading}
              </p>
            </div>
            {/* -------------------------------------------- */}
            <div
              className="service-needs d-flex  rating-container z-3 position-relative justify-content-between noMarginAtMobile "
              style={{
                paddingTop: "10%",
                paddingBottom: "10%",
                backgroundColor: "var(--secondary-bg)",
                paddingInline: "10%",
              }}
            >
              <div
                className="heading faq-heading sticky-top col-md-6 col-12 z-3 fw-medium mb-sm-4  "
                style={{
                  color: "var(--background-color)",
                  fontSize: "4.5rem",
                  fontFamily: "MyCustomFont",
                  zIndex: "1000",
                  lineHeight: "1",
                  paddingTop: "1rem",
                }}
              >
                Why you need the service
              </div>
              <ul
                className="text align-items-center"
                style={{
                  zIndex: 1,
                  fontSize: "1.25rem",
                  padding: 0,
                  listStyleType: "none",
                  color: "var(--text-color)",
                }}
              >
                {selectedService.whyYouNeedTheService &&
                  selectedService.whyYouNeedTheService.map((reason, index) => (
                    <li
                      className="mb-4"
                      key={index}
                      style={{
                        listStyle: "none",
                        position: "relative",
                        paddingLeft: "30px",
                        color: "darkslategray",
                        fontFamily: "MyCustomFont",
                      }}
                    >
                      <img
                        src={tick}
                        alt=""
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                      />
                      {reason}
                    </li>
                  ))}
              </ul>
            </div>
            {/* ---------------------------------------------- */}
            <div class="container-small" >
              <div
                class="single__wrapper"
              
              >
                <div class="column-50 flex-vertical is-single-process toc-column position-sticky top-0">
                  <div class="spacing-container-04 hide-on-mobile"></div>
                  <div class="single_process-sticky-heading ">
                    <h2
                      style={{ fontFamily: "MyCustomFont",color: "white", fontSize: "4rem" }}
                      class="line-height-1 h3 is-process"
                    >
                      The Process
                    </h2>
                    <div class="p-body lighter opacity-05 w-dyn-bind-empty"></div>
                  </div>
                </div>
                <div class="column-50 flex-vertical ">
                  <div class="spacing-container-04 hide-on-mobile"></div>
                  <div class="spacing-container-04 hide-on-mobile"></div>
                  <div
                    className="single-process-wrap"
                    style={{fontFamily: "MyCustomFont", paddingBottom: "20%",  }}
                  >
                    {selectedService.theProcess &&
                      selectedService.theProcess.map((process, index) => (
                        <div key={index} className="single-service toc-column position-sticky top-0">
                          <div
                            className="single__process-item-wrapper"
                            style={{fontFamily: "MyCustomFont", backgroundColor: "var(--custom-btn)" }}
                          >
                            <div className="single__process-number-wrap text-accent">
                              <div
                                className="h3"
                                style={{
                                  color: "var(--main-text-color)",
                                  fontSize: "2.63rem",
                                  fontFamily: "MyCustomFont",
                                }}
                              >
                                0{index + 1}
                              </div>
                            </div>
                            <div className="single__proces-content-holder">
                              <h3
                                className="p-leading is-bigger text-balance text-light"
                                style={{fontFamily: "MyCustomFont", fontSize: "1.7rem" }}
                              >
                                {process.step}
                              </h3>
                              <div
                                className="p-body-normal line-height-1-2 lighter opacity-05 text-balance"
                                style={{ fontFamily: "MyCustomFont",fontSize: "1.13rem" }}
                              >
                                {process.description &&
                                  process.description
                                    .split("\n")
                                    .map((line, i) => <p key={i}>{line}</p>)}
                              </div>
                            </div>
                            <div
                              className="card-hider"
                              style={{
                                backgroundColor: "blue",
                                willChange: "opacity",
                                opacity: "0",
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            {/* whyus------------------------------ */}
            <div
              className="d-flex flex-column text-light-bg gap-4 "
              style={{ padding: "5%" }}
            >
              <h2 className="m-md-1 main-heading" style={{ fontSize: "5rem" }}>
                Why Us?
              </h2>

              <div className="row d-flex justify-content-center align-items-baseline ">
                {selectedService.whyUs &&
                  selectedService.whyUs.map((value, index) => (
                    <div
                      key={index}
                      className="col-6 col-lg-3 gap-3 d-flex flex-column"
                    >
                      <motion.img
                        src={imageArray[index]}
                        alt=""
                        style={{
                          width: "30%",
                          transitionDuration: "100ms",
                          transitionBehavior: "normal",
                        }}
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                      />

                      <div
                        className="green-border-blur d-flex justify-content-center pt-0 z-3 position-sticky"
                        style={{ left: "50%" }}
                      ></div>
                      <motion.h4
                        style={{
                          fontSize: "1.75rem",
                          transitionDuration: "100ms",
                          transitionBehavior: "normal",
                        }}
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                      >
                        {value.title}
                      </motion.h4>
                      <p style={{ color: "var(--text-color)" }}>
                        {value.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            {/* ------------------------------- */}
            <div
              className=" service-needs d-flex  rating-container z-3 position-relative justify-content-between noMarginAtMobile"
              style={{
                marginTop: "10%",
                marginBottom: "10%",
                width: "100%",
                backgroundColor: "#D7E0EE",
                position: "absolute",
                zIndex: "2",
                borderRadius: "24px",
              }}
            >
              <div
                className="img-overlay position-absolute"
                style={{
                  top: "-10%",
                  right: "86%",
                  transform: "rotate(15deg)",
                }}
              ></div>

              <div
                style={{ backgroundColor: "#D7E0EE", padding: "2%" }}
                class="page-spacing__large bg--2 radius-36 logo-changer z-index-5 is-success"
              >
                <div style={{ backgroundColor: "#D7E0EE" }} class="">
                  <div class="single__wrapper">
                    <div class="column-50 flex-vertical is-single-success">
                      <motion.div
                        data-w-id="4d016f08-20f0-2fb1-9562-59519628945c"
                        class="success-block is--1"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: "1",
                          transitionDuration: "200ms",
                          transitionBehavior: "normal",
                        }}
                        initial={{ y: "50%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                      >
                        <h2
                          class="h2 is-smaller is-success-story"
                          style={{ fontFamily:"MyCustomFont", color: "var(--bg-color)" }}
                        >
                          Success <br></br>Story
                        </h2>
                      </motion.div>

                      <motion.div
                        data-w-id="09d4f82f-29a1-3d9b-2777-b9f51644597c"
                        class="success-block is--2"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: "1",
                          backgroundColor: "var(--bg-color)",
                          transitionDuration: "200ms",
                          transitionBehavior: "normal",
                        }}
                        initial={{ y: "50%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                      >
                        <h3
                          class="h4 line-height-1-1"
                          style={{ fontFamily:"MyCustomFont",fontSize: "2rem" }}
                        >
                          The<br></br>Challenge
                        </h3>
                        <div style={{fontFamily:"MyCustomFont",}} class="p-body-normal opacity-06">
                          {selectedService.successStory.challenge}
                        </div>
                      </motion.div>
                    </div>

                    <div class="column-50 flex-vertical is-single-success">
                      <div class="spacing-container-04 hide-on-mobile"></div>
                      <motion.div
                        data-w-id="edc211ce-cde1-7a4e-bf78-b9ac7eaaac3b p-3"
                        class="success-block is--3"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: "1",
                          backgroundColor: "white",
                          transitionDuration: "200ms",
                          transitionBehavior: "normal",
                        }}
                        initial={{ y: "50%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                      >
                        <h3
                          class="h4 line-height-1-1"
                          style={{ fontFamily:"MyCustomFont",fontSize: "2rem" }}
                        >
                          The<br></br>Solution
                        </h3>
                        <div style={{fontFamily:"MyCustomFont",}} class="p-body-normal opacity-06">
                          {selectedService.successStory.solution}
                        </div>
                      </motion.div>

                      <motion.div
                        data-w-id="96b38126-1429-00fa-0d22-0c2e96550388"
                        class="success-block is--4"
                        style={{
                          backgroundColor: "#8AABC3",
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: "1",
                          backgroundColor: "#8aabc3",
                          transitionDuration: "200ms",
                          transitionBehavior: "normal",
                        }}
                        initial={{ y: "50%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                      >
                        <h3
                          style={{ fontFamily:"MyCustomFont",color: "#27292B", fontSize: "2rem" }}
                          class="h4 line-height-1-1"
                        >
                          The<br></br>
                          Result
                        </h3>
                        <div style={{fontFamily:"MyCustomFont",}} class="p-body-normal opacity-06 text-balance">
                          {selectedService.successStory.result}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* -------------------------------- */}
            <div
              className="service-box-container  d-flex justify-content-center d-flex flex-column align-items-center"
              style={{
                paddingTop: "10rem",
                paddingBottom: "10rem",
                paddingInline: "3%",
              }}
            >
              <h1 style={{fontFamily:"MyCustomFont",}} className="text-light-bg mb-4 text-align-end d-flex align-items-end flex-column">
                {selectedService &&
                  selectedService.contact &&
                  selectedService.contact.split("\n").map((text, index) => (
                    <p
                      className="text-light-bg"
                      key={index}
                      style={{fontFamily:"MyCustomFont", margin: 0, padding: 0 }}
                    >
                      {text}
                    </p>
                  ))}
              </h1>
              <Link
                to="/contact"
                style={{fontFamily:"MyCustomFont", textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="svg-icon d-flex  getInTouch"
                  style={{
                    padding: "0.6rem 1rem",
                    marginLeft: "1rem",
                    fontFamily:"MyCustomFont",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "var(--main-text-color)",
                    border: "none",
                    borderRadius: "3rem",
                    cursor: "pointer", // Fix the typo here
                    boxSizing: "border-box", // Fix the typo here
                    gap: "0.9rem",
                    height: "50px",
                  }}
                >
                  <div className="get-div">
                    <p className="get-div-p1" style={{fontFamily:"MyCustomFont", margin: 0, padding: 0 }}>
                      {" "}
                      Get in touch
                    </p>
                    <p className="get-div-p2" style={{fontFamily:"MyCustomFont", margin: 0, padding: 0 }}>
                      {" "}
                      Don't be shy
                    </p>
                  </div>
                  <span
                    className="get-div-span"
                    style={{
                      borderRadius: "50%", // Make it a circle
                      background: "#262D29",
                      display: "flex",
                      width: " 20px",
                      height: "20px",
                      padding: "",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                      color: "white",
                    }}
                  >
                    <img src={arrow} className="get-div-img" alt="img" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          {/* ------------------------------------ */}
          <div style={{fontFamily:"MyCustomFont", paddingLeft: "2%" }}>
            <Services title="More Services" displayCard={false} />
          </div>
          {/* -------------------------------------------- */}
          <div
            className="z-3 position-relative bg-white rating-container gap-4 "
            style={{
              paddingLeft: "7%",
              paddingRight: "7%",
              paddingTop: "7%",
              paddingBottom: "2%",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h1
                className="pt-3 pb-3 blog-headline "
                style={{
                  fontFamily:"MyCustomFont",
                  fontSize: "5rem",
                  color: "var( --primary-text)",
                }}
              >
                Related Resources
              </h1>
              <div
                className="arrow-sm blogsOnLandingPage-arrow2"
                style={{
                  borderRadius: "50%", // Make it a circle
                  display: "flex",
                  width: "64.75px",
                  height: "64.75px",
                  padding: "17.82px 19.46px 17.81px 19.42px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={arrow} // Replace with the path to your image
                  alt="Circle Image"
                  style={{
                    width: "65%", // Ensure the image takes the full width of the circle
                    height: "100%", // Ensure the image takes the full height of the circle
                    rotate: "180deg",
                  }}
                />
              </div>
            </div>
            <div className="cols blog-sm d-flex gap-4 justify-content-center align-items-start ">
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column blogsOnLandingPage">
                <Link
                  to={{
                    pathname: "/blogs/1",
                  }}
                  style={{fontFamily:"MyCustomFont", textDecoration: "none", color: "inherit" }}
                >
                  <div className="">
                    <div className="blogsOnLandingPage-imgDiv">
                      <img
                        src={blog}
                        alt="img blog-img-sm"
                        className=" blog w-100"
                      />
                      <h6 style={{fontFamily:"MyCustomFont",}} >Read more</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p
                        className="pt-2"
                        style={{fontFamily:"MyCustomFont", color: "var(--text-color)", fontSize: "1rem" }}
                      >
                        Blog
                      </p>
                      <p
                        className="pt-2"
                        style={{fontFamily:"MyCustomFont", color: "var(--text-color)", fontSize: "1rem" }}
                      >
                        October 23, 2023
                      </p>
                    </div>
                    <h4
                      style={{
                        color: "var(--primary-text)",
                        fontSize: "1.75rem",
                        fontFamily:"MyCustomFont",
                      }}
                    >
                      Startup Market Sizing: Founder's Guide to TAM SAM SOM
                    </h4>
                    <div
                      className="btn mt-md-4"
                      style={{ fontFamily:"MyCustomFont",color: "var(--text-color)", cursor: "pointer" }}
                    >
                      Pay-Per-Click Advertising (PPC)
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column blogsOnLandingPage">
                <Link
                  to={{ pathname: "/blogs/2" }}
                  style={{fontFamily:"MyCustomFont", textDecoration: "none", color: "inherit" }}
                >
                  <div>
                    <div className="blogsOnLandingPage-imgDiv">
                      <img
                        src={blog2}
                        alt="img blog-img-sm"
                        className=" blog w-100"
                      />
                      <h6 style={{fontFamily:"MyCustomFont",}}>Read more</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p
                        className="pt-2"
                        style={{ fontFamily:"MyCustomFont",color: "var(--text-color)", fontSize: "1rem" }}
                      >
                        Blog
                      </p>
                      <p
                        className="pt-2"
                        style={{fontFamily:"MyCustomFont", color: "var(--text-color)", fontSize: "1rem" }}
                      >
                        October 2, 2023
                      </p>
                    </div>
                    <h4
                      style={{
                        color: "var(--primary-text)",
                        fontSize: "1.75rem",
                        fontFamily:"MyCustomFont",
                      }}
                    >
                      7 Simple Steps to Ace Your Startup Market Research
                    </h4>
                    <div
                      className="btn mt-md-4"
                      style={{ fontFamily:"MyCustomFont",color: "var(--text-color)", cursor: "initial" }}
                    >
                      Email and SMS Marketing
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column blogsOnLandingPage">
                <Link
                  to={{ pathname: "/blogs/3" }}
                  style={{ fontFamily:"MyCustomFont",textDecoration: "none", color: "inherit" }}
                >
                  <div className="">
                    <div className="blogsOnLandingPage-imgDiv">
                      <img
                        src={blog3}
                        alt="img blog-img-sm"
                        className=" blog w-100"
                      />
                      <h6>Read more</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p
                        className="pt-2"
                        style={{
                          fontFamily:"MyCustomFont",
                          color: "var( --text-color)",
                          fontSize: "1rem",
                        }}
                      >
                        Blog
                      </p>
                      <p
                        className="pt-2"
                        style={{
                          fontFamily:"MyCustomFont",
                          color: "var( --text-color)",
                          fontSize: "1rem",
                        }}
                      >
                        September 27, 2023
                      </p>
                    </div>
                    <h4
                      style={{
                        fontFamily:"MyCustomFont",
                        color: "var( --primary-text)",
                        fontSize: "1.75rem",
                      }}
                    >
                      Research and Planning for a New Business in 4 Steps
                    </h4>
                    <div
                      className="btn mt-md-4"
                      style={{fontFamily:"MyCustomFont", color: "var(--text-color)", cursor: "initial" }}
                    >
                      Influencer Marketing
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* <div
            className=" d-flex  rating-container z-3 position-relative "
            style={{
              padding: "10%",
              backgroundColor: "var(--secondary-bg)",
            }}
          >
            <div
              className="heading faq-heading sticky-top  col-md-6 col-12 z-3 fw-medium mb-sm-4"
              style={{
                fontFamily:"MyCustomFont",
                color: "var(--background-color)",
                fontSize: "4rem",
                zIndex: "1000",
                lineHeight: "1.2",
              }}
            >
              Frequently Asked Questions
            </div>
            <div className="frequent-que col-md-6 col-12 z-3 serviceContentPage-FAQ">
              <div className="faq-containers">
                {selectedService && selectedService.questionAnswers ? (
                  selectedService.questionAnswers.map((qa, index) => (
                    <Accordion title={qa.question} children={qa.answer} />
                  ))
                ) : (
                  <p style={{fontFamily:"MyCustomFont",}}>
                    No questions and answers available for the selected service.
                  </p>
                )}
                <div className="green-border d-flex justify-content-center pt-4"></div>
              </div>
            </div>
          </div> */}

            <div
              className=" d-flex  rating-container z-3 position-relative  "
              style={{
                paddingTop: "10%",
                paddingBottom: "10%",
                paddingLeft:"16%",
                paddingRight:"12%",
                backgroundColor: "var(--secondary-bg)",
                marginTop: "2%",
                marginBottom: "2%",
                marginInline: "1%"
              }}
            >
              
              <div
                className="heading faq-heading sticky-top col-md-6 col-12 z-3 fw-medium mb-sm-4 mt-4"
                style={{
                  color: "var(--background-color)",
                  fontSize: "4.9rem",
                  zIndex: "1000",
                  lineHeight: "1.1",
                  fontFamily:"MyCustomFont",
                  fontWeight:"600",
                  paddingRight:"10rem",
                  marginInline: "0%"
                }}
              >
                Frequently asked questions
              </div>
              <div className="frequent-que col-md-6 col-12 z-3">
                <div className="faq-containers">
             
                {selectedService && selectedService.questionAnswers ? (
                  selectedService.questionAnswers.map((qa, index) => (
                    <>
                    <div className="green-border-service d-flex justify-content-center "></div>
                    <Accordion title={qa.question} children={qa.answer} />
                    </>
                  ))
                ) : (
                  <p style={{fontFamily:"MyCustomFont",}}>
                    No questions and answers available for the selected service.
                  </p>
                )}
                  <div className="green-border-service d-flex justify-content-center pt-4"></div>
                </div>
              </div>
            </div>

        </>
      )}
      <Contact />
      <Footer />
    </div>
  );
};

export default ServiceContentPage;

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper mt-0">
      <div
        onClick={() => setOpen(!isOpen)}
        style={{fontFamily:"MyCustomFont", fontSize:"1.4em" ,color:'gray', fontWeight:"500", marginTop:"1.5rem", marginBottom:"2.5rem", letterSpacing:"-0.025rem" }}
        className={`accordion-title ${isOpen ? "open" : ""}`}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
