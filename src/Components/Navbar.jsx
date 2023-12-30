// Navbar.jsx
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/finalLogo.ico";
import marketeer from "../assets/Marketeers.svg";
import arrow from "../assets/arrow-review.svg";
import hamburger from "../assets/hamburger.svg"

gsap.to(".nav-text", {
  duration: 2,
  y: 200,
  rotation: 160,
});

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
     class="d-flex position-fixed top-0 w-100 justify-content-between align-items-center mb-5"
        style={{ zIndex: "997", paddingRight: "2rem" }}
              >
        <div className="logo z-3" style={{ zIndex: "1000" }}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
        <div
          class="d-flex sm-icon"
          style={{ flexDirection: "row-reverse", paddingRight: "2rem" }}
        >
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="svg-icon getInTouch mt-0 "
              style={{
                padding: "0.9rem 1.3rem",
                marginLeft: "1rem",
                marginBottom: "1rem",
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
                zIndex: isSidebarOpen ? "0" : "1",
              }}
            >
              Get in touch
              <span
                className=""
                style={{
                  borderRadius: "50%", // Make it a circle
                  background: "#262D29",
                  display: "flex",
                  width: "10px",
                  height: "10px",
                  padding: "10.82px 12.46px 10.81px 12.42px",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "width 0.3s ease, height 0.3s ease",
                }}
              ></span>
            </div>

            <span
            id="scrollToTop"
            onClick={toggleSidebar}
            className="scroll-to-top sm-none"
            style={{
              borderRadius: "50%", // Make it a circle
              background: "rgb(136, 166, 189, 0.3)",
              display: "flex",
              width: "55px",
              height: "55px",
              padding: "17.82px 19.46px 17.81px 19.42px",
              justifyContent: "center",
              alignItems: "center",
              rotate: "90deg",
              cursor: "pointer",
              display: "none"
            }}
          >
            {/* <img src={hamburger} alt="" style={{rotate: "90deg"}} /> */}
          </span>
          </Link>

          

          <span
            id="scrollToTop"
            onClick={toggleSidebar}
            className="scroll-to-top"
            style={{
              borderRadius: "50%", // Make it a circle
              background: "rgb(136, 166, 189, 0.3)",
              display: "flex",
              width: "55px",
              height: "55px",
              padding: "17.82px 19.46px 17.81px 19.42px",
              justifyContent: "center",
              alignItems: "center",
              rotate: "90deg",
              cursor: "pointer",
            }}
          >
            <img src={hamburger} alt="" style={{rotate: "90deg"}} />
          </span>
        </div>
      </div>

      {isSidebarOpen && <div className="backdrop" onClick={toggleSidebar}></div>}

      {isSidebarOpen && (
        <div ref={sidebarRef} className="sidebar" style={{ zIndex: "999" }}>
          <span
            className="close-icon text-light-bg"
            style={{ cursor: "pointer" }}
            onClick={toggleSidebar}
          >
            {/* Add your close SVG icon here */}X Close
          </span>
          <div className="p-2"></div>
          <div
            className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
            style={{ left: "50%" }}
          ></div>
          <div className="d-flex justify-content-between flex-column w-100 h-100">
          <div className="pages">
          <div className="sidebar-item">
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Services
              <img
                src={arrow} // Replace with the path to your image
                alt="Circle Image"
                style={{
                  rotate: "140deg",
                  marginLeft: "0.5rem",
                }}
              />
            </Link>
          </div>
          <div className="sidebar-item">
            <Link
                 to={{
                  pathname: "/resources/all",
                }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Resources
              <img
                src={arrow} // Replace with the path to your image
                alt="Circle Image"
                style={{
                  rotate: "140deg",
                  marginLeft: "0.5rem",
                }}
              />
            </Link>
          </div>
          <div className="sidebar-item">
            <Link
                 to={{
                  pathname: "/resources/CaseStudy",
                }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Case Studies
              <img
                src={arrow} // Replace with the path to your image
                alt="Circle Image"
                style={{
                  rotate: "140deg",
                  marginLeft: "0.5rem",
                }}
              />
            </Link>
          </div>
          <div className="sidebar-item">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
              <img
                src={arrow} // Replace with the path to your image
                alt="Circle Image"
                style={{
                  rotate: "140deg",
                  marginLeft: "0.5rem",
                }}
              />
            </Link>
          </div>
          <div className="sidebar-item">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
              <img
                src={arrow} // Replace with the path to your image
                alt="Circle Image"
                style={{
                  rotate: "140deg",
                  marginLeft: "0.5rem",
                }}
              />
            </Link>
          </div>
          </div>

          <div className="platforms mb-5 gap-2 d-flex flex-column ">
<div className="" style={{color: "var(--secondary-bg)", fontSize: "1.5rem", opacity: "0.7" }}>Upwork</div>
<div className="" style={{color: "var(--secondary-bg)", fontSize: "1.5rem", opacity: "0.7" }}>Fiverr</div>
<div className="" style={{color: "var(--secondary-bg)", fontSize: "1.5rem", opacity: "0.7" }}>LinkedIn</div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
