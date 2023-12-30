import React, {useState} from "react";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png"
import blog3 from "../assets/blog3.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
  console.log("Form Values:", {
    subscribe: formEle.querySelector("[name='subscribe']").value,
  });
  const formDatab = new FormData(formEle);
  console.log("FormData Object:", formDatab);
  
  
    fetch(
      "https://sheet.best/api/sheets/dad9f654-6401-4499-aff6-779c7c9d9c59",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsSuccess(true);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const blogData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

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
          Our Latest resources
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
      <div className="col-12 col-md-4 col-lg-3 d-flex flex-column">
      <Link   to={{
                  pathname: "/blogs/1",
                }}style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="">
          <img src={blog} alt="img blog-img-sm" className=" blog w-100" />
          <div className="d-flex justify-content-between">
            <p
              className="pt-2"
              style={{ color: "var(--text-color)", fontSize: "1rem" }}
            >
              Blog
            </p>
            <p
              className="pt-2"
              style={{ color: "var(--text-color)", fontSize: "1rem" }}
            >
              October 23, 2023
            </p>
          </div>
          <h4 style={{ color: "var(--primary-text)", fontSize: "1.75rem" }}>
            Startup Market Sizing: Founder's Guide to TAM SAM SOM
          </h4>
          <div
            className="btn mt-md-4"
            style={{ color: "var(--text-color)", cursor: "pointer" }}
          >
            Pay-Per-Click Advertising (PPC)
          </div>
        </div>
      </Link>
    </div>

    <div className="col-12 col-md-4 col-lg-3 d-flex flex-column ">
  <Link to={{ pathname: "/blogs/2" }} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div>
      <img src={blog2} alt="img blog-img-sm" className=" blog w-100" />
      <div className="d-flex justify-content-between">
        <p
          className="pt-2"
          style={{ color: "var(--text-color)", fontSize: "1rem" }}
        >
          Blog
        </p>
        <p
          className="pt-2"
          style={{ color: "var(--text-color)", fontSize: "1rem" }}
        >
          October 2, 2023
        </p>
      </div>
      <h4 style={{ color: "var(--primary-text)", fontSize: "1.75rem" }}>
        7 Simple Steps to Ace Your Startup Market Research
      </h4>
      <div className="btn mt-md-4" style={{ color: "var(--text-color)", cursor: "initial" }}>
        Email and SMS Marketing
      </div>
    </div>
  </Link>
</div>


<div className="col-12 col-md-4 col-lg-3 d-flex flex-column ">
  <Link to={{ pathname: "/blogs/3" }} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="">
      <img src={blog3} alt="img blog-img-sm" className=" blog w-100" />
      <div className="d-flex justify-content-between">
        <p
          className="pt-2"
          style={{ color: "var( --text-color)", fontSize: "1rem" }}
        >
          Blog
        </p>
        <p
          className="pt-2"
          style={{ color: "var( --text-color)", fontSize: "1rem" }}
        >
          September 27, 2023
        </p>
      </div>
      <h4 style={{ color: "var( --primary-text)", fontSize: "1.75rem" }}>
        Research and Planning for a New Business in 4 Steps
      </h4>
      <div
        className="btn mt-md-4"
        style={{ color: "var(--text-color)", cursor: "initial" }}
      >
        Influencer Marketing
      </div>
    </div>
  </Link>
</div>

      </div>

      <form className="form" onSubmit={(e) => Submit(e)}>

        
      
  {isSuccess ? (
    <div className="subscribe d-lg-flex d-md-flex justify-content-center align-items-center mt-md-5 subscriptions" style={{ padding: "2rem" }}>
    <div className="success" style={{
            color: "var(--primary-text)",
            fontSize: "1.3rem",
            fontWeight: "500",
            opacity: "0.8",
          }}>Thank you! You have joined our newsletter!</div>
    </div>
  ) : (
    
    <div className="subscribe d-lg-flex d-md-flex pt-3 mt-md-5 subscriptions" style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
      <div className="col-md-6 col-7 d-flex flex-column justify-content-between">
        <h2 className="w-75 subscription" style={{ fontSize: "2.5rem", color: "var(--primary-text)", fontWeight: "500" }}>
          Don't want to miss anything?
        </h2>
        <div>
          <input
            style={{
              border: "none",
              borderBottom: "0.1px solid var(--line-color)",
              outline: "none",
              backgroundColor: "transparent",
              color: "var(--text-color)",
              fontSize: "1.5rem",
              fontWeight: "500",
            }}
            type="text"
            id="subscribe"
            name="subscribe"
            placeholder="Email"
          />
          <div
            className="green-border d-flex justify-content-center pt-4 w-75 mt-2"
            style={{ borderColor: "var(--text-color)" }}
          ></div>
        </div>
      </div>
      <div className="col-md-6 col-5 d-flex flex-column justify-content-between">
        <p
          className="w-75"
          style={{
            color: "var(--primary-text)",
            fontSize: "1.3rem",
            fontWeight: "500",
            opacity: "0.8",
          }}
        >
          Sign up for our newsletter to discover winning trends before your competition!
        </p>
        <div>
          <div className="d-flex justify-content-between w-75">
            <button
              type="submit"
              className="fw-medium"
              style={{
                backgroundColor: "transparent",
                color: "var(--primary-text)",
                fontSize: "1.5rem",
              }}
            >
              Subscribe
            </button>
            <span>
              <img
                src={arrow}
                alt="Circle Image"
                style={{
                  rotate: "180deg",
                  marginLeft: "0.5rem",
                }}
              />
            </span>
          </div>
          <div
            className="green-border d-flex justify-content-center pt-4 w-75"
            style={{ borderColor: "var(--text-color)" }}
          ></div>
        </div>
      </div>
    </div>
  )}


      </form>



      <div
        className="subscribe pt-3 mt-md-5 subscription-sm"
        style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        <div className="col-12 d-flex flex-column justify-content-between ">
          <h2
            className="subscription"
            style={{
              fontSize: "2.5rem",
              color: "var( --primary-text)",
              fontWeight: "500",
            }}
          >
            Don't want to miss anything?
          </h2>
          <p
            className=""
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
          <div>
            <div className="d-flex justify-content-between w-75"> 
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
            <span>
            <img
                src={arrow} // Replace with the path to your image
                alt="Circle Image"
                style={{
                  rotate: "180deg",
                  marginLeft: "0.5rem",
                }}
              />
            </span>
            </div>
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
