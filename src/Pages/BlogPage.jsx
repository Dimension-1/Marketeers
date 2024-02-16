import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import "../App.css";

import Navbar from "../Components/Navbar";
import BlogContent from "../Components/BlogContent";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import logo from "../assets/finalLogo.ico";
import axios from "axios";
const BlogPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://sheetdb.io/api/v1/hdreqxp52ghx1")
      .then((data) => {
        setBlogData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

 
  const sectionRefs = {
    Introduction: useRef(null),
    Tam: useRef(null),
    Sam: useRef(null),
    Som: useRef(null),
    Conclusion: useRef(null),
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    for (const [section, ref] of Object.entries(sectionRefs)) {
      if (ref.current && ref.current.offsetTop <= scrollPosition + 100) {
        setActiveSection(section);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          className="d-flex justify-content-center flex-column overflow-hidden "
          style={{ background: "var(--bg-color)" }}
        >
          <Navbar />
          <BlogContent blogData={blogData}/>

          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default BlogPage;
