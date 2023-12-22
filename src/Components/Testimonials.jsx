import React, { useState } from "react";
import photo from "../assets/author-photo.png";

const Testimonials = () => {
  const [isUpworkActive, setIsUpworkActive] = useState(true);

  const toggleButton = () => {
    setIsUpworkActive(!isUpworkActive);
  };

  return (
    <div className="d-flex justify-content-center align-items-center z-3 position-relative ">
      <div className="col-5 p-md-5 ">
        <h1 className="p-3 text-light" style={{ fontSize: "5rem" }}>
          Hear it from our clients
        </h1>
        {/* <button
          className={`btn rounded-full d-flex align-items-center justify-content-between ${
            isUpworkActive ? "btn-primary" : "btn-secondary"
          }`}
          style={{ width: "14rem", position: "relative" }}
        >
          <span className={`${isUpworkActive ? "d-block" : "d-none"}`}>
            Upwork
          </span>
          <span className={`${isUpworkActive ? "d-none" : "d-block"}`}>
            Fiverr
          </span>

          <button
            className="btn bg-white text-primary rounded-full position-absolute start-50 translate-middle"
            style={{ width: "7rem" }}
            onClick={toggleButton}
          >
            {isUpworkActive ? "Fiverr" : "Upwork"}
          </button>
        </button> */}
      </div>
      <div className="col-7 p-md-5 ">
        <div className="review-card p-4 d-flex flex-column justify-content-between ">
          <div>
          <div className="btn mt-md-4  ">241 of 324</div>
          
          <div
            className="btn mt-md-4 "
            style={{
              backgroundColor: "transparent !important",
              border: "2px solid var(--primary-text)",
              marginLeft: "2rem",
            }}
          >
            241 of 324
          </div>

          <div>
            <p className="mt-5" style={{ color: "var(--text-color)" }}>
              Working with Addifico was a pleasure. Despite needing market
              research and competitor analysis in a niche area, they delivered
              beyond my expectations. All of the work was comprehensive, well-
              structured and extremely detailed. The communication was perfect
              and they operated with great professionalism.
            </p>
          </div>
          </div>
          <div className="">
            <div className="green-border d-flex justify-content-center pt-4 "></div>
            <div className="d-flex">
              <div className="d-flex gap-3">
                <img src={photo} alt="" className="rounded" />
                <div>
                <h4 className="m-0">name</h4>
                <p style={{color: "var(--text-color)"}}>developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
