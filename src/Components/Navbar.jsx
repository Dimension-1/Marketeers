// Navbar.jsx
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/finalLogo.ico";
import marketeer from "../assets/Marketeers.svg";
import arrow from "../assets/arrow-review.svg";
import hamburger from "../assets/hamburger.svg";
import pencil from "../assets/pencil.svg";
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const sidebarRef = useRef();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight - windowHeight;
    const percentage = (scrollY / bodyHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                padding: "0.6rem 1rem",
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
                boxSizing: "border-box", // Fix the typo here
                gap: "0.9rem",
                zIndex: isSidebarOpen ? "0" : "1",
              }}
            >
              <div className="get-div">
                <p className="get-div-p1" style={{margin:0,padding:0}}> Get in touch</p>
                <p className="get-div-p2" style={{margin:0,padding:0}}> Don't be shy</p>
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
                  color:'white'
                }}
              ><img src={arrow} className="get-div-img" alt="img" /></span>
            </div>

            <span
              id="scrollToTop"
              onClick={toggleSidebar}
              className="scroll-to-top sm-none"
              style={{
                borderRadius: "50%", // Make it a circle
                background: "rgb(136, 166, 189, 0.3)",
                display: "flex",
                width: "50px",
                height: "50px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
                rotate: "90deg",
                cursor: "pointer",
                display: "none",
              }}
            >
              <img src={pencil} alt="" style={{ rotate: "90deg" }} />
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
              width: "50px",
              height: "50px",
              padding: "17.82px 19.46px 17.81px 19.42px",
              justifyContent: "center",
              alignItems: "center",

              cursor: "pointer",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              width="50" // Adjust the size of the progress circle
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                transform: "rotate(-90deg)",
              }}
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#8aabc4" // Color of the progress circle
                strokeWidth="5" // Width of the progress circle
                fill="none"
                strokeDasharray="251.32741228718345" // Circumference of a circle with radius 40
                strokeDashoffset={
                  251.32741228718345 * ((100 - scrollPercentage) / 100)
                }
              />
            </svg>

            <img src={hamburger} alt="" style={{ rotate: "180deg" }} />
          </span>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="backdrop" onClick={toggleSidebar}></div>
      )}

      {/* {isSidebarOpen && ( */}
        <div ref={sidebarRef} className={`sidebar `} style={{ zIndex: "999" ,right:isSidebarOpen? '0' : '-100%'}}>
          <span
            className="close-icon text-light-bg h-effect"
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
              <div className="sidebar-item h-effect">
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
              <div className="sidebar-item h-effect">
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
              <div className="sidebar-item h-effect">
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
              <div className="sidebar-item h-effect">
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
              <div className="sidebar-item h-effect">
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
              <div
                className="h-effect"
                style={{
                  color: "var(--secondary-bg)",
                  fontSize: "1.5rem",
                  opacity: "0.7",
                }}
              >
                Upwork
              </div>
              <div
                className="h-effect"
                style={{
                  color: "var(--secondary-bg)",
                  fontSize: "1.5rem",
                  opacity: "0.7",
                }}
              >
                Fiverr
              </div>
              <div
                className="h-effect"
                style={{
                  color: "var(--secondary-bg)",
                  fontSize: "1.5rem",
                  opacity: "0.7",
                }}
              >
                LinkedIn
              </div>
            </div>
          </div>
        </div>
       {/* )} */}
    </>
  );
};

export default Navbar;
