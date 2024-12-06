import React, { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WhyMarketeer = ({ pageTitle, pageContent, contentFontSize, contentColor }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // Scroll progress for text reveal animation
  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["0 0.6", "0.4 0"],
  });

  // Scroll progress for sticky behavior
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacity for pageTitle
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const finalText = pageContent.split("");

  // Memoize the MotionSpan creation function
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
    <motion.div ref={containerRef} className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
          <motion.div
            className="sticky top-20 h-fit"
            style={{
              opacity: titleOpacity,
            }}
          >
            {pageTitle && (
              <h4 className=" font-title">{pageTitle}</h4>
            )}
          </motion.div>

          <motion.div ref={textRef} className="relative z-10">
            <motion.div
              style={{
                fontSize: contentFontSize || "2.5rem",
                color: contentColor || "var(--text-color)",
              }}
              className="space-x-[0.2rem] font-semibold leading-relaxed"
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


// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const WhyMarketeer = ({ pageTitle, pageContent, contentFontSize = "2.5rem", contentColor = "var(--text-color)" }) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const MotionSpan = ({ range, children, scrollYProgress }) => {
//     const opacity = useTransform(scrollYProgress, range, [0.1, 1]);
//     return <motion.span style={{ opacity }}>{children}</motion.span>;
//   };

//   return (
//     <div ref={containerRef} className="container pt-5 position-relative min-h-[200vh]">
//       <div className="exist d-flex justify-content-between ">
//         {pageTitle && (
//           <motion.div 
//             className="col-12 col-lg-6 col-md-5 "
//             style={{ 
//               position: "sticky-heading", 
//               top: 10, 
//               zIndex: 1000,
//             }}
//           >
//             <h4 className="font-1 p-body text-2 text-lighter sticky-heading opacity-07 mobile-h5" style={{ color: "var(--text-color)" }}>
//               {pageTitle}
//             </h4>
//           </motion.div>
//         )}

//         <motion.div
//           className={`${
//             pageTitle ? "col-lg-6 col-12 col-md-7 scroll-target z-3 fw-semibold" : ""
//           }`}
//         >
//           <motion.div
//             style={{ 
//               fontSize: contentFontSize, 
//               color: contentColor 
//             }}
//             className="whyMarketeer-content"
//           >
//             {pageContent.split("").map((char, index) => {
//               const start = index / pageContent.length;
//               const end = start + 1 / pageContent.length;
//               return (
//                 <MotionSpan
//                   key={index}
//                   range={[start, end]}
//                   scrollYProgress={scrollYProgress}
//                 >
//                   {char}
//                 </MotionSpan>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default WhyMarketeer;

