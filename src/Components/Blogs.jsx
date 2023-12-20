import React from "react";
import blog from "../assets/blog.png";

const Blogs = () => {
  return (
    <div
      className=" z-3 position-relative rating-container gap-4 p-md-5  "
      style={{ backgroundColor: "var(--secondary-bg)" }}
    >
      <h1
        className="p-3 "
        style={{ fontSize: "5rem", color: "var( --primary-text)", marginLeft: "10rem" }}
      >
        Hear it from our clients
      </h1>
      <div className="cols d-flex gap-4 justify-content-center align-items-center ">
        <div className="col-3 d-flex flex-column gap-5">
          <div className="">
            <img src={blog} alt="img" className=" blog" />
            <div className="d-flex justify-content-between">
              <p style={{ color: "var( --primary-text)" }}>Blogs</p>
              <p style={{ color: "var( --primary-text)" }}>October 23, 2023</p>
            </div>
            <h4 style={{ color: "var( --primary-text)" }}>
              Startup Market Sizing: Founder's Guide to TAM SAM SOM
            </h4>
            <div className="btn mt-md-4 ">Market Sizing and Forecasting</div>
          </div>
        </div>



        <div className="col-3 d-flex flex-column ">
          <div className="">
            <img src={blog} alt="img" className=" blog" />
            <div className="d-flex justify-content-between">
              <p style={{ color: "var( --primary-text)" }}>Blogs</p>
              <p style={{ color: "var( --primary-text)" }}>October 23, 2023</p>
            </div>
            <h4 style={{ color: "var( --primary-text)" }}>
              Startup Market Sizing: Founder's Guide to TAM SAM SOM
            </h4>
            <div className="btn mt-md-4 ">Market Sizing and Forecasting</div>
          </div>
        </div>

        <div className="col-3 d-flex flex-column">
          <div className="">
            <img src={blog} alt="img" className=" blog" />
            <div className="d-flex justify-content-between">
              <p style={{ color: "var( --primary-text)" }}>Blogs</p>
              <p style={{ color: "var( --primary-text)" }}>October 23, 2023</p>
            </div>
            <h4 style={{ color: "var( --primary-text)" }}>
              Startup Market Sizing: Founder's Guide to TAM SAM SOM
            </h4>
            <div className="btn mt-md-4 ">Market Sizing and Forecasting</div>
          </div>
        </div>


      </div>

      <div className="subscribe d-flex p-md-5 m-md-5" >
        <div className="col-6 d-flex flex-column justify-content-between "  style={{ fontSize: "5rem", color: "var( --primary-text)"}}>
<h2 >Don't want to
miss anything?</h2>
<p style={{color: "var(--text-color)", fontSize: "1.6rem"}}>Email</p>
        </div>
        <div className="col-6">
<p>Sign up for our newsletter to discover
winning trends before your competition!</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
