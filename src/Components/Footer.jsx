import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow-review.svg";
import { Link } from "react-router-dom";
import image from "../assets/DesktopBlue.svg";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check the user's scroll position
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll smoothly to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="mt-sm-2 position-relative overflow-hidden"
      style={{
        backgroundColor: "var(--custom-btn)",
        borderRadius: "1.5rem",
        zIndex: "99",
        margin:'1%'
      }}
    >
      <div className="row  d-flex justify-content-between ">
        <div className="col-lg-6 col-md-8 col-6 d-flex footer-sm-1 p-4 gap-lg-4 gap-2" style={{paddingInline:'2rem'}}>
          <div
            className="footer-font hover-effect"
            style={{ cursor: "pointer", color: "var(--secondary-bg)" }}
          >
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Services
            </Link>
          </div>
          <span
            className="forwardslash"
            style={{
              color: "var(--main-text-color)",
              fontSize: "1.5rem",
              opacity: "0.3",
            }}
          >
            /
          </span>
          <div
            className="footer-font hover-effect"
            style={{ cursor: "pointer", color: "var(--secondary-bg)" }}
          >
            <Link
              to="/resources/all"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Resources
            </Link>
          </div>
          <span
            className="forwardslash"
            style={{
              color: "var(--main-text-color)",
              fontSize: "1.5rem",
              opacity: "0.3",
            }}
          >
            /
          </span>
          <div
            className="footer-font hover-effect"
            style={{ cursor: "pointer", color: "var(--secondary-bg)" }}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </div>
          <span
            className="forwardslash"
            style={{
              color: "var(--main-text-color)",
              fontSize: "1.5rem",
              opacity: "0.3",
            }}
          >
            /
          </span>
          <div
            className="footer-font hover-effect"
            style={{ cursor: "pointer", color: "var(--secondary-bg)" }}
          >
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              Get in touch
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-4 col-6 d-flex  footer-sm-2 justify-content-end p-4 gap-lg-4 gap-2" style={{paddingInline:'2rem'}}>
          <div
            className="footer-font hover-effect"
            style={{ color: "var(--secondary-bg)" }}
          >
            Twitter
          </div>
          <span
            className="forwardslash"
            style={{
              color: "var(--main-text-color)",
              fontSize: "1.5rem",
              opacity: "0.3",
            }}
          >
            /
          </span>
          <div
            className="footer-font hover-effect"
            style={{ color: "var(--secondary-bg)" }}
          >
            Instagram
          </div>
          <span
            className="forwardslash"
            style={{
              color: "var(--main-text-color)",
              fontSize: "1.5rem",
              opacity: "0.3",
            }}
          >
            /
          </span>
          <div
            className="footer-font hover-effect"
            style={{ color: "var(--secondary-bg)" }}
          >
            LinkedIn
          </div>
        </div>
      </div>
      <div
        className="green-border d-flex justify-content-center pt-0"
        style={{ left: "50%", marginRight: "1rem", marginLeft: "1rem" }}
      ></div>
      <div className="row d-flex p-3" style={{paddingInline:'2rem'}}>
        <div
          className="col-6 d-flex footer-font text-light footer-sm-2"
          style={{ opacity: "0.6" }}
        >
          <Link to="https://www.dimension-1.com" target="_blank" style={{textDecoration:'none' , color:'inherit'}}>
          Build by Dimension1
          </Link>
        </div>
        <div
          className="col-6 d-flex justify-content-end footer-font align-items-center gap-3 text-light"
          style={{ opacity: "0.5" }}
        >
          ©2023 All Rights reserved
          <span
            id="scrollToTop"
            className="scroll-to-top"
            onClick={scrollToTop}
            style={{
              borderRadius: "50%", // Make it a circle
              background: "var(--custom-btn)",
              display: "flex",
              width: "30px",
              height: "30px",
              padding: "0",
              justifyContent: "center",
              alignItems: "center",
              rotate: "90deg",
              cursor: "pointer",
            }}
          >
            <img
              src={arrow} // Replace with the path to your image
              alt="Circle Image"
              style={{
                width: "20px", // Ensure the image takes the full width of the circle
                height: "20px", // Ensure the image takes the full height of the circle
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
