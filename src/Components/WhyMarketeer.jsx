import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
// import image from "../assets/Section.jpg.png";
import image from "../assets/DesktopBlue.svg";
import bg from "../assets/mainbg.png"

gsap.registerPlugin(ScrollTrigger);

const WhyMarketeer = ({pageTitle, pageContent}) => {
  useEffect(() => {
    const scrollBar = Scrollbar.init(document.querySelector(".scroll-target"), {
      damping: 0.01,
      delegateTo: document,
      alwaysShowTracks: true,
      speed: 0.2,
    });

    ScrollTrigger.defaults({
      scroller: ".scroll-target",
    });
    ScrollTrigger.scrollerProxy(".scroll-target", {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    scrollBar.addListener(ScrollTrigger.update);

    const matches = document.querySelectorAll("p");

    matches.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
          markers: false,
          trigger: target,
          scrub: true,
          start: "top 25%",
          end: "bottom 5%",
        },
      });
    });

    return () => {};
  }, []);

  return (
    <div className=" container pt-5 position-relative ">
      
      <div className="exist d-flex justify-content-between ">
        <div className="col-12 col-lg-6 col-md-5">
          <div style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
          <h4 className=" font-1" style={{color: 'var(--text-color)'}}>{pageTitle}</h4>
          </div>
        </div>
        
        {/* <h3 className="col-6 font-3 your-text" >
            At Marketeer's Consulting, we use human creativity and the latest
            <span className="your-text">technologies to help business leaders, investors, and entrepreneurs</span>
            enhance their market positioning, discover the next winning trend,
            and optimize their chances for success.
            
          </h3> */}
        <div className="col-12 col-lg-6 col-md-7 scroll-target z-3 fw-semibold">
          <p className="marketeer " style={{ fontSize: "3rem", color: "var(--text-color)" }}>
          {pageContent}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyMarketeer;
