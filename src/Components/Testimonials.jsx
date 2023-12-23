import React, { useState } from "react";
import photo from "../assets/author-photo.png";
import arrow from "../assets/arrow-review.svg";


const Testimonials = () => {
  const [activeButton, setActiveButton] = useState('Fiver');
  const activeText = "UpWork";
  const inactiveText="Fiverr"
  const [isActive, setIsActive] = useState(true);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="d-flex justify-content-center align-items-center z-3 position-relative " style={{padding: "10%"}}>
      <div className="col-5 p-md-5 ">
        <h1 className="p-3 text-light" style={{ fontSize: "5rem" }}>
          Hear it from our clients
        </h1>
        <button
      className="d-flex position-relative align-items-center justify-content-between "
      style={{
        width: '18rem',
        backgroundColor: 'var(--background-color)',
        borderRadius: '20rem',
        background: 'transparent',
        padding: '1rem',
        border: '3px solid var(--input-fields)',
        color: 'var(--secondary-bg)',
        fontSize: '1.25rem',
        position: 'relative',
        overflow: 'hidden', // Ensure that the inner button doesn't overflow
      }}
      onClick={toggleButton} // Handle the click event on the entire button
    >
      <button
        className={`position-absolute focus-outline-none transition-transform ${
          isActive ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: '9rem',
          backgroundColor: 'var(--main-text-color)',
          color: 'var(--bg-color)',
          borderRadius: '20rem',
          padding: '1rem',
          right: isActive ? '0' : 'auto', // Move to the right when active
          left: isActive ? 'auto' : '0', // Move to the left when inactive
        }}
      >
        {isActive ? activeText : inactiveText}
      </button>

      <div
        className="absolute inset-0 d-flex "
        style={{
          right: isActive ? '0' : 'auto', // Move to the right when active
          left: isActive ? 'auto' : '0',
         marginLeft: "1rem"
        }}
      >
        <span>{isActive ? inactiveText : activeText}</span>
      </div>
      <div
        className="absolute inset-0 d-flex "
        style={{
          right: isActive ? '0' : 'auto', // Move to the right when active
          left: isActive ? 'auto' : '0',
          marginRight: "1rem"
        }}
      >
        <span>Upwork</span>
      </div>
    </button>
      </div>
      <div className="col-7 p-md-5 d-flex justify-content-center align-items-center gap-5">
      <div
              style={{
                borderRadius: "50%", // Make it a circle
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
    src={arrow} // Replace with the path to your image
    alt="Circle Image"
    style={{
      width: "65%", // Ensure the image takes the full width of the circle
      height: "100%", // Ensure the image takes the full height of the circle
    }}
  />
            </div>
        <div className="review-card p-4 d-flex flex-column justify-content-between ">
          <div>
          <div className="btn mt-md-4 bg-opacity">241 of 324</div>
          
          <div
            className="btn mt-md-4 "
            style={{
              backgroundColor: "transparent !important",
              border: "2px solid var(--background-color-opacity)",
              marginLeft: "2rem",
            }}
          >
           Read More
          </div>

          <div>
            <p className="mt-5" style={{ color: "var(--background-color)", lineHeight: "1.5" }}>
              Working with Addifico was a pleasure. Despite needing market
              research and competitor analysis in a niche area, they delivered
              beyond my expectations. All of the work was comprehensive, well-
              structured and extremely detailed. The communication was perfect
              and they operated with great professionalism.
            </p>
          </div>
          </div>
          <div className="">
            <div className="green-border d-flex justify-content-center pt-4 " style={{borderTop: '0.1px solid var(--text-color)',}}></div>
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
        <div
              style={{
                borderRadius: "50%", // Make it a circle
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
    src={arrow} // Replace with the path to your image
    alt="Circle Image"
    style={{
      width: "65%", // Ensure the image takes the full width of the circle
      height: "100%", // Ensure the image takes the full height of the circle
      rotate: "180deg"
    }}
  />
            </div>
      </div>
    </div>
  );
};

export default Testimonials;
