import React, { useState } from "react";
import Services from "../Components/Services";
import SVG from "../assets/SVG.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import forecast from "../assets/arrow-up.svg";
import plusIcon from "../assets/div.whyus__expand.svg";
import image from "../assets/Section.jpg.png";
import minusIcon from "../assets/minusIcon.svg";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import WhyMarketeer from "../Components/WhyMarketeer";

const AboutPage = () => {
  return (
    <div className="w-100 img-container position-relative p-">
      <div className="content-wrapper ">
        <Navbar />
        <div className="header-container d-flex flex-column  justify-content-center align-items-center">
          <h1 className=" p-4 m-md-5 main-heading text-light font-7">
            We aspire to help 1,000 businesses improve the lives of{" "}
            <span style={{ color: "var(--main-text-color)" }}>
              1 Billion people.
            </span>{" "}
          </h1>
          <WhyMarketeer
            pageTitle="Why we exist?"
            pageContent="At marketeers, we blend innovative thinking and cutting-edge technology to empower businesses, marketers, and visionaries. Our mission is to elevate market presence, uncover groundbreaking strategies, and maximize success potential in the ever-evolving digital landscape."
          />
        </div>

        <div
          className=" d-flex flex-column text-light gap-4"
          style={{ padding: "5%" }}
        >
          <h1 className="m-md-1 main-heading" style={{ fontSize: "5rem" }}>
            Our Values
          </h1>

          <div className="row d-flex ">
            <div className="col-3 gap-3 d-flex flex-column">
              <img
                src={forecast}
                alt=""
                style={{ width: "30%", height: "40%" }}
              />
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
              <h4>Integrity</h4>
              <p>we stand behind everything we say and do</p>
            </div>
            <div className="col-3 gap-3 d-flex flex-column">
              <img
                src={forecast}
                alt=""
                style={{ width: "30%", height: "40%" }}
              />
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
              <h4>Integrity</h4>
              <p>we stand behind everything we say and do</p>
            </div>
            <div className="col-3 gap-3 d-flex flex-column">
              <img
                src={forecast}
                alt=""
                style={{ width: "30%", height: "40%" }}
              />
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
              <h4>Integrity</h4>
              <p>we stand behind everything we say and do</p>
            </div>
            <div className="col-3 gap-3 d-flex flex-column">
              <img
                src={forecast}
                alt=""
                style={{ width: "30%", height: "40%" }}
              />
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
              <h4>Integrity</h4>
              <p>we stand behind everything we say and do</p>
            </div>
          </div>
        </div>

        <div
          className=" d-flex  rating-container"
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            backgroundColor: "var(--secondary-bg)",
          }}
        >
          <h1 className="m-md-1 main-heading" style={{ fontSize: "5rem" }}>
            Nothing has such power to broaden the mind as the ability to
            investigate systematically and truly all that comes under thy
            observation in life.
          </h1>
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
