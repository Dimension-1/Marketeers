import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import image from "../assets/Section.jpg.png";

gsap.registerPlugin(ScrollTrigger);

const WhyMarketeer = () => {

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
              markers: true,
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
    <div className="main custom-container pt-5 overflow-hidden">
        <div className="exist d-flex justify-content-between ">
          <div className="col-6">
          <h4 className=" font-1 z-3 position-fixed " style={{color: 'var(--text-color)'}}>Why we exist?</h4>
          </div>
          <div className="img-overlay position-absolute" style={{top: '50%'}}>
      <img src={image} alt="" className="" />
    </div>
          {/* <h3 className="col-6 font-3 your-text" >
            At Addifico Consulting, we use human creativity and the latest
            <span className="your-text">technologies to help business leaders, investors, and entrepreneurs</span>
            enhance their market positioning, discover the next winning trend,
            and optimize their chances for success.
            
          </h3> */}
          <div className="col-6 scroll-target z-3 ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut aut exercitationem!
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, deleniti repellendus. Rem!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat consequatur? Officiis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut aut exercitationem!
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, deleniti repellendus. Rem!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat consequatur? Officiis?</p>
          </div>
        </div>
    </div>
  )
}

export default WhyMarketeer