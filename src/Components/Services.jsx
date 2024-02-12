import React, { useEffect, useRef } from "react";
import "./Services.css";
import forecast from "../assets/arrow-up.svg";
import influencer from "../assets/influencer.svg";
import sms from "../assets/sms.svg";
import onlineRep from "../assets/online.svg";
import cro from "../assets/cro.svg";
import image from "../assets/DesktopBlue.svg";
import { useScroll, motion, useTransform } from "framer-motion";
import ServicesCard from "./ServicesCard";

export default function Services({ title, displayCard }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.7 1", "1 1"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["300px", "-1200px"]);
  const serviceCardsArray = [
    {
      serviceName: "Pay-Per-Click-Advertising",
      image: forecast,
    },
    {
      serviceName: "Email and SMS Marketing",
      image: sms,
    },
    {
      serviceName: "Influencer Marketing",
      image: influencer,
    },
    {
      serviceName: "Conversion Rate Optimization",
      image: cro,
    },
    {
      serviceName: "Online Reputation Management",
      image: onlineRep,
    },
  ];
  return (
    <>
        <div
          className="img-overlay position-absolute"
          style={{
            top: "15%",
            right: "60%",
            transform: "rotate(15deg)",
            display: displayCard ? "flex" : "none",
            zIndex: 1,
          }}
        >
          <img src={image} alt="" className="" />
        </div>
      <motion.div ref={ref} className="projects-container">
        <div className="projects ">
          <h1 className="font-10 text-light-bg" >{title}</h1>
          <motion.div className="project-card-container pc-element" style={{ x: y }}>
            {serviceCardsArray.map((card, idx) => {
              return (
                <ServicesCard
                  image={card.image}
                  serviceName={card.serviceName}
                  key={idx}
                  displayCard={displayCard}
                />
              );
            })}
          </motion.div>
          <motion.div className="project-card-container  mobile-element" style={{display:'flex'}}>
            {serviceCardsArray.map((card, idx) => {
              return (
                <ServicesCard
                  image={card.image}
                  serviceName={card.serviceName}
                  key={idx}
                  displayCard={displayCard}
                />
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
