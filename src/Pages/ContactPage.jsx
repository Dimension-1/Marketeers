import React, { useState, useEffect, useRef } from "react";

import Navbar from "../Components/Navbar";
import "../style.css";
//import image from "../assets/Section.jpg.png";
import image from "../assets/DesktopBlue.svg";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import contactIcon from "../assets/ContactUs.svg";
import arrowDown from "../assets/ArrowDown.svg";
import logo from "../assets/finalLogo.ico";

const ContactPage = () => {
  const sidecutRef = useRef(null); // Create a ref for the sidecut image
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSidecutClick = () => {
    // Scroll to the target section
    if (sidecutRef.current) {
      sidecutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading-overlay">
          <Navbar />
          <div className="logo-container">
            <img src={logo} alt="" className="loading-logo" />
          </div>
        </div>
      ) : (
        <div className="main">
          <Navbar />
          <div className="pb-3 img-container position-relative servicePage-wholeDiv">
            <div className="img-overlay position-absolute right-0 z-1">
              <img src={image} alt="" className="" />
            </div>
            <div className="img-overlay-2 position-absolute">
              <img src={image} alt="" className="" />
            </div>
            <div className="content-wrapper" style={{ zIndex: "8" }}>
              <img
                src={contactIcon}
                alt="contactIcon"
                className=""
                style={{
                  position: "absolute",
                  zIndex: 999,
                  left: "14%",
                  top: "0px",
                }}
              />
              <div
                className="pt-4 mx-[1%] px-[10%] pb-4 header-container flex-column d-flex justify-content-center align-items-center"
                style={{ padding: "" }}
              >
                <div className="p-md-5 mt-4 mx-[1%]">
                  <h1
                    className=" p-4 main-heading font-5 slide-up"
                    style={{ color: "var(--secondary-bg)" }}
                  >
                    We thought you’d never ask!{" "}
                    <span style={{ fontFamily:"MyCustomFont", color: "var(--main-text-color)" }}>
                      {" "}
                      Let’s talk!
                    </span>{" "}
                  </h1>
                  <p
                    className="p-4 pb-0"
                    style={{fontFamily:"MyCustomFont", color: "var(--secondary-bg)" }}
                  >
                    <span
                      style={{
                        fontFamily:"MyCustomFont",
                        color: "var(--text-color)",
                        borderBottom: "1px solid var(--text-color)",
                      }}
                    >
                      Book a free consultation
                    </span>{" "}
                    and get a free action plan
                  </p>

                  <Contact
                    title="Drop us a message:"
                    fontSize="1.5rem"
                    showOverlayImage={false}
                  />
                </div>
                <img
                  src={arrowDown}
                  alt="arrowDown"
                  className=" position-absolute bottom-50 z-3 pc-element"
                  style={{ right: "-1px", cursor: "pointer" }}
                  onClick={handleSidecutClick}
                  ref={sidecutRef}
                />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
