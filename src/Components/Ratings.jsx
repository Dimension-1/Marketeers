import React from "react";
import "./Ratings.css";
import Clippath from "../assets/Clippath.svg";
import Clip from "../assets/Clip.svg";

const Ratings = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        className="d-flex h-100 z-3 position-relative rating-container gap-4"
        style={{ backgroundColor: "var(--secondary-bg)" }}
      >
        <div className="col h-100 padding d-flex flex-column gap-4 ">
          <div className="card h-50 d-flex justify-content-between" >
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0"
                style={{ color: "var(--bg-color)", fontSize: "5rem" }}
              >
                10k
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem'}}>Business Analyzed</h4>
            </div>
          </div>
          <div className="card h-50 d-flex justify-content-between" style={{backgroundColor: "var(--main-text-color)"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0"
                style={{ color: "var(--bg-color)", fontSize: "5rem" }}
              >
                10k
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Business Analyzed</h4>
            </div>
          </div>
        </div>
        <div className="col h-100  d-flex flex-column gap-4" style={{paddingBottom: '2%', paddingTop: '10%'}}>
        <div className="card h-50 d-flex justify-content-between" style={{backgroundColor: "var(--bg-color)"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0 text-light"
                style={{ fontSize: "5rem" }}
              >
                <span style={{color: "var(--background-color))"}}>$</span>50M+
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Business Analyzed</h4>
            </div>
          </div>
          <div className="card h-50 d-flex justify-content-between">
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0"
                style={{ color: "var(--bg-color)", fontSize: "5rem" }}
              >
                700
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Completed Projects</h4>
            </div>
          </div>
        </div>
        <div className="col h-100 padding d-flex flex-column gap-4" >
        <div className="card h-50 d-flex justify-content-between" style={{backgroundColor: "var(--main-text-color)"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0"
                style={{ color: "var(--bg-color)", fontSize: "5rem" }}
              >
                10k
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Business Analyzed</h4>
            </div>
          </div>
          <div className="card h-50 d-flex justify-content-between" style={{backgroundColor: "var(--bg-color)"}}>
            <img src={Clippath} alt="img" className="align-self-end" />
            <div className="text-effect">
              <h2
                className="m-0"
                style={{ color: "var(--main-text-color)", fontSize: "5rem" }}
              >
                4.9/5
              </h2>
              <h4 className="fw-medium " style={{ color: "var(--primary-text)", fontSize: '1.3rem' }}>Business Analyzed</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
