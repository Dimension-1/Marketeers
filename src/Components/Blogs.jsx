import React from "react";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png"
import blog3 from "../assets/blog3.png"

const Blogs = () => {
  return (
    <div
      className=" z-3 position-relative bg-white rating-container gap-4 p-md-5  "
      style={{}}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h1
          className="p-3 blog-headline "
          style={{
            fontSize: "5rem",
            color: "var( --primary-text)",
            marginLeft: "10rem",
          }}
        >
          Our Latest Blogs
        </h1>
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
            marginRight: "10rem",
          }}
        >
          <img
            src={arrow} // Replace with the path to your image
            alt="Circle Image"
            style={{
              width: "65%", // Ensure the image takes the full width of the circle
              height: "100%", // Ensure the image takes the full height of the circle
              rotate: "180deg",
            }}
          />
        </div>
      </div>
      <div className="cols blog-sm d-flex gap-4 justify-content-center align-items-center ">
        <div className="col-12 col-md-4 col-lg-3 d-flex flex-column ">
          <div className="">
            <img src={blog} alt="img blog-img-sm" className=" blog w-100" />
            <div className="d-flex justify-content-between">
              <p
                className="pt-2"
                style={{ color: "var( --text-color)", fontSize: "1rem" }}
              >
                Blogs
              </p>
              <p
                className="pt-2"
                style={{ color: "var( --text-color)", fontSize: "1rem" }}
              >
                October 23, 2023
              </p>
            </div>
            <h4 style={{ color: "var( --primary-text)", fontSize: "1.75rem" }}>
              Startup Market Sizing: Founder's Guide to TAM SAM SOM
            </h4>
            <div className="btn mt-md-4" style={{ color: "var(--text-color)" }}>
              Market Sizing and Forecasting
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3 d-flex flex-column ">
          <div className="">
            <img src={blog2} alt="img blog-img-sm" className=" blog w-100" />
            <div className="d-flex justify-content-between">
              <p
                className="pt-2"
                style={{ color: "var( --text-color)", fontSize: "1rem" }}
              >
                Blogs
              </p>
              <p
                className="pt-2"
                style={{ color: "var( --text-color)", fontSize: "1rem" }}
              >
                October 23, 2023
              </p>
            </div>
            <h4 style={{ color: "var( --primary-text)", fontSize: "1.75rem" }}>
              7 Simple Steps to Ace Your Startup Market Research
            </h4>
            <div className="btn mt-md-4" style={{ color: "var(--text-color)" }}>
              Business Plan & Pitch Deck
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-3 d-flex flex-column ">
          <div className="">
            <img src={blog3} alt="img blog-img-sm" className=" blog w-100" />
            <div className="d-flex justify-content-between">
              <p
                className="pt-2"
                style={{ color: "var( --text-color)", fontSize: "1rem" }}
              >
                Blogs
              </p>
              <p
                className="pt-2"
                style={{ color: "var( --text-color)", fontSize: "1rem" }}
              >
                October 23, 2023
              </p>
            </div>
            <h4 style={{ color: "var( --primary-text)", fontSize: "1.75rem" }}>
              Research and Planning for a New Business in 4 Steps
            </h4>
            <div className="btn mt-md-4" style={{ color: "var(--text-color)" }}>
              Business Plan & Pitch Deck
            </div>
          </div>
        </div>
      </div>

      <div
        className="subscribe d-flex pt-3 mt-md-5"
        style={{ height: "15rem", paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        <div className="col-md-6 col-7 d-flex flex-column justify-content-between ">
          <h2
            className="w-75 subscription"
            style={{
              fontSize: "2.5rem",
              color: "var( --primary-text)",
              fontWeight: "500",
            }}
          >
            Don't want to miss anything?
          </h2>
          <div>
            <input
              style={{
                border: "none",
                borderBottom: "0.1px solid var(--line-color)", // You can set the color of the line here
                outline: "none", // Remove the default input focus outline
                backgroundColor: "transparent",
                color: "var(--text-color)",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
              placeholder="Email"
            />
            <div
              className="green-border d-flex justify-content-center pt-4 w-75 mt-2"
              style={{ borderColor: "var(--text-color)" }}
            ></div>
          </div>
        </div>
        <div className="col-md-6 col-5 d-flex flex-column justify-content-between ">
          <p
            className="w-75"
            style={{
              color: "var(--primary-text)",
              fontSize: "1.3rem",
              fontWeight: "500",
              opacity: "0.8",
            }}
          >
            Sign up for our newsletter to discover winning trends before your
            competition!
          </p>
          <div>
            <p
              className="fw-medium"
              style={{
                backgroundColor: "transparent",
                color: "var(--primary-text)",
                fontSize: "1.5rem",
              }}
            >
              Subscribe
            </p>
            <div
              className="green-border d-flex justify-content-center pt-4 w-75"
              style={{ borderColor: "var(--text-color)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
