// Navbar.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Navbar.css";


gsap.to(".nav-text", { 
  duration: 2,
  y: 200,
  rotation: 160,
  
});

const Navbar = () => {
  return (
    <>
    <div class="nav justify-content-end ">
      <div class="navigation">
       
        <div class="nav__logo-cta-wrapper">
          <div
            data-scroll="stop"
            data-w-id="e2c41eac-496c-f159-1a57-a056f0741e1b"
            class="nav__open-wrapper backdrop-bulr-16"
          >
            <div class="nav__open-top-line"></div>
            <div class="nav__open-bottom-line"></div>
            <div
              data-w-id="765f7be1-de90-4e8a-b33e-c03197d14316"
              data-is-ix2-target="1"
              class="scroll-lottie opacity-05"
              data-animation-type="lottie"
              data-src="https://assets-global.website-files.com/63793925c7db23ce040b0824/6501972589575cb2d75c754d_Scroll.json"
              data-loop="0"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-default-duration="1.03436765890371"
              data-duration="0"
            ></div>
          </div>
          <a
            data-scroll="stop"
            data-w-id="a218e2b4-1c27-f9fd-6b3f-8524dad809b7"
            href="/contact-us"
            class="get-in-touch__mobile w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/63793925c7db23ce040b0824/6507f8a7020d0150e7f0b556_Pen.svg"
              loading="lazy"
              alt=""
              class="mobile__pen"
            />
          </a>
          <div
            data-w-id="a4d4e9df-7f74-ec3b-40f4-c50318097d80"
            class="button-outter"
          >
            <a href="/contact-us" class="new-buttonn w-inline-block">
              <div class="black-background"></div>
              <div class="items-wrapper">
                <div class="text-rotaotr is-inside">
                  <div class="nav-text text-4">Get in touch</div>
                </div>
                <div class="text-rotaotr is-outside">
                  <div class="nav-text text-4">Don&#x27;t be shy</div>
                </div>
                <div class="circle-wrapper">
                  <div class="circle"></div>
                  <img
                    src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e8667bfbbf04480e3205e2_Arrow-green.svg"
                    loading="lazy"
                    alt=""
                    class="image-40"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
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
