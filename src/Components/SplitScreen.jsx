import React, { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./WhyMarketeer.css";

const WhyMarketeer = ({ pageTitle, pageContent, contentFontSize, contentColor }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["0 0.6", "0.4 0"],
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [1, 1], [1, 1]);

  const finalText = pageContent.split("");

  const createMotionSpan = useCallback(
    (char, index) => {
      const start = index / finalText.length;
      const end = start + 1 / finalText.length;
      return (
        <MotionSpan
          key={index}
          range={[start, end]}
          scrollYProgress={textScrollProgress}
        >
          {char}
        </MotionSpan>
      );
    },
    [finalText.length, textScrollProgress]
  );

  return (
    <motion.div ref={containerRef} className="max-w-[75%] px-[10px] mx-auto mt-10 pb-[8em]">
      <div className="">
        <div className="why-marketeer-grid">
          <motion.div
            className="why-marketeer-title"
            style={{
              opacity: titleOpacity,
            }}
          >
            {pageTitle && <h4 className="">{pageTitle}</h4>}
          </motion.div>

          <motion.div ref={textRef} className="why-marketeer-text">
            <motion.div
              className="why-marketeer-text-content"
              style={{
                fontSize: contentFontSize || "2.8rem",
                fontWeight: 500,
                lineHeight: 1.3,
                color: contentColor || "var(--text-color)",
              }}
            >
              {finalText.map(createMotionSpan)}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const MotionSpan = ({ range, children, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, range, [0.1, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

export default WhyMarketeer;

