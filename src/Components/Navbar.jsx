// Navbar.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Navbar.css";
import logo from "../assets/mainLogo.png"


gsap.to(".nav-text", { 
  duration: 2,
  y: 200,
  rotation: 160,
  
});

const Navbar = () => {
  return (
    <>
        <div class="nav justify-content-end " >
      <div class="navigation" style={{flexDirection: "row-reverse"}}>
      <div className="svg-icon d-flex" style={{
  padding: '0.9rem 1.3rem',
  marginLeft: '1rem',
  fontSize: "1.2rem",
  fontWeight: "500",
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--main-text-color)',
  border: 'none',
  borderRadius: '3rem',
  cursor: 'pointer', // Fix the typo here
  transition: 'background-color 0.3s ease',
  boxSizing: 'border-box', // Fix the typo here
  gap: "0.9rem"
}}>
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
            >
       
            </span>
</div>

      <span id="scrollToTop" className="scroll-to-top" 
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
                cursor: "pointer"
              }}
            >
              {/* <img
    src={arrow} // Replace with the path to your image
    alt="Circle Image"
    style={{
      width: "100%", // Ensure the image takes the full width of the circle
      height: "100%", // Ensure the image takes the full height of the circle
    }}
  /> */}
            </span>
      </div>
      {/* <div class="hidden-navigation">
        <div class="nav__wrapper">
          <div class="nav_top-wrapper">
            <a
              stagger-link=""
              data-scroll="start"
              data-w-id="e2c41eac-496c-f159-1a57-a056f0741e2d"
              href="#"
              class="nav_top-single-closer w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e87091a9432f998933e04b_Nav-close.svg"
                loading="lazy"
                alt=""
                class="image-41"
              />
              <div
                stagger-link-text="pale-green"
                class="nav-top-closer letter-spacing-0-5 line-height-1 p-body is-nav-closer"
              >
                close
              </div>
            </a>
            <div class="nav_top-single">
              <div class="p-body nav__top-text letter-spacing-0-5">menu</div>
            </div>
          </div>
          <div class="separator-footer bg--1 opacity-01"></div>
          <div class="nav_main-wrapper">
            <div class="nav_main-top-wrapper">
              <a
                stagger-link=""
                href="/services"
                class="menu-link w-inline-block"
              >
                <div class="nav_main-text-wrapper">
                  <div stagger-link-text="white" class="h3 line-height-1">
                    Services
                  </div>
                </div>
                <div class="nav_main-arrow">
                  <div class="nav-arrow w-embed">
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 15 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <a
                stagger-link=""
                href="/resources"
                class="menu-link w-inline-block"
              >
                <div class="nav_main-text-wrapper">
                  <div stagger-link-text="white" class="h3 line-height-1">
                    Resources
                  </div>
                </div>
                <div class="nav_main-arrow">
                  <div class="nav-arrow w-embed">
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 15 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <a
                id="case-study-link"
                stagger-link=""
                href="https://addifico.com/resources?tab=case-studies"
                class="menu-link w-inline-block"
              >
                <div class="nav_main-text-wrapper">
                  <div stagger-link-text="white" class="h3 line-height-1">
                    Case studies
                  </div>
                </div>
                <div class="nav_main-arrow">
                  <div class="nav-arrow w-embed">
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 15 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <a
                stagger-link=""
                href="/about-us"
                class="menu-link w-inline-block"
              >
                <div class="nav_main-text-wrapper">
                  <div stagger-link-text="white" class="h3 line-height-1">
                    About
                  </div>
                </div>
                <div class="nav_main-arrow">
                  <div class="nav-arrow w-embed">
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 15 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <a
                stagger-link=""
                href="/contact-us"
                class="menu-link w-inline-block"
              >
                <div class="nav_main-text-wrapper">
                  <div stagger-link-text="white" class="h3 line-height-1">
                    Contact
                  </div>
                </div>
                <div class="nav_main-arrow">
                  <div class="nav-arrow w-embed">
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 15 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div class="nav_main-bottom-wrapper">
              <a
                stagger-link=""
                href="https://www.upwork.com/freelancers/hristodikov/"
                class="menu-link w-inline-block"
              >
                <div
                  stagger-link-text=""
                  class="p-body line-height-1 nav-link-bg"
                >
                  UpWork
                </div>
              </a>
              <a
                stagger-link=""
                href="https://www.fiverr.com/dikovh"
                class="menu-link w-inline-block"
              >
                <div
                  stagger-link-text=""
                  class="p-body line-height-1 nav-link-bg"
                >
                  Fiverr
                </div>
              </a>
              <a
                stagger-link=""
                href="https://www.linkedin.com/in/hristo-dikov/"
                class="menu-link w-inline-block"
              >
                <div
                  stagger-link-text=""
                  class="p-body line-height-1 nav-link-bg"
                >
                  Linkedin
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          data-scroll="start"
          data-w-id="e2c41eac-496c-f159-1a57-a056f0741e62"
          class="nav-overlay-closer"
        ></div>
      </div> */}
    </div>
    
</>
  );
};

export default Navbar;
