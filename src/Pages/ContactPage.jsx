import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../Components/Navbar";
import "../style.css";
//import image from "../assets/Section.jpg.png";
import image from "../assets/Desktop .png"
import icon from "../assets/asterisk.svg";
import Services from "../Components/Services";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import WhyMarketeer from "../Components/WhyMarketeer";
import Ratings from "../Components/Ratings";
import WhyUs from "../Components/WhyUs";
import Sidecut from "../assets/Sidecut.svg.svg"
import WhoTrustsUs from "../Components/WhoTrustsUs";
import Testimonials from "../Components/Testimonials";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import greaterThan from "../assets/greater-than.svg"

const ContactPage = () => {
  return (
    <div className="main">
    <Navbar />
    <div className=" w-100 pb-3 img-container position-relative">
      {/* <div className="img-overlay position-absolute right-0 z-1">
        <img src={image} alt="" className="" />
      </div>
      <div className="img-overlay-2 position-absolute">
        <img src={image} alt="" className="" />
      </div>  */}
      <div className="content-wrapper" style={{zIndex: "800"}}>
        <div className="p-md-4 header-container flex-column d-flex justify-content-center align-items-center">
            <div className="p-md-5">
            <h1 className=" p-4 main-heading text-light font-7">We thought you’d
never ask! <span style={{color:"var(--main-text-color)"}}> Let’s talk!</span> </h1>
<p className="p-4 pb-0">Book a free consultation and get a free action plan</p>
        <Contact/>
        </div>
          {/* <img
      src={Sidecut}
      alt="Sidecut"
      className="sidecut-image position-absolute bottom-0 right-0"
      style={{right: "0"}}
    /> */}
    
        </div>
        <Footer/>
      </div>

      
    
    </div>
  </div>
  )
}

export default ContactPage