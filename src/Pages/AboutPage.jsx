import React, { useState, useRef } from "react";
import Services from "../Components/Services";
import SVG from "../assets/SVG.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import forecast from "../assets/arrow-up.svg";
import plusIcon from "../assets/div.whyus__expand.svg";
import image from "../assets/DesktopBlue.svg";
import minusIcon from "../assets/minusIcon.svg";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import WhyMarketeer from "../Components/WhyMarketeer";
import arrowDown from "../assets/ArrowDown.svg"
import aboutIcon from "../assets/About Us.svg";
import apostophy from "../assets/apostrophy.svg";
import akshita from "../assets/akshita.svg";
import value1 from "../assets/value1.svg";
import value2 from "../assets/value2.svg";
import value3 from "../assets/value3.svg";
import value4 from "../assets/value4.svg";

const AboutPage = () => {
   
const sidecutRef = useRef(null); // Create a ref for the sidecut image

const handleSidecutClick = () => {
  if (sidecutRef.current) {
    const yOffset = -60; // Adjust this value based on your layout
    const y = sidecutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};



  return (
    <div className="w-100 img-container position-relative overflow-x-hidden z-3">
         <div className="img-overlay-7 position-absolute z-0">
      <img src={image} alt="" className="" />
    </div>
    <div className="img-overlay position-absolute" style={{ top: "8%", right: "40%", transform: 'rotate(225deg)' }}>
          <img src={image} alt="" className="" />
        </div>
      <div className="content-wrapper z-3">
        <Navbar />
        <div className="header-container d-flex flex-column  justify-content-center align-items-center z-3">
        <img src={aboutIcon} alt="aboutIcon" className=""  style={{ 
          position: "absolute",
          zIndex: 999,
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
          <h1 className=" p-4 m-md-5 main-heading text-light-bg font-7">
          Charting a Bold Course for 1,000 Businesses to Enrich{" "}
            <span style={{ color: "var(--main-text-color)" }}>
              1 Billion Lives.
            </span>{" "}
          </h1>
          <WhyMarketeer
            pageTitle="Our Mission
            "
            pageContent="Building Bridges in the Digital World, At marketeers, we are driven by a vision to connect, empower, and transform. Inspired by the endless possibilities of the digital era, our mission is to guide entrepreneurs, businesses, and visionaries in navigating the digital landscape. We're not just about marketing; we're about creating a future where every digital interaction makes a difference, building a better, more connected world."
          />
        </div>

        <div
        ref={sidecutRef}
          className=" d-flex flex-column text-light-bg gap-4"
          style={{ padding: "5%" }}
        >
          <h1 className="m-md-1 main-heading" style={{ fontSize: "5rem" }}>
            Our Values
          </h1>

          <div className="row d-flex justify-content-center align-items-baseline ">
            <div className="col-6 col-lg-3 gap-3 d-flex flex-column">
              <img
                src={value1}
                alt=""
                style={{ width: "22%" }}
              />
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
              <h4>Integrity</h4>
              <p>"Commitment to Authenticity" - We believe in honesty and transparency, upholding the highest standards in all our endeavors.</p>
            </div>
            <div className="col-6 col-lg-3 gap-3 d-flex flex-column">
              <img
                src={value2}
                alt=""
                style={{ width: "30%"}}
              />
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
              <h4>Creativity</h4>
              <p>"Imagination Unleashed" - We encourage out-of-the-box thinking, embracing innovative ideas to overcome challenges.</p>
            </div>
            <div className="col-6 col-lg-3 gap-3 d-flex flex-column">
              <img
                src={value3}
                alt=""
                style={{ width: "30%"}}
              />
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
              <h4>Innovation</h4>
              <p>"Beyond the Horizon" - Continuously pushing boundaries, we strive to bring groundbreaking solutions to the forefront of digital marketing.
</p>
            </div>
            <div className="col-6 col-lg-3 gap-3 d-flex flex-column">
              <img
                src={value4}
                alt=""
                style={{ width: "30%"}}
              />
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
              <h4>Passion</h4>
              <p>"Heart of Our Craft" - Our team is fueled by a deep passion for digital marketing, driving us to excel in every project.</p>
            </div>
          </div>
        </div>

        <div
          className=" d-flex  rating-container z-3"
          style={{
            paddingTop: "5%",
            paddingBottom: "7%",
            paddingLeft: "10%",
            paddingRight: "7%",
            backgroundColor: "var(--secondary-bg)",
            position: "relative",
          }}
        >
          <h1 className="m-md-1 main-heading" style={{ fontSize: "5rem" }}>
            Nothing has such power to broaden the mind as the ability to
            investigate systematically and truly all that comes under thy
            observation in life.
          </h1>
          <img
    src={apostophy}
    alt="apostophy"
    className="arrowDown position-absolute z-3 "
    style={{cursor: "pointer", top: "-2px", left: "-2px"}}
  />
    <img
    src={akshita}
    alt="apostophy"
    className="arrowDown position-absolute z-3 "
    style={{cursor: "pointer", bottom: "-2px", right: "2%"}}
  />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
