import React, { useState } from "react";
import Box from "@mui/material/Box";
import photo from "../assets/author-photo.png";
import arrow from "../assets/arrow-review.svg";
import image from "../assets/DesktopBlue.svg";
import FeedbackSliderPC from "./FeedbackSliderPC";

const Testimonials = () => {
  const [activeButton, setActiveButton] = useState("Fiver");
  const [filter , setFilter] = useState("UpWork");
  const activeText = "UpWork";
  const inactiveText = "Fiverr";
  const [isActive, setIsActive] = useState(true);

  const toggleButton = (filter) => {
    // setIsActive(!isActive);
    setFilter(filter)
  };

 

  return (
    <div className="position-relative ">
      <div
        className="d-flex justify-content-center align-items-center z-3 position-relative "
        style={{ paddingTop: "10%", paddingBottom: "10%", paddingLeft:"4%", paddingRaght:"4%" }}
      >
        <div
          className="col-lg-5 col-12 p-lg-3 testimonials-section-1"
          style={{ display: "grid", placeContent: "center" }}
        >
          <h2 className=" text-light-bg mb-0" style={{ fontFamily: "MyCustomFont", fontSize: "5rem",lineHeight:"1"}}>
            Hear it from
          </h2>
          <h2 className=" text-light-bg mb-0 " style={{fontFamily: "MyCustomFont", fontSize: "5rem",lineHeight:"1"}}>
            our clients
          </h2>
          {/* <button
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
          </button> */}
          {/* </Box> */}
          <Box
            sx={{ marginTop: "15px", marginLeft: "16%", marginRight: "12.5%" }}
            className="resources-navbar"
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                border: "2px solid rgba(220,239,216,.07)",
                boxSizing: "border-box",
                borderRadius: "35px",
                width: "fit-content",
                cursor: "pointer",
                padding: "1px",
              }}
              className="resources-navbar-content"
            >
              <button
                style={{
                  padding: "10px 30px",
                  color: filter === "UpWork" ? "#262d29" : "rgba(220,239,216,.7)",
                  backgroundColor:
                    filter === "UpWork" ? "var(--main-text-color)" : "transparent",
                  borderRadius: "35px",
                  outline: "none",
                  border: "none",
                  fontSize: "17px",
                  cursor: "pointer",
                  fontFamily:"MyCustomFont",
                }}
                onClick={() => toggleButton("UpWork") }
              >
                UpWork
              </button>
              <button
                style={{
                  padding: " 10px 30px",
                  color: filter === "Fiverr" ? "#262d29" : "rgba(220,239,216,.7)",
                  backgroundColor:
                    filter === "Fiverr"
                      ? "var(--main-text-color)"
                      : "transparent",
                  borderRadius: "35px",
                  outline: "none",
                  border: "none",
                  fontSize: "17px",
                  cursor: "pointer",
                  fontFamily:"MyCustomFont",
                }}
                onClick={() => toggleButton("Fiverr")}
              >
                Fiverr
              </button>
            </Box>
          </Box>
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
