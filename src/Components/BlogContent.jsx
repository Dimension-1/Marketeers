import React, { useState, useRef, useEffect } from "react";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png";
import blog3 from "../assets/blog3.png";
import "./BlogContent.css";
import { useParams } from "react-router-dom";
import upwork from "../assets/upwork.svg";
import Fiverr from "../assets/fiver.svg";
import linkedin from "../assets/linkedin.svg";
import meet from "../assets/meet.svg";
import goback from "../assets/goBack.svg";
import clippathblog from "../assets/clippathblog.svg";
import fb from "../assets/fb.svg";
import { Link } from "react-router-dom";


// Corrected function to create section refs
const createSectionRefs = (sections) => {
  return Object.keys(sections).reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});
};


const BlogContent = () => {
  const { id } = useParams();
  console.log(id, "ID");
  const [activeSection, setActiveSection] = useState(null);

  const blogData = [
    {
      id: 1,
      title: "Startup Market Sizing: Founder's Guide to TAM SAM SOM",
      category: " Pay-Per-Click Advertising (PPC)",
      date: "October 23, 2023",
      readTime: "Read time 4 min",
      image: blog,
      sections: {
        Introduction:
          "When it comes to launching a business, one of the most important things you need to understand is your market size. Without a clear understanding of the size of your market, it’s impossible to know whether your business idea is viable, how big you can realistically expect to grow, and what kind of competitors you might face. This is where TAM SAM SOM analysis comes in.TAM, SAM, and SOM are three different measures of market size used to help companies understand their potential customer base. In this post, we’ll dive into what these terms mean, how to calculate them, and why they matter for your business.",
        "TAM: Total Addressable Market": "TAM is the total number of potential customers in your target market. This is the largest possible market size you could reach if your business captured every single customer in your target audience. It’s important to note that TAM is not a realistic measure of how big your business could get, but rather an estimate of the entire market opportunity.To calculate your TAM, start by identifying your target market. This might be a region, industry, or demographic group. Then, look for data sources that can help you estimate the total number of customers in that market. This might include government statistics, trade associations, or market research reports",
         "SAM: Serviceable Addressable Market": "SAM is the section of your TAM that your business can realistically serve. It excludes any portion of the market that is not within your reach. This might include customers that are too far away, too expensive to reach, or that you simply wouldn’t be able to serve for logistical reasons. Calculating your SAM requires a deep understanding of your company’s resources, capabilities, and target market. You’ll need to look at factors such as distribution, marketing, and pricing to determine how many customers you can realistically reach.",
        "SOM: Serviceable Obtainable Market": "SOM is the portion of your SAM that you can realistically capture over a given period of time. This number is based on your company’s resources, competition, and market conditions. For example, you might be able to realistically capture 1% of your SAM in the first year of operation but gradually grow your share to 10% by year 5.To calculate your SOM, you’ll need to consider factors such as your marketing and sales strategies, pricing, and distribution channels. You’ll also need to look at your competition to see how much of the market they already own and how much market share you could take away from them.",
        Conclusion:
          "Understanding your market size is crucial for launching and growing a successful business. TAM, SAM, and SOM analysis can help you get a better idea of your potential customer base and how big you can realistically expect to grow. By carefully calculating each of these numbers and analyzing your competition, you can make more informed decisions about your business strategy and set more accurate goals for growth. So, take the time to crunch the numbers, and use this information to guide your business decisions.",
      },
    },
    // Add data for other blogs
    {
      id: 2,
      title: " 7 Simple Steps to Ace Your Startup Market Research",
      category: "Email and SMS Marketing",
      date: "",
      readTime: "4 min",
      image: blog2,
      sections: {
        Introduction:
          "When it comes to launching a business, one of the most important things you need to understand is your market size. Without a clear understanding of the size of your market, it’s impossible to know whether your business idea is viable, how big you can realistically expect to grow, and what kind of competitors you might face. This is where TAM SAM SOM analysis comes in.TAM, SAM, and SOM are three different measures of market size used to help companies understand their potential customer base. In this post, we’ll dive into what these terms mean, how to calculate them, and why they matter for your business.",
        TAM: "TAM is the total number of potential customers in your target market. This is the largest possible market size you could reach if your business captured every single customer in your target audience. It’s important to note that TAM is not a realistic measure of how big your business could get, but rather an estimate of the entire market opportunity.To calculate your TAM, start by identifying your target market. This might be a region, industry, or demographic group. Then, look for data sources that can help you estimate the total number of customers in that market. This might include government statistics, trade associations, or market research reports",
        Sam: "SAM is the section of your TAM that your business can realistically serve...",
        Som: "SOM is the portion of your SAM that you can realistically capture over a given period of time...",
        Conclusion:
          "Understanding your market size is crucial for launching and growing a successful business. TAM, SAM, and SOM analysis can help you get a better idea of your potential customer base and how big you can realistically expect to grow. By carefully calculating each of these numbers and analyzing your competition, you can make more informed decisions about your business strategy and set more accurate goals for growth. So, take the time to crunch the numbers, and use this information to guide your business decisions.",
      },
    },
    {
      id: 3,
      title: " 7 Simple Steps to Ace Your Startup Market Research",
      category: "Email and SMS Marketing",
      date: "",
      readTime: "4 min",
      image: blog3,
      sections: {
        Introduction:
          "When it comes to launching a business, one of the most important things you need to understand is your market size. Without a clear understanding of the size of your market, it’s impossible to know whether your business idea is viable, how big you can realistically expect to grow, and what kind of competitors you might face. This is where TAM SAM SOM analysis comes in.TAM, SAM, and SOM are three different measures of market size used to help companies understand their potential customer base. In this post, we’ll dive into what these terms mean, how to calculate them, and why they matter for your business.",
        TAM: "TAM is the total number of potential customers in your target market. This is the largest possible market size you could reach if your business captured every single customer in your target audience. It’s important to note that TAM is not a realistic measure of how big your business could get, but rather an estimate of the entire market opportunity.To calculate your TAM, start by identifying your target market. This might be a region, industry, or demographic group. Then, look for data sources that can help you estimate the total number of customers in that market. This might include government statistics, trade associations, or market research reports",
        Sam: "SAM is the section of your TAM that your business can realistically serve...",
        Som: "SOM is the portion of your SAM that you can realistically capture over a given period of time...",
        Conclusion:
          "Understanding your market size is crucial for launching and growing a successful business. TAM, SAM, and SOM analysis can help you get a better idea of your potential customer base and how big you can realistically expect to grow. By carefully calculating each of these numbers and analyzing your competition, you can make more informed decisions about your business strategy and set more accurate goals for growth. So, take the time to crunch the numbers, and use this information to guide your business decisions.",
      },
    },
  ];

  const currentBlog = blogData.find((blog) => blog.id === parseInt(id, 10));

  const sectionRefs = createSectionRefs(currentBlog.sections);
  console.log(sectionRefs);


  // const handleScroll = () => {
  //   console.log("handleScroll called");
  
  //   const scrollPosition = window.scrollY;
  //   console.log("Scroll Position:", scrollPosition);
  
  //   const activeSection = Object.keys(sectionRefs).find((section) => {
  //     const ref = sectionRefs[section];
  //     console.log(`Checking section ${section}`);
  //     console.log("Ref:", ref);
  //     console.log("Ref.current:", ref.current);
  //     console.log("Ref.current.offsetTop:", ref.current ? ref.current.offsetTop : null);
  
  //     return ref.current && (ref.current.offsetTop || 0) <= scrollPosition + 100;
  //   });
  
  //   console.log("Active Section:", activeSection);
  
  //   setActiveSection(activeSection);
  // };
  

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const scrollToSection = (section) => {
    console.log(`Scrolling to section: ${section}`);
    const targetRef = sectionRefs[section];


    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };
  
  

  return (
    <div
      className=" z-3 bg-white blog-content-container position-relative gap-4"
      style={{ padding: "10%" }}
    >
        <div className="d-flex justify-content-between mb-lg-5 mb-md-3 ">
      <div className="blog-heading d-flex flex-column col-10 justify-content-between align-items-baseline gap-3">
        <div
          className="btn mt-md-4"
          style={{ color: "var(--text-color)", cursor: "initial" }}
        >
          <span style={{color: "var(--secondary-text-color)", fontWeight: "500"}}>Resources / </span>
          {currentBlog.category}
        </div>

        <h1
          className=" blog-headline w-75"
          style={{
            fontSize: "5rem",
            color: "var( --primary-text)",
          }}
        >
          {currentBlog.title}
        </h1>
      </div>

      <div className="d-flex flex-column  col-2 justify-content-between ">
      <div>
          <div style={{ color: "var(--text-color)", fontWeight: "500"}}>Published on <span style={{color: "var(--secondary-text-color)"}}> {currentBlog.date}</span></div>
          <div className="" style={{ color: "var(--text-color)", fontWeight: "500"}}>Read time <span style={{color: "var(--secondary-text-color)"}}>4 min</span> </div>
        </div>
        <div className="d-flex align-items-baseline gap-2">
      <div className="subheading" style={{paddingBottom: "1rem" }}>Share:</div>
      <div className="icon-share d-flex gap-2">
<div className="icon">
    <img src={linkedin} alt="" />
</div>
<div className="icon">
<img src={linkedin} alt="" />
</div>
<div className="icon">
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

      <div className="row" style={{paddingTop: "7%"}}>
        <div className="col-4 toc-column">
            <button className="goBack-btn p-3 d-flex justify-content-between gap-2">
                <img src={goback} alt="" />
                Go Back
            </button>
          <div className="green-border d-flex justify-content-center mt-5 z-3 position-sticky w-75"></div>
          <div className="subheading" style={{paddingBottom: "1rem" }}>Table of contents</div>
          <ul className="subheading-content" style={{ listStyleType: "none" }}>
            {Object.keys(currentBlog.sections).map((section) => (
              <li
                style={{ cursor: "pointer", paddingBottom: "1rem" }}
                key={section}
                onClick={() => scrollToSection(section)}
                className={activeSection === section ? "active" : ""}
              >
                {section}
              </li>
            ))}
          </ul>
          <div className="green-border d-flex justify-content-center mt-5 z-3 position-sticky w-75 mb-5"></div>

          <div className="icons">
          <div className="subheading" style={{paddingBottom: "1rem" }}>Share this article:</div>

          <div className="icon-share d-flex gap-2">
<div className="icon">
    <img src={linkedin} alt="" />
</div>
<div className="icon">
<img src={linkedin} alt="" />
</div>
<div className="icon">
<img src={clippathblog} alt="" />
</div>
          </div>
          </div>
        </div>
        <div className="col-8">
          <h4
            className="blog-heading-1 pb-5"
            style={{ color: "var(--primary-text)", fontSize: "43px" }}
          >
            When launching a business, understanding your potential market size
            is key. This is where the TAM SAM SOM analysis comes in.
          </h4>
          <section ref={sectionRefs.Introduction}>
            <h2 className="blog-intro">
              {Object.keys(currentBlog.sections)[0]}
            </h2>
            <p className="blog-text">{currentBlog.sections.Introduction}</p>
          </section>
          <section ref={sectionRefs["TAM: Total Addressable Market"]}>
            <h2 className="blog-intro">
              {Object.keys(currentBlog.sections)[1]}
            </h2>
            <p className="blog-text">{currentBlog.sections["TAM: Total Addressable Market"]}</p>
          </section>
          <section ref={sectionRefs["SAM: Serviceable Addressable Market"]}>
            <h2 className="blog-intro">
              {Object.keys(currentBlog.sections)[2]}
            </h2>
            <p className="blog-text">{currentBlog.sections["SAM: Serviceable Addressable Market"]}</p>
          </section>
          <section ref={sectionRefs[Object.keys(currentBlog.sections)[4]]}>
  <h2 className="blog-intro">
    {Object.keys(currentBlog.sections)[3]}
  </h2>
  <p className="blog-text">{currentBlog.sections["SOM: Serviceable Obtainable Market"]}</p>
</section>

          <section ref={sectionRefs.Conclusion}>
            <h2 className="blog-intro">
              {Object.keys(currentBlog.sections)[4]}
            </h2>
            <p className="blog-text">{currentBlog.sections.Conclusion}</p>
          </section>


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
      <div className="col-md-6 col-5 d-flex flex-column justify-content-end">
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
        </div>



        <div className="d-flex flex-column  justify-content-center align-items-center" style={{paddingTop: "12%"}}>
          <div className="d-flex justify-content-start ">
        <h1
          className="p-3 blog-headline "
          style={{
            fontSize: "5rem",
            color: "var( --primary-text)",
          }}
        >
          Related Resources
        </h1>
        </div>
      <div className="cols blog-sm d-flex gap-4 align-items-center justify-content-center">
      <div className="col-12 col-md-4 col-lg-3 d-flex flex-column">
      <Link to="/blogs" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          <div className="">
            <img src={blog2} alt="img blog-img-sm" className=" blog w-100" />
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
                October 2, 2023
              </p>
            </div>
            <h4 style={{ color: "var( --primary-text)", fontSize: "1.75rem" }}>
              7 Simple Steps to Ace Your Startup Market Research
            </h4>
            <div className="btn mt-md-4" style={{ color: "var(--text-color)", cursor: "initial" }}>
            Email and SMS Marketing
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
            <div className="btn mt-md-4" style={{ color: "var(--text-color)", cursor: "initial" }}>
            Influencer Marketing
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default BlogContent;
