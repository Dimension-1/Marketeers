import React, { useState } from "react";
import photo from "../assets/author-photo.png";
import arrow from "../assets/arrow-review.svg";
import image from "../assets/DesktopBlue.svg";
import FeedbackSliderPC from "./FeedbackSliderPC";

const Testimonials = () => {
  const [activeButton, setActiveButton] = useState("Fiver");
  const activeText = "UpWork";
  const inactiveText = "Fiverr";
  const [isActive, setIsActive] = useState(true);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

 

  return (
    <div className="position-relative ">
      <div
        className="d-flex testimonials-md justify-content-center align-items-center z-3 position-relative "
        style={{ paddingTop: "10%", paddingBottom: "10%" }}
      >
        <div
          className="col-lg-5 col-12 p-lg-3 testimonials-section-1"
          style={{ display: "grid", placeContent: "center" }}
        >
          <h1 className=" text-light-bg" style={{ fontSize: "5rem" }}>
            Hear it from
          </h1>
          <h1 className=" text-light-bg" style={{ fontSize: "5rem" }}>
            our clients
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
          <FeedbackSliderPC />
        </div>
      </div>
      <div className="img-overlay-5 position-absolute z-0">
        <img src={image} alt="" className="" />
      </div>
    </div>
  );
};

export default Testimonials;
