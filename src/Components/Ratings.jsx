import React, { useRef, useEffect } from "react";
import Clippath from "../assets/Clippath.svg";
import Clip from "../assets/Clip.svg";
// import record from "../assets/div.record-div.png";
import record from "../assets/trackrecord.svg";
import section from "../assets/Section10k.png";
import loader from "../assets/loader.svg";
import arrowDown from "../assets/ArrowDown.svg";
import stats from "../assets/stats.svg";
import tree from "../assets/tree.svg";
import pentagon from "../assets/pentagon.svg";
import trackrecordimg from "../assets/tractrecordimg.svg";
import "./Ratings.css";
import {motion, useScroll, useTransform} from 'framer-motion'
import { duration } from "@mui/material";
const Ratings = ({ targetRef }) => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['0 1', '1 1']
  })
  const y = useTransform(scrollYProgress,[0.1,0.9],['-200%','100%'])
  const handleSidecutClick = () => {
    if (targetRef.current) {
      const yOffset = -60;
      const y =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   console.log("Page loaded, scrolling to top");
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  return (
    <motion.div ref={ref} className="position-relative">
      <img
        src={record}
        alt=""
        className="record"
        style={{
          position: "absolute",
          zIndex: 999,
          left: "11%",
          top: "-2px",
        }}
      />
      <div
        className="d-flex z-3 position-relative rating-container rating-main-div"
        style={{ backgroundColor: "var(--secondary-bg)",padding:'5%' }}
      >
        <div className=" sm-ratings pt-sm pt-md-5  col-lg-4 col-md-4  padding d-flex  " style={{width:'30%'}}>
          <div
            className="card d-flex justify-content-between"
            style={{ height: "300px" }}
          >
            <img src={stats} alt="img" className="align-self-end" />
            <div className="text-effect">
              <motion.h2
                className="m-0 rating-sm"
                style={{ color: "var(--bg-color)", fontSize: "3.5rem",transitionDuration:'100ms',transitionBehavior:'normal' }}
                initial={{y:'100%',opacity:0}}
                whileInView={{y:'0%',opacity:1}}
              >
                10K
              </motion.h2>
              <h4
                className="fw-medium "
                style={{ color: "var(--primary-text)", fontSize: "1.3rem" }}
              >
                Businesses analyzed
              </h4>
            </div>
          </div>
          <div
            className="card d-flex justify-content-between hoverToSpin"
            style={{
              backgroundColor: "var(--main-text-color)",
              height: "300px",
            }}
          >
            <img src={loader} alt="img" className="align-self-end rotating-icon" />
            <div className="text-effect">
              <motion.h2
                className="m-0 rating-sm"
                style={{ color: "var(--bg-color)", fontSize: "3.5rem" ,transitionDuration:'100ms',transitionBehavior:'normal'}}
                initial={{y:'100%',opacity:0}}
                whileInView={{y:'0%',opacity:1}}
              >
                100+
              </motion.h2>
              <h4
                className="fw-medium "
                style={{ color: "var(--primary-text)", fontSize: "1.3rem" }}
              >
                Markets studied
              </h4>
            </div>
          </div>
        </div>
        <div
          className="sm-ratings col-lg-4 col-md-4   d-flex  hoverToMoveUp"
          style={{ paddingBottom: "2%", paddingTop: "17%" ,width:'30%'}}
        >
          <div
            className="card  d-flex justify-content-between"
            style={{ backgroundColor: "var(--bg-color)", height: "300px" }}
          >
            <img src={tree} alt="img" className="align-self-end moveUp-icon" />
            <div className="text-effect">
              <motion.h2
                className="m-0 text-light-bg rating-sm"
                style={{ fontSize: "3.5rem",transitionDuration:'100ms',transitionBehavior:'normal' }}
                initial={{y:'100%',opacity:0}}
                whileInView={{y:'0%',opacity:1}}
              >
                <span className="primary-color">$</span>50M+
              </motion.h2>
              <h4
                className="fw-medium "
                style={{ color: "var(--primary-text)", fontSize: "1.3rem" }}
              >
                Raised
              </h4>
            </div>
          </div>
          <div
            className="card  d-flex justify-content-between hoverToSpin"
            style={{ height: "300px" }}
          >
            <img src={pentagon} alt="img" className="align-self-end rotating-icon" />
            <div className="text-effect">
              <motion.h2
                className="m-0 rating-sm"
                initial={{y:'100%',opacity:0}}
                whileInView={{y:'0%',opacity:1}}
                style={{ color: "var(--bg-color)", fontSize: "3.5rem",transitionDuration:'100ms',transitionBehavior:'normal' }}
              >
                700+
              </motion.h2>
              <h4
                className="fw-medium "
                style={{ color: "var(--primary-text)", fontSize: "1.3rem" }}
              >
                Completed projects
              </h4>
            </div>
          </div>
        </div>
        <div className="sm-ratings pt-md-5  pb-sm col-lg-4 col-md-4  padding d-flex " style={{width:'30%'}}>
          <div
            className="card d-flex justify-content-between position-relative hoverToScaleUp"
            style={{
              backgroundColor: "var(--main-text-color)",
              height: "300px",
            }}
          >
            <img
              src={trackrecordimg}
              alt="img"
              className="position-absolute bottom-0 end-0 scaleUp-icon"
            />
            <div className="text-effect">
              <motion.h2
               initial={{y:'100%',opacity:0}}
               whileInView={{y:'0%',opacity:1}}
                className="m-0 rating-sm"
                style={{ color: "var(--bg-color)", fontSize: "3.5rem",transitionDuration:'100ms',transitionBehavior:'normal' }}
              >
                500+
              </motion.h2>
              <h4
                className="fw-medium "
                style={{ color: "var(--primary-text)", fontSize: "1.3rem" }}
              >
                Clients
              </h4>
            </div>
          </div>
          <div
            className="card d-flex justify-content-between hoverToScaleUp"
            style={{ backgroundColor: "var(--bg-color)", height: "300px" }}
          >
            <img src={Clippath} alt="img" className="align-self-end scaleUp-icon" />
            <div className="text-effect">
              <motion.h2
               initial={{y:'100%',opacity:0}}
               whileInView={{y:'0%',opacity:1}}
                className="m-0 rating-sm"
                style={{ color: "var(--main-text-color)", fontSize: "3. 5rem",transitionDuration:'100ms',transitionBehavior:'normal' }}
              >
                4.9/5
              </motion.h2>
              <h4
                className="fw-medium "
                style={{ color: "var(--primary-text)", fontSize: "1.3rem" }}
              >
                Average customer rating
              </h4>
            </div>
          </div>
        </div>
      </div>
      <motion.img
        src={arrowDown}
        alt="arrowDown"
        className="arrowDown position-absolute bottom-50 z-3"
        style={{ right: "1.2%", cursor: "pointer",y }}
        onClick={handleSidecutClick}
      />
    </motion.div>
  );
};

export default Ratings;
