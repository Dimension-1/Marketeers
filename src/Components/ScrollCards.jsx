// 'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ServicesCard from './ServicesCard'
import forecast from "../assets/arrow-up.svg";
import influencer from "../assets/influencer.svg";
import sms from "../assets/sms.svg";
import onlineRep from "../assets/online.svg";
import cro from "../assets/cro.svg";
import image from "../assets/DesktopBlue.svg";
import analysis from "../assets/analysis.svg";
import marketing from "../assets/marketing.svg";
import SVG from "../assets/SVG.svg";
import "./Services.css";
// import { Card } from "@/components/ui/card"


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
  {
    serviceName: "Customer Experience Strategy",
    image: SVG,
  },
  {
    serviceName: "Marketing Consultation and Strategy",
    image: marketing,
  },
];

export default function ScrollCards({title='Services', displayCard}) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["120%", "-50%"])

  return (
    <section ref={targetRef} className="relative]">
      <div className=" position-sticky top-0 py-[5em] ">
      <div className='max-w-[75%] mx-auto'>
      <h2 className="mt-[6rem] font-custom text-[8em] text-light-bg">{title}</h2>
      </div>
        <div className="flex-1 overflow-hidden">
          <motion.div 
            style={{ x }} 
            className="flex gap-4 -pt-[10em] pb-0 h-full items-center"
          >
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
        <motion.div
            className="project-card-container  mobile-element"
            style={{ display: "flex" }}
          >
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
      <div className="h-[70vh]" aria-hidden="true" />
    </section>
  )
}

