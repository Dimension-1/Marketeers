import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../Components/Navbar";
import "../style.css";
//import image from "../assets/Section.jpg.png";
import image from "../assets/DesktopBlue.svg"
import icon from "../assets/asterisk.svg";
import Services from "../Components/Services";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import WhyMarketeer from "../Components/WhyMarketeer";
import Ratings from "../Components/Ratings";
import WhyUs from "../Components/WhyUs";
// import Sidecut from "../assets/Sidecut.svg.svg"
import Sidecut from "../assets/Section.svg"
import WhoTrustsUs from "../Components/WhoTrustsUs";
import Testimonials from "../Components/Testimonials";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import greaterThan from "../assets/greater-than.svg";
import asterisk from "../assets/asterisk.svg"

const LandingPage = () => {
  const targetRef = useRef(null);

  // useEffect(() => {
  //   gsap.to('.switch', {
  //     x: -100, // Change this value to move it horizontally
  //   y: 100, // Add this property to move it vertically
  //   scrollTrigger: {
  //     trigger: '.switch',
  //     start: 'center center',
  //     end: 'bottom center',
  //     scrub: true
  //   }
  //   });
    
  //   gsap.to('.class', {
  //     x: 0, // Change this value to move it horizontally
  //   y: -100, // Add this property to move it vertically
  //     scrollTrigger: {
  //       trigger: '.class',
  //       start: 'center center',
  //       end: 'bottom center',
  //       scrub: true
  //     }
  //   });
  // }, []);


// useEffect(() => {
//     const scrollBar = Scrollbar.init(document.querySelector(".scroll-target"), {
//       damping: 0.01,
//       delegateTo: document,
//       alwaysShowTracks: true,
//       speed: 0.2,
//     });

//     ScrollTrigger.defaults({
//       scroller: ".scroll-target",
//     });
//     ScrollTrigger.scrollerProxy(".scroll-target", {
//       scrollTop(value) {
//         if (arguments.length) {
//           scrollBar.scrollTop = value;
//         }
//         return scrollBar.scrollTop;
//       },
//     });

//     scrollBar.addListener(ScrollTrigger.update);

//     const matches = document.querySelectorAll("p");

//     matches.forEach((target) => {
//       gsap.to(target, {
//         backgroundPositionX: "0%",
//         stagger: 1,
//         scrollTrigger: {
//           markers: true,
//           trigger: target,
//           scrub: true,
//           start: "top 20%",
//           end: "bottom 10%",
//         },
//       });
//     });

//     return () => {};
//   }, []);

  
const sidecutRef = useRef(null); // Create a ref for the sidecut image

const handleSidecutClick = () => {
  if (sidecutRef.current) {
    const yOffset = -60; // Adjust this value based on your layout
    const y = sidecutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        }
};




  return (
    <div className="main main-content">
  <Navbar />
  <div className=" w-100 pb-3 img-container position-relative">
    <div className="img-overlay position-absolute right-0 z-1">
      <img src={image} alt="" className="" />
    </div>
    <div className="img-overlay-2 position-absolute">
      <img src={image} alt="" className="" />
    </div>
    <div className="content-wrapper" style={{zIndex: "800"}}>
      <div className="header-container vh-90 d-flex justify-content-center align-items-center">
        <div className="header text-center d-flex justify-content-center align-items-center flex-column">
          <h4 className="mb-0" style={{ color: 'var(--text-color)', fontSize: '1.2rem' }}>Crafting Campaigns That Captivate & Convert</h4>
          <h1 className="p-3 main-heading text-light-bg font-7">
          Empowering  
            <img
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
              <span className="switch" >
              Businesses <span style={{color: 'var(--main-text-color)'}}>  for</span> 
              </span>
            </span>
            <span className="text-color switch d-flex justify-content-center align-items-center " style={{ color: 'var(--main-text-color)'}}>Market Leadership
            <img
              src={greaterThan}
alt="star"
              style={{width: "12%"}}
              className="svg-icon none custom-button"
            />
            </span>
          </h1>
        </div>
        <img
    src={Sidecut}
    alt="Sidecut"
    className="sidecut-image position-absolute bottom-0 right-0"
    style={{right: "0", width: "8%", cursor: "pointer"}}
    onClick={handleSidecutClick} // Add the click event
          
  />
      </div>
    </div>
    <div className="spacer vh-50" style={{marginBottom: '40rem'}}></div>
    <div className="green-border d-flex justify-content-center pt-0 z-3 position-sticky" style={{ left: '50%', marginRight: "1rem", marginLeft: "1rem"}}></div>
    
    <div ref={sidecutRef}>
        <WhyMarketeer
          pageTitle="Why we exist?"
          pageContent="At marketeers, we blend innovative thinking and cutting-edge technology to empower businesses, marketers, and visionaries. Our mission is to elevate market presence, uncover groundbreaking strategies, and maximize success potential in the ever-evolving digital landscape."
        />
      </div>
    <Services />
    <Ratings targetRef={targetRef}/>
    <WhyUs targetRef={targetRef}/>
   
    <WhoTrustsUs/>
    <Testimonials/>
    <Blogs/>
    <Contact title="Interested but don’t know where to start?" fontSize="2.63rem" />

    <Footer/>
  </div>
</div>

  );
};

export default LandingPage;
