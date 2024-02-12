import React, { useEffect, useRef } from "react";
import "../style.css";
import { motion, useScroll, useTransform } from "framer-motion";

const WhyMarketeer = ({ pageTitle, pageContent ,contentFontSize,contentColor}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.6", "0.4 0"],
  });
  const finalText = pageContent.split("");
  return (
    <motion.div ref={ref} className=" container pt-5 position-relative ">
       <div className="exist d-flex justify-content-between ">
       {pageTitle && <div className="col-12 col-lg-6 col-md-5">
          <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
            <h4 className=" font-1" style={{ color: "var(--text-color)" }}>
              {pageTitle}
            </h4>
          </div>
        </div>}

        <motion.div
          className={` ${
            pageTitle ? "col-lg-6 col-12 col-md-7 scroll-target z-3 fw-semibold" : ""
          }  `}
        >
          <motion.div
            style={{ fontSize: contentFontSize? contentFontSize:"2.5rem", color: contentColor? contentColor:"var(--text-color)" }}
            className="whyMarketeer-content"
          >
            {finalText.map((char, index) => {
              const start = index / finalText.length;
              const end = start + 1 / finalText.length;
              console.log([start, end]);
              return (
                <MotionSpan
                  key={index}
                  range={[start, end]}
                  scrollYProgress={scrollYProgress}
                >
                  {char}
                </MotionSpan>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const MotionSpan = ({ range, children, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, range, [0.1, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

export default WhyMarketeer;
