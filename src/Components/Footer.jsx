import React, {useEffect, useState} from 'react';
import arrow from "../assets/arrow-review.svg";
import { Link } from "react-router-dom";

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

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll smoothly to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{backgroundColor: "var(--custom-btn)", borderRadius: "1.5rem"}}>
        <div className="row d-flex justify-content-between ">
          <div className='col-6 d-flex p-4 gap-4'>
            <div className='footer-font text-light' style={{cursor: "pointer"}}>
               <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font text-light' style={{cursor: "pointer"}}>
              Resources
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font text-light' style={{cursor: "pointer"}}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font text-light' style={{cursor: "pointer"}}>
             <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}> Get in touch</Link>
            </div>
          </div>
          <div className='col-6 d-flex justify-content-end p-4 gap-4'>
            <div className='footer-font text-light'>
              Twitter
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font text-light'>
              Instagram
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font text-light'>
              Facebook
            </div>
          </div>
        </div>
        <div className="green-border d-flex justify-content-center pt-0" style={{ left: '50%', marginRight: "1rem", marginLeft: "1rem"}}></div>
        <div className="row d-flex p-3 ">
            <div className='col-6 d-flex footer-font text-light' style={{opacity: "0.6"}}>
              Build by Marketeers
            </div>
            <div className='col-6 d-flex justify-content-end footer-font align-items-center gap-3 text-light' style={{opacity: "0.5"}}>
            ©2023 All Rights reserved
            <span id="scrollToTop" className="scroll-to-top" onClick={scrollToTop}
              style={{
                borderRadius: "50%", // Make it a circle
                background: "var(--custom-btn)",
                display: "flex",
                width: "50px",
                height: "50px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
               rotate: "90deg",
                cursor: "pointer"
              }}
            >
              <img
    src={arrow} // Replace with the path to your image
    alt="Circle Image"
    style={{
      width: "100%", // Ensure the image takes the full width of the circle
      height: "100%", // Ensure the image takes the full height of the circle
    }}
  />
            </span>
            </div>
        </div>
    </div>
  )
}

export default Footer