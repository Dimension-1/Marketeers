import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import image from "../assets/DesktopBlue.svg";
import Services from "../Components/Services";
import WhyMarketeer from "../Components/WhyMarketeer";
import Ratings from "../Components/Ratings";
import WhyUs from "../Components/WhyUs";
import Sidecut from "../assets/Section.svg";
import WhoTrustsUs from "../Components/WhoTrustsUs";
import Testimonials from "../Components/Testimonials";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import greaterThan from "../assets/greater-than.svg";
import asterisk from "../assets/asterisk.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import "../style.css";
// ----------------------------------------------
const LandingPage = ({blogData}) => {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);



  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  const ref = useRef(null); // Create a ref for the sidecut image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 1"],
  });
  const mobileForY = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"]);
  const buisnessForY = useTransform(scrollYProgress, [0, 1], ["0vh", "110vh"]);
  const buisnessForX = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);
  const marketLeadershipX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-10%"]
  );

  return (
    <>
     
        <>
          <div className="main main-content">
            <Navbar />
            <div
              className={` w-full m-4  pb-3 img-container position-relative ${
                isHovered ? "blur" : ""
              }`}
            >
              <motion.div ref={ref}>
                <div className="img-overlay position-absolute right-0 z-1">
                  <img src={image} alt="" className="" />
                </div>
                <div className="img-overlay-2 position-absolute">
                  <img src={image} alt="" className="" />
                </div>
                <div className="content-wrapper" style={{ zIndex: "800" }}>
                  <div className="header-container vh-90 d-flex justify-content-center align-items-center">
                    <div className="header text-center d-flex justify-content-center align-items-center flex-column">
                      <h4
                        className="mb-0"
                        style={{ color: "var(--text-color)", fontSize: "1rem" }}
                      >
                        Crafting Campaigns That Captivate & Convert
                      </h4>
                      <h1 className="p-3 main-heading text-light-bg font-5">
                        Empowering
                        <img
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          src={asterisk}
                          alt="star"
                          className="svg-icon custom-button "
                          style={{ padding: "1.1rem 3rem" }}
                        />
                        <span className="d-flex m-0 align-items-center  text-color ">
                          <img
                            src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5c38109cfeef5f12e09ae_Image.jpg"
                            alt="button"
                            className=" svg-icon custom-button-2 hero-section-headingImg"
                          />
                          <motion.span
                            className="switch hero-section-buisnessFor pc-element"
                            style={{
                              color: "var(--main-text-color)",
                              y: buisnessForY,
                              x: buisnessForX,
                            }}
                          >
                            Businesses for
                          </motion.span>
                          <motion.span
                            className="switch hero-section-buisnessFor mobile-element"
                            style={{
                              color: "var(--main-text-color)",
                              y: mobileForY,
                            }}
                          >
                            Businesses for
                          </motion.span>
                        </span>
                        <motion.span
                          className="text-color switch  align-items-center pc-element"
                          style={{
                            color: "var(--main-text-color)",
                            y: buisnessForY,
                            x: marketLeadershipX,
                            display:'flex'
                          }}
                        >
                          Market Leadership
                          <img
                            src={greaterThan}
                            alt="star"
                            className="svg-icon none custom-button"
                            style={{ padding: "1.1rem 3rem" }}
                          />
                        </motion.span>
                        <motion.span
                          className="text-color switch   mobile-element"
                          style={{
                            color: "var(--main-text-color)",
                            y: mobileForY,
                            display:'flex',
                          }}
                        >
                          Market Leadership
                        </motion.span>
                      </h1>
                    </div>

                    <img
                      src={Sidecut}
                      alt="Sidecut"
                      className="sidecut-image position-absolute bottom-0"
                      style={{
                        right: "2.5%",
                        width: "8%",
                        cursor: "pointer",
                        fill: "white",
                      }}
                      onClick={() =>
                        window.scrollTo({
                          top: window.innerHeight + 300,
                          behavior: "smooth",
                        })
                      }
                    />
                  </div>
                </div>
                <div
                  className="spacer vh-50 pc-element"
                  style={{ marginBottom: "100vh" }}
                ></div>
                <div
                  className="spacer vh-50 mobile-element"
                  style={{ marginBottom: "50vh" }}
                ></div>
                <div
                  className="green-border d-flex justify-content-center pt-0 z-3 position-sticky green-border-landingPage"
                  style={{
                    left: "50%",
                    marginRight: "1rem",
                    marginLeft: "1rem",
                  }}
                ></div>
                {/* hero section ends here with the animation part------------- */}
              </motion.div>
              <div id="sidecut">
                <WhyMarketeer
                  pageTitle="Why we exist?"
                  pageContent="At marketeers, we blend innovative thinking and cutting-edge technology to empower businesses, marketers, and visionaries. Our mission is to elevate market presence, uncover groundbreaking strategies, and maximize success potential in the ever-evolving digital landscape."
                />
              </div>

              <Services title="Services" displayCard={true} />
              <Ratings targetRef={targetRef} />
              <WhyUs targetRef={targetRef} />

              <WhoTrustsUs />
              <Testimonials />

              <Blogs blogData={blogData}/>
              <Contact
                title="Interested but don’t know where to start?"
                fontSize="2.63rem"
              />

              <Footer />
            </div>
          </div>
          {isHovered && (
            <div className={`hover-text ${isHovered ? "active" : ""}`}>
              <p>
                <span style={{ fontWeight: "bold" }}>Marketeers</span>: Your
                Vision, Our Expertise – We Are Your Marketing Architects.
              </p>
            </div>
          )}
        </>
    </>
  );
};

export default LandingPage;