import React, { useState, useRef, useEffect } from "react";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png";
import blog3 from "../assets/blog3.png";
import "./BlogContent.css";
import { useParams } from "react-router-dom";
import upwork from "../assets/upwork.svg";
import Fiverr from "../assets/fiver.svg";
import linkedin from "../assets/iconlinkedin.svg";
import meet from "../assets/meet.svg";
import goback from "../assets/goBack.svg";
import clippathblog from "../assets/clippathblog.svg";
import fb from "../assets/fb.svg";
import { Link, useNavigate } from "react-router-dom";

// Corrected function to create section refs
// const createSectionRefs = (sections) => {
//   return Object.keys(sections).reduce((acc, section) => {
//     acc[section] = useRef(null);
//     return acc;
//   }, {});
// };

const BlogContent = ({ blogData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    console.log("Form Values:", {
      subscribe: formEle.querySelector("[name='subscribe']").value,
    });
    const formDatab = new FormData(formEle);
    console.log("FormData Object:", formDatab);

    // fetch(
    //   "https://sheetdb.io/api/v1/hdreqxp52ghx1",
    //   {
    //     method: "GET",
    //   }
    // )
    //   // .then((res) => res.json())
    //   .then((data) => {
    //     setIsSuccess(true);
    //     setBlogData(data)
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  const goBack = () => {
    navigate(-1); // This is equivalent to history.goBack()
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const copyBlogLinkToClipboard = () => {
    const currentBlogUrl = `${window.location.origin}/${currentBlog.blogUrl}`;
    copyToClipboard(currentBlogUrl);
  };

  const shareOnInstagram = () => {
    const instagramMessage = `Check out this blog: ${currentBlog.title}\n${window.location.origin}/${currentBlog.blogUrl}`;

    // Correct the construction of the Instagram web URL
    const instagramWebUrl = `https://www.instagram.com/?url=${encodeURIComponent(
      `${window.location.origin}/${currentBlog.blogUrl}`
    )}`;

    // Open the Instagram web URL directly, as Instagram doesn't have a public API for direct sharing
    window.open(instagramWebUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        `${window.location.origin}/${currentBlog.blogUrl}`
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        `${window.location.origin}/${currentBlog.blogUrl}`
      )}&text=${encodeURIComponent(currentBlog.title)}&via=yourTwitterHandle`,
      "_blank"
    );
  };

  // const currentBlog = blogData[0];
  const currentBlog = blogData.find((blog) => blog.id == id);

  // const sectionRefs = createSectionRefs(currentBlog);

  useEffect(() => {
    console.log("Page loaded, scrolling to top");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // const scrollToSection = (section) => {
  //   console.log(`Scrolling to section: ${section}`);
  //   const targetRef = sectionRefs[section];

  //   if (targetRef && targetRef.current) {
  //     window.scrollTo({
  //       top: targetRef.current.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    blogData.length > 0 && (
      <div
        className=" z-3 bg-white blog-content-container position-relative gap-4 blog-content-wholeDiv"
        id="blog-section-1"
        style={{ padding: "10%" }}
      >
        <div className="d-flex justify-content-between mb-lg-5 mb-md-3 sm-col">
          <div className="blog-heading d-flex flex-column justify-content-between align-items-baseline gap-3 ">
            <Link
              to={"/resources/all"}
              className="btn mt-md-4 button-bigt"
              style={{ color: "var(--main-text-color)", cursor: "pointer" }}
            >
              <span
                style={{
                  color: "var(--secondary-text-color)",
                  fontWeight: "500",
                }}
              >
                Resources /{" "}
              </span>
              {currentBlog.category}
            </Link>

            <h1
              className=" blog-headline w-75 slide-up"
              style={{
                fontSize: "5rem",
                color: "var( --primary-text)",
              }}
            >
              {currentBlog.title}
            </h1>
          </div>

          <div className="d-flex flex-column  justify-content-between ">
            <div>
              <div style={{ color: "var(--text-color)", fontWeight: "500" }}>
                Published on{" "}
                <span style={{ color: "var(--secondary-text-color)" }}>
                  {" "}
                  {currentBlog.date}
                </span>
              </div>
              <div
                className=""
                style={{ color: "var(--text-color)", fontWeight: "500" }}
              >
                Read time{" "}
                <span style={{ color: "var(--secondary-text-color)" }}>
                  4 min
                </span>{" "}
              </div>
            </div>
            <div
              className="icon-sm align-items-center gap-2"
              style={{ display: "flex" }}
            >
              <div className="subheading">Share:</div>
              <div className="icon-share d-flex gap-2">
                <div
                  className="icon button-bigt"
                  style={{ width: "30%", cursor: "pointer" }}
                  onClick={shareOnLinkedIn}
                >
                  <img src={linkedin} alt="linkedin" />
                </div>
                <div
                  className="icon button-bigt"
                  style={{ width: "30%", height: "15%", cursor: "pointer" }}
                  onClick={shareOnTwitter}
                >
                  <img src={fb} alt="facebook" />
                </div>
                <div
                  className="icon button-bigt"
                  style={{ width: "30%", height: "15%", cursor: "pointer" }}
                  onClick={shareOnInstagram}
                >
                  <img src={clippathblog} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-img">
          <img
            src={currentBlog.image}
            alt=""
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </div>
        <div className="row" style={{ paddingTop: "7%" }}>
          {/* sidebar */}
          <div className="col-4 toc-column ">
            <button
              className="goBack-btn p-3 d-flex justify-content-between gap-2 button-bigt"
              onClick={goBack}
            >
              <img src={goback} alt="" />
              Go Back
            </button>
            <div className="green-border d-flex justify-content-center mt-5 z-3 position-sticky w-75"></div>
            <div className="subheading" style={{ paddingBottom: "1rem" }}>
              Table of contents
            </div>
            <ul
              className="subheading-content"
              style={{ listStyleType: "none" }}
            >
              {/* {Object.keys(currentBlog.sections).map((section) => (
              <li
                style={{ cursor: "pointer", paddingBottom: "1rem" }}
                key={section}
                onClick={() => scrollToSection(section)}
                className={activeSection === section ? "active" : ""}
              >
                {section}
              </li>
            ))} */}
              <li style={{ cursor: "pointer", paddingBottom: "1rem" }}>
                <p className="" style={{ color: "grey" }}>
                  {currentBlog.sectionH1}
                </p>
              </li>
              <li style={{ cursor: "pointer", paddingBottom: "1rem" }}>
                <p className="" style={{ color: "grey" }}>
                  {currentBlog.sectionH2}
                </p>
              </li>
              <li style={{ cursor: "pointer", paddingBottom: "1rem" }}>
                <p className="" style={{ color: "grey" }}>
                  {currentBlog.sectionH3}
                </p>
              </li>
              <li style={{ cursor: "pointer", paddingBottom: "1rem" }}>
                <p className="" style={{ color: "grey" }}>
                  {currentBlog.sectionH4}
                </p>
              </li>
            </ul>
            <div className="green-border d-flex justify-content-center mt-5 z-3 position-sticky w-75 mb-5"></div>

            <div className="icons">
              <div className="subheading" style={{ paddingBottom: "1rem" }}>
                Share this article:
              </div>

              <div className="icon-share d-flex gap-2">
                <div
                  className="icon button-bigt"
                  style={{ width: "15%", height: "15%", cursor: "pointer" }}
                  onClick={shareOnLinkedIn}
                >
                  <img
                    src={linkedin}
                    alt=""
                    style={{ width: "75%", height: "75%" }}
                  />
                </div>
                <div
                  className="icon button-bigt"
                  style={{ width: "15%", height: "15%", cursor: "pointer" }}
                  onClick={shareOnTwitter}
                >
                  <img
                    src={fb}
                    alt=""
                    style={{ width: "75%", height: "75%" }}
                  />
                </div>
                <div
                  className="icon button-bigt"
                  style={{ width: "15%", height: "15%", cursor: "pointer" }}
                  onClick={shareOnInstagram}
                >
                  <img
                    src={clippathblog}
                    alt=""
                    style={{ width: "75%", height: "75%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <h4
              className="blog-heading-1 pb-5"
              style={{ color: "var(--primary-text)", fontSize: "43px" }}
            >
              {currentBlog.heading}
            </h4>
            {/* {Object.keys(currentBlog.sections).map((sectionKey, index) => (
            <section key={index} ref={sectionRefs[sectionKey]}>
              <h2 className="blog-intro">{sectionKey}</h2>
              {Array.isArray(currentBlog.sections[sectionKey]) ? (
                // If content is an array (multiple paragraphs)
                currentBlog.sections[sectionKey].map((paragraph, pIndex) => (
                  <p key={pIndex} className="blog-text">
                    {paragraph}
                  </p>
                ))
              ) : (
                // If content is a single paragraph
                <p className="blog-text">{currentBlog.sections[sectionKey]}</p>
              )}
            </section>
          ))} */}
            <section>
              <h2 className="blog-intro">{currentBlog.sectionH1}</h2>
              <p className="blog-text">{currentBlog.sectionDes1}</p>
            </section>
            <section>
              <h2 className="blog-intro">{currentBlog.sectionH2}</h2>
              <p className="blog-text">{currentBlog.sectionDes2}</p>
            </section>
            <section>
              <h2 className="blog-intro">{currentBlog.sectionH3}</h2>
              <p className="blog-text">{currentBlog.sectionDes3}</p>
            </section>
            <section>
              <h2 className="blog-intro">{currentBlog.sectionH4}</h2>
              <p className="blog-text">{currentBlog.sectionDes4}</p>
            </section>

            <form className="form" onSubmit={(e) => Submit(e)}>
              {isSuccess ? (
                <div
                  className="subscribe d-lg-flex d-md-flex justify-content-center align-items-center mt-md-5 subscriptions"
                  style={{ padding: "2rem" }}
                >
                  <div
                    className="success"
                    style={{
                      color: "var(--primary-text)",
                      fontSize: "1.3rem",
                      fontWeight: "500",
                      opacity: "0.8",
                    }}
                  >
                    Thank you! You have joined our newsletter!
                  </div>
                </div>
              ) : (
                <div
                  className="subscribe d-lg-flex d-md-flex pt-3 mt-md-5 subscriptions"
                  style={{
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                    backgroundColor: "rgb(138, 171, 196, 0.4)",
                  }}
                >
                  <div className="col-md-7 col-7 d-flex flex-column justify-content-between">
                    <h2
                      className="w-75 subscription"
                      style={{
                        fontSize: "2.5rem",
                        color: "var(--primary-text)",
                        fontWeight: "500",
                      }}
                    >
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
                  <div className="col-md-5 col-5 d-flex flex-column justify-content-end">
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
          </div>

          <div
            style={{ paddingLeft: "7%", paddingRight: "7%", paddingTop: "7%" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h1
                className="pt-3 pb-3 blog-headline "
                style={{
                  fontSize: "5rem",
                  color: "var( --primary-text)",
                }}
              >
                Related Resources
              </h1>
              <div
                className="arrow-sm"
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
                    rotate: "180deg",
                  }}
                />
              </div>
            </div>
            <div className="cols blog-sm d-flex gap-4 justify-content-center align-items-start ">
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column blogsOnLandingPage">
                <Link
                  to={{
                    pathname: "/blogs/1",
                  }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div>
                    <div className="blogsOnLandingPage-imgDiv">
                      <img
                        src={blog}
                        alt="img blog-img-sm"
                        className=" blog w-100"
                      />
                      <h6>Read more</h6>
                    </div>

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
                    <h4
                      style={{
                        color: "var(--primary-text)",
                        fontSize: "1.75rem",
                      }}
                    >
                      Startup Market Sizing: Founder's Guide to TAM ...
                      {/* Startup Market Sizing: Founder's Guide to TAM SAM SOM */}
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

              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column  blogsOnLandingPage">
                <Link
                  to={{ pathname: "/blogs/2" }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div>
                    <div className="blogsOnLandingPage-imgDiv">
                      <img
                        src={blog2}
                        alt="img blog-img-sm"
                        className=" blog w-100"
                      />
                      <h6>Read more</h6>
                    </div>
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
                    <h4
                      style={{
                        color: "var(--primary-text)",
                        fontSize: "1.75rem",
                      }}
                    >
                      7 Simple Steps to Ace Your Startup Market Research
                    </h4>
                    <div
                      className="btn mt-md-4"
                      style={{ color: "var(--text-color)", cursor: "initial" }}
                    >
                      Email and SMS Marketing
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column blogsOnLandingPage ">
                <Link
                  to={{ pathname: "/blogs/3" }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="">
                    <div className="blogsOnLandingPage-imgDiv">
                      <img
                        src={blog3}
                        alt="img blog-img-sm"
                        className=" blog w-100"
                      />
                      <h6>Read more</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p
                        className="pt-2"
                        style={{
                          color: "var( --text-color)",
                          fontSize: "1rem",
                        }}
                      >
                        Blog
                      </p>
                      <p
                        className="pt-2"
                        style={{
                          color: "var( --text-color)",
                          fontSize: "1rem",
                        }}
                      >
                        September 27, 2023
                      </p>
                    </div>
                    <h4
                      style={{
                        color: "var( --primary-text)",
                        fontSize: "1.75rem",
                      }}
                    >
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
            
          </div>
        </div>
      </div>
    )
  );
};

export default BlogContent;
