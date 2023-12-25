// Navbar.jsx
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/finalLogo.ico";
import marketeer from "../assets/Marketeers.svg";

gsap.to(".nav-text", {
  duration: 2,
  y: 200,
  rotation: 160,
});

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    
      <div class="d-flex position-fixed top-0 w-100 justify-content-between align-items-center mb-5" style={{zIndex: isSidebarOpen ? "0" : "999", paddingRight: "2rem"}} >
      <div className="logo h-0 w-0" style={{}}>
    <img src={logo} alt="" />
    </div>
        <div class="d-flex" style={{ flexDirection: "row-reverse", paddingRight: "2rem"}}>
          <div
            className="svg-icon d-flex mt-0"
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

          <span
            id="scrollToTop"
            onClick={toggleSidebar}
            className="scroll-to-top"
            style={{
              borderRadius: "50%", // Make it a circle
              background: "var(--custom-btn)",
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
         
          </span>
        </div>
       
      </div>

      {isSidebarOpen && (
        <div className="sidebar" style={{backgroundColor: "rgba(255, 255, 255, 0.15)", zIndex: "999"}}>
          <span className="close-icon text-light" style={{cursor: "pointer"}} onClick={toggleSidebar}>
            {/* Add your close SVG icon here */}
            X Close
          </span>
          <div className="p-2"></div>
          <div
                className="green-border d-flex justify-content-center pt-0 z-3 position-sticky"
                style={{ left: "50%" }}
              ></div>
          <div className="sidebar-item">
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link></div>
          <div className="sidebar-item"><Link to="/resources" style={{ textDecoration: 'none', color: 'inherit' }}>Resources</Link></div>
          <div className="sidebar-item"><Link to="/resources" style={{ textDecoration: 'none', color: 'inherit' }}>Case Studies</Link></div>
          <div className="sidebar-item"><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></div>
          <div className="sidebar-item"><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></div>
        </div>
      )}
      
    </>
  );
};

export default Navbar;
