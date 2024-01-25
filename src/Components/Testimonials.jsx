import React, { useState } from "react";
import photo from "../assets/author-photo.png";
import arrow from "../assets/arrow-review.svg";
import image from "../assets/DesktopBlue.svg";

const Testimonials = () => {
  const [activeButton, setActiveButton] = useState("Fiver");
  const activeText = "UpWork";
  const inactiveText = "Fiverr";
  const [isActive, setIsActive] = useState(true);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const testimonials = [
    {
      content: "marketeers's team transformed our digital presence. Their SEO strategies skyrocketed our website traffic, and the leads we're getting now are just phenomenal. It's like they unlocked a whole new level of growth for us.",
      place: "Bangalore, India",
      person: "Tech Startup Founder",
    },
  
  ];

  return (
    <div className="position-relative ">
      <div
        className="d-flex testimonials-md justify-content-center align-items-center z-3 position-relative "
        style={{ paddingTop: "10%", paddingBottom: "10%" }}
      >
        <div className="col-lg-5 col-12 p-lg-3 testimonials-section-1">
          <h1 className="p-3 text-light-bg" style={{ fontSize: "5rem" }}>
            Hear it from our clients
          </h1>
          <button
            className="d-flex position-relative align-items-center justify-content-between "
            style={{
              width: "18rem",
              backgroundColor: "var(--background-color)",
              borderRadius: "20rem",
              background: "transparent",
              padding: "1rem",
              border: "3px solid var(--input-fields)",
              color: "var(--secondary-bg)",
              fontSize: "1.25rem",
              position: "relative",
              overflow: "hidden",
            }}
            onClick={toggleButton}
          >
            <button
              className={`position-absolute focus-outline-none transition-transform ${
                isActive ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                width: "9rem",
                backgroundColor: "var(--main-text-color)",
                color: "var(--bg-color)",
                borderRadius: "20rem",
                padding: "1rem",
                right: isActive ? "0" : "auto",
                left: isActive ? "auto" : "0",
              }}
            >
              {isActive ? activeText : inactiveText}
            </button>

            <div
              className="absolute inset-0 d-flex "
              style={{
                right: isActive ? "0" : "auto",
                left: isActive ? "auto" : "0",
                marginLeft: "1rem",
              }}
            >
              <span>{isActive ? inactiveText : activeText}</span>
            </div>
            <div
              className="absolute inset-0 d-flex "
              style={{
                right: isActive ? "0" : "auto",
                left: isActive ? "auto" : "0",
                marginRight: "1rem",
              }}
            >
              <span>Upwork</span>
            </div>
          </button>
        </div>
        <div className="col-lg-7 col-12 testimonials-section-1 p-lg-3 d-flex justify-content-center align-items-center gap-md-5 gap-lg-5 gap-1">
        <div
                className="circle-review"
                style={{
                  borderRadius: "50%",
                  background: "var(--custom-btn)",
                  display: "flex",
                  width: "64.75px",
                  height: "64.75px",
                  padding: "17.82px 19.46px 17.81px 19.42px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={arrow}
                  alt="Circle Image"
                  style={{
                    width: "65%",
                    height: "100%",
                  }}
                />
              </div>
          {testimonials.map((testimonial, index) => (

            <div key={index} className="testimonial-container">
              
              <div className="review-card p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="btn mt-md-4 bg-opacity">241 of 324</div>
                  <div
                    className="btn mt-md-4 "
                    style={{
                      backgroundColor: "transparent !important",
                      border: "2px solid var(--custom-btn)",
                      marginLeft: "2rem",
                    }}
                  >
                    Read More
                  </div>
                  <div>
                    <p
                      className="mt-5"
                      style={{
                        color: "var(--background-color)",
                        lineHeight: "1.5",
                      }}
                    >
                      {testimonial.content}
                    </p>
                  </div>
                </div>
                <div className="">
                  <div
                    className="green-border d-flex justify-content-center pt-4"
                    style={{ borderTop: "0.1px solid var(--text-color)" }}
                  ></div>
                  <div className="d-flex">
                    <div className="d-flex gap-3">
                      <img src={photo} alt="" className="rounded" />
                      <div>
                        <h4 className="m-0">{testimonial.person}</h4>
                        <p style={{ color: "var(--text-color)" }}>
                          {testimonial.place}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          ))}
           <div
                className="circle-review"
                style={{
                  borderRadius: "50%",
                  background: "var(--custom-btn)",
                  display: "flex",
                  width: "64.75px",
                  height: "64.75px",
                  padding: "17.82px 19.46px 17.81px 19.42px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={arrow}
                  alt="Circle Image"
                  style={{
                    width: "65%",
                    height: "100%",
                    rotate: "180deg",
                  }}
                />
              </div>
        </div>
      </div>
      <div className="img-overlay-5 position-absolute z-0">
        <img src={image} alt="" className="" />
      </div>
    </div>
  );
};

export default Testimonials;
