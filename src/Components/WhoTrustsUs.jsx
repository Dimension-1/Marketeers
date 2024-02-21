import React, { useState } from "react";
import load from "../assets/loadmoreblue.svg";
import logo1 from "../assets/versea logo.png";
import logo2 from "../assets/oppa bar and cafe.png";
import logo3 from "../assets/mbc group.png";
import logo4 from "../assets/madoc logo.png";
import logo5 from "../assets/luxguild logo.png";
import logo6 from "../assets/Khiladi adda esport logo.png";
import logo7 from "../assets/India Today.png";
import logo8 from "../assets/etchcraft logo.png";
import logo9 from "../assets/llc logo.jpg.png";
import image from "../assets/DesktopBlue.svg";
import { motion } from "framer-motion";

// --------------------------------------------------
const WhoTrustsUs = () => {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const imgArray = [
    logo1,
    logo2,
    logo3,
    false,
    logo4,
    false,
    logo5,
    logo6,
    false,
    logo7,
    false,
    logo8,
    false,
    logo9,
  ];

  const MobileWhoTrustsUs = () => {
    return (
      <>
        <div
          className=" mobile-element"
          style={{
            backgroundColor: "var(--secondary-bg)",
            width: "100vw",
            transform: "translateX(-1.5rem)",
            padding: "2rem 0.5rem 4rem 0.5rem",
          }}
        >
          <h1
            style={{
              padding: "3rem 3rem",
              fontSize: "1.3rem",
              border: "1px solid grey",
              borderRadius: "20px",
              width: "fit-content",
            }}
          >
            Who Trusts Us?
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              rowGap: "0.5rem",
            }}
          >
            {imgArray.map((element, idx) => {
              return (
                <motion.div
                  whileInView={{ scale: 1 }}
                  initial={{ scale:0 }}
                  transition={{ duration: 1 }}
                  delay={12 - idx}
                  style={{ aspectRatio: 1 / 1.2, width: "90%", height: "100%" }}
                  className="company-cards"
                >
                  {!element == false ? (
                    <motion.div>
                      <img
                        src={element}
                        alt=""
                        style={{
                          transform: `translateY(${down ? "100%" : "0%"})`,
                        }}
                        className="whyUs-1imgList whyUs-topImg"
                      />
                      <img
                        src={imgArray[13 - idx]}
                        alt=""
                        style={{
                          transform: `translateY(${down ? "-100%" : "0%"})`,
                        }}
                        className="whyUs-2imgList whyUs-belowImg"
                      />
                    </motion.div>
                  ) : (
                    <motion.div>
                      <img
                        src={logo1}
                        alt=""
                        style={{
                          visibility: "hidden",
                        }}
                        className="whyUs-1imgList whyUs-topImg"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
          <img
            src={load}
            alt="loading"
            className="position-absolute"
            style={{ right: "-1px", bottom: "-3px", cursor: "pointer" }}
            onClick={() => {
              setDown(!down);
              setUp(!up);
            }}
          />
        </div>
      </>
    );
  };

  return (
    <div className="position-relative">
      <div className="img-overlay-4 position-absolute z-0">
        <img src={image} alt="" className="" />
      </div>
      <div className="gap-4 rating-container p-4 position-relative z-3 pc-element"  style={{ backgroundColor: "var(--secondary-bg)",}}>
        <div className="row ">
          <div className="col-8 col-lg-4">
            <div
              className="who-trust-us fw-semibold bg-transparent "
              style={{ fontSize: "2.6rem", color: "var(--primary-text)" }}
            >
              Who trusts us?
            </div>
          </div>
          <motion.div
            className="col-4 col-lg-2 "
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1 }}
            delay={1} // Delay of 1 second
          >
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo6}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo9}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="col-4 mt-sm col-lg-2 "
            whileInView={{ scale: 1 }}
            initial={{ scale:0 }}
            transition={{ duration: 1 }}
            delay={2.5}
          >
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo2}
                  alt=""
                  style={{ transform: `translateY(${down ? "100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo8}
                  alt=""
                  style={{ transform: `translateY(${down ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="col-4 mt-sm col-lg-2 ">
            <div className="company-cards-border"></div>
          </div>
          <motion.div
            className="col-4 mt-sm col-lg-2 "
            whileInView={{ scale: 1 }}
            initial={{ scale:0 }}
            transition={{ duration: 1 }}
            delay={3.9}
          >
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo8}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo3}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="row mt-3 mt-sm-0 ">
          <div className="col-4 col-lg-2">
            <div className="company-cards-border"></div>
          </div>
          <motion.div
            className="col-4 col-lg-2"
            whileInView={{ scale: 1 }}
            initial={{ scale:0 }}
            transition={{ duration: 1 }}
            delay={4.2}
          >
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo4}
                  alt=""
                  style={{ transform: `translateY(${down ? "100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo7}
                  alt=""
                  style={{ transform: `translateY(${down ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="col-4 col-lg-2">
            <div className="company-cards-border"></div>
          </div>
          <motion.div
            className="col-4 col-lg-2"
            whileInView={{ scale: 1 }}
            initial={{ scale:0 }}
            transition={{ duration: 1 }}
            delay={2.7}
          >
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo5}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo6}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="col-4 col-lg-2"
            whileInView={{ scale: 1 }}
            initial={{ scale:0 }}
            transition={{ duration: 2 }}
            delay={1.4}
          >
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo1}
                  alt=""
                  style={{ transform: `translateY(${down ? "100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo4}
                  alt=""
                  style={{ transform: `translateY(${down ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div
          className="row mt-3"
          
        >
          <motion.div className="col-4 col-lg-2" whileInView={{ scale: 1 }}
          initial={{ scale:0 }}
          transition={{ duration: 1 }}
          delay={3.3}>
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo7}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo3}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="col-4 col-lg-2">
            <div className="company-cards-border"></div>
          </div>
          <motion.div
            className="col-4 col-lg-2"
            whileInView={{ scale: 1 }}
            initial={{ scale:0 }}
            transition={{ duration: 1 }}
            delay={4.5}
          >
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo8}
                  alt=""
                  style={{ transform: `translateY(${down ? "100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo2}
                  alt=""
                  style={{ transform: `translateY(${down ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="col-4 col-lg-2">
            <div className="company-cards-border"></div>
          </div>
          <motion.div
            className="col-4 col-lg-2"
            whileInView={{ scale: 1 }}
            initial={{ scale:0 }}
            transition={{ duration: 1 }}
            delay={1.7}
          >
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <motion.div>
                <img
                  src={logo9}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-1imgList whyUs-topImg"
                />
                <img
                  src={logo1}
                  alt=""
                  style={{ transform: `translateY(${up ? "-100%" : "0%"})` }}
                  className="whyUs-2imgList whyUs-belowImg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <img
          src={load}
          alt="loading"
          className="position-absolute"
          style={{ right: "-1px", bottom: "-3px", cursor: "pointer" }}
          onClick={() => {
            setDown(!down);
            setUp(!up);
          }}
        />
      </div>
      <MobileWhoTrustsUs />
    </div>
  );
};

export default WhoTrustsUs;
