import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import Navbar from "../Components/Navbar";
import "../style.css";
//import image from "../assets/Section.jpg.png";
import image from "../assets/DesktopBlue.svg";
import icon from "../assets/asterisk.svg";
import Services from "../Components/Services";
import Scrollbar from "smooth-scrollbar";
import WhyMarketeer from "../Components/WhyMarketeer";
import Ratings from "../Components/Ratings";
import WhyUs from "../Components/WhyUs";
// import Sidecut from "../assets/Sidecut.svg.svg"
import Sidecut from "../assets/Section.svg";
import WhoTrustsUs from "../Components/WhoTrustsUs";
import Testimonials from "../Components/Testimonials";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import greaterThan from "../assets/greater-than.svg";
import asterisk from "../assets/asterisk.svg";
import { useSpring, animated } from "react-spring";
import logo from "../assets/finalLogo.ico";

const LandingPage = () => {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("Page loaded, scrolling to top");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
  
  

  const sidecutRef = useRef(null); // Create a ref for the sidecut image

  const handleSidecutClick = () => {
    if (sidecutRef.current) {
      const yOffset = -60; // Adjust this value based on your layout
      const y =
        sidecutRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [{ translateY }, set] = useSpring(() => ({
    translateY: 0,
  }));

  const handleScroll = () => {
    const yPos = window.scrollY;

    // Adjust the values based on your layout
    const minHeight = 0;
    const maxHeight = 700;

    const boundedY = Math.max(minHeight, Math.min(maxHeight, yPos));

    set({
      translateY: boundedY,
      translateX: boundedY * 0.5,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [set]);

  return (
    <>
      {loading ? (
        <div className="loading-overlay">
          <Navbar />
          {/* <GridLoader color={"#8aabc4"} loading={loading} size={20} /> */}
          <div className="logo-container">
            <img src={logo} alt="" className="loading-logo" />
          </div>
        </div>
      ) : (
        <>
          <div className="main main-content">
            <Navbar />
            <div
              className={` w-100 pb-3 img-container position-relative ${
                isHovered ? "blur" : ""
              }`}
            >
              <div className="img-overlay position-absolute right-0 z-1">
                <img src={image} alt="" className="" />
              </div>
              <div className="img-overlay-2 position-absolute">
                <img src={image} alt="" className="" />
              </div>
              <div className="content-wrapper" style={{ zIndex: "800" }}>
                <div className="header-container vh-90 d-flex justify-content-center align-items-center">
                  <div className="header text-center d-flex justify-content-center align-items-center flex-column">
                    <h4
                      className="mb-0"
                      style={{ color: "var(--text-color)", fontSize: "1.2rem" }}
                    >
                      Crafting Campaigns That Captivate & Convert
                    </h4>
                    <h1 className="p-3 main-heading text-light-bg font-7">
                      Empowering
                      <img
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        src={asterisk}
                        alt="star"
                        className="svg-icon custom-button"
                      />
                      <span className="d-flex m-0 align-items-center justify-content-end text-color ">
                        <img
                          src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5c38109cfeef5f12e09ae_Image.jpg"
                          alt="button"
                          className="button svg-icon custom-button-2"
                        />
                        <animated.span
                          className="switch"
                          style={{
                            color: "var(--main-text-color)",
                            transform: translateY.interpolate(
                              (value) =>
                                `translateY(${value}px) translateX(${
                                  value * -0.925
                                }px)`
                            ),
                          }}
                        >
                          Businesses{" "}
                          <span style={{ color: "var(--main-text-color)" }}>
                            {" "}
                            for
                          </span>
                        </animated.span>
                      </span>
                      <animated.span
                        className="text-color switch d-flex justify-content-center align-items-center"
                        style={{
                          color: "var(--main-text-color)",
                          transform: translateY.interpolate(
                            (value) =>
                              `translateY(${value}px) translateX(${
                                value * -0.2
                              }px)`
                          ),
                        }}
                      >
                        Market Leadership
                        <img
                          src={greaterThan}
                          alt="star"
                          style={{ width: "12%" }}
                          className="svg-icon none custom-button"
                        />
                      </animated.span>
                    </h1>
                  </div>

                  <img
                    src={Sidecut}
                    alt="Sidecut"
                    className="sidecut-image position-absolute bottom-0 right-0"
                    style={{ right: "0", width: "8%", cursor: "pointer" }}
                    onClick={handleSidecutClick} // Add the click event
                  />
                </div>
              </div>
              <div
                className="spacer vh-50"
                style={{ marginBottom: "40rem" }}
              ></div>
              <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%", marginRight: "1rem", marginLeft: "1rem" }}
              ></div>

              <div ref={sidecutRef}>
                <WhyMarketeer
                  pageTitle="Why we exist?"
                  pageContent="At marketeers, we blend innovative thinking and cutting-edge technology to empower businesses, marketers, and visionaries. Our mission is to elevate market presence, uncover groundbreaking strategies, and maximize success potential in the ever-evolving digital landscape."
                />
              </div>
              <Services title="Services" displayCard={true} />
              <Ratings targetRef={targetRef} />
              <WhyUs targetRef={targetRef} />

              <WhoTrustsUs />
              <Testimonials />
              <Blogs />
              <Contact
                title="Interested but don’t know where to start?"
                fontSize="2.63rem"
              />

              <Footer />
            </div>
          </div>
          {isHovered && (
            <div className={`hover-text ${isHovered ? "active" : ""}`}>
              <p>
                <span style={{ fontWeight: "bold" }}>Marketeers</span>: Your
                Vision, Our Expertise – We Are Your Marketing Architects.
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default LandingPage;
