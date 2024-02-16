import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import Resources from "../Components/Resources";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import logo from "../assets/finalLogo.ico";

const ResourcePage = ({blogData}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
        <div
          className="overflow-hidden"
          style={{ background: "var(--bg-color)" }}
        >
          <Navbar />
          <Resources data={blogData}/>
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ResourcePage;
