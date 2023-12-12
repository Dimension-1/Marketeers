import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

const WhyMarketeer = () => {

useEffect(() => {
        const scrollBar = Scrollbar.init(document.querySelector(".main"), {
          damping: 0.01,
          delegateTo: document,
          alwaysShowTracks: true,
          speed: 0.2,
        });
    
        ScrollTrigger.defaults({
          scroller: ".main",
        });
        ScrollTrigger.scrollerProxy(".main", {
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
              start: "top center",
          end: "bottom 50%",
            },
          });
        });
    
        return () => {};
      }, []);

  return (
    <div className="main">
        <div className="exist d-flex justify-content-between flex-column">
          <h4 className="col-6 font-1">Why we exist?</h4>
          {/* <h3 className="col-6 font-3 your-text" >
            At Addifico Consulting, we use human creativity and the latest
            <span className="your-text">technologies to help business leaders, investors, and entrepreneurs</span>
            enhance their market positioning, discover the next winning trend,
            and optimize their chances for success.
            
          </h3> */}
          <text className="scroll-target">
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
          </text>
        </div>
    </div>
  )
}

export default WhyMarketeer