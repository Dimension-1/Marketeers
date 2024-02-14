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
const createSectionRefs = (sections) => {
  return Object.keys(sections).reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});
};

const BlogContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id, "ID");
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

    fetch(
      "https://sheet.best/api/sheets/dad9f654-6401-4499-aff6-779c7c9d9c59",
      {
        method: "POST",
        body: formDatab,
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

  const blogData = [
    {
      id: 1,
      title: "Startup Market Sizing: Founder's Guide to TAM SAM SOM",
      category: " Pay-Per-Click Advertising (PPC)",
      date: "October 23, 2023",
      readTime: "Read time 4 min",
      image: blog,
      blogUrl: "blogs/1",
      heading:
        "When launching a business, understanding your potential market size is key. This is where the TAM SAM SOM analysis comes in.",
      sections: {
        Introduction:
          "When it comes to launching a business, one of the most important things you need to understand is your market size. Without a clear understanding of the size of your market, it’s impossible to know whether your business idea is viable, how big you can realistically expect to grow, and what kind of competitors you might face. This is where TAM SAM SOM analysis comes in.TAM, SAM, and SOM are three different measures of market size used to help companies understand their potential customer base. In this post, we’ll dive into what these terms mean, how to calculate them, and why they matter for your business.",
        "TAM: Total Addressable Market":
          "TAM is the total number of potential customers in your target market. This is the largest possible market size you could reach if your business captured every single customer in your target audience. It’s important to note that TAM is not a realistic measure of how big your business could get, but rather an estimate of the entire market opportunity.To calculate your TAM, start by identifying your target market. This might be a region, industry, or demographic group. Then, look for data sources that can help you estimate the total number of customers in that market. This might include government statistics, trade associations, or market research reports",
        "SAM: Serviceable Addressable Market":
          "SAM is the section of your TAM that your business can realistically serve. It excludes any portion of the market that is not within your reach. This might include customers that are too far away, too expensive to reach, or that you simply wouldn’t be able to serve for logistical reasons. Calculating your SAM requires a deep understanding of your company’s resources, capabilities, and target market. You’ll need to look at factors such as distribution, marketing, and pricing to determine how many customers you can realistically reach.",
        "SOM: Serviceable Obtainable Market":
          "SOM is the portion of your SAM that you can realistically capture over a given period of time. This number is based on your company’s resources, competition, and market conditions. For example, you might be able to realistically capture 1% of your SAM in the first year of operation but gradually grow your share to 10% by year 5.To calculate your SOM, you’ll need to consider factors such as your marketing and sales strategies, pricing, and distribution channels. You’ll also need to look at your competition to see how much of the market they already own and how much market share you could take away from them.",
        Conclusion:
          "Understanding your market size is crucial for launching and growing a successful business. TAM, SAM, and SOM analysis can help you get a better idea of your potential customer base and how big you can realistically expect to grow. By carefully calculating each of these numbers and analyzing your competition, you can make more informed decisions about your business strategy and set more accurate goals for growth. So, take the time to crunch the numbers, and use this information to guide your business decisions.",
      },
    },
    // Add data for other blogs
    {
      id: 2,
      title: " 7 Simple Steps to Ace Your Startup Market Research",
      category: "Email and SMS Marketing",
      date: "October 2, 2023",
      readTime: "4 min",
      image: blog2,
      blogUrl: "blogs/2",
      heading:
        "You've heard it before: 90% of startups vanish, often victims of inadequate research. With these 7 steps and a handful of free tools, you'll 10x your chances of success.",
      sections: {
        "Step 1: Define the Problem": [
          "Every empire's construction begins with understanding its foundation. Unearth the problem, bringing it into the limelight. Realize who’s parched for a solution, and you’ve got your opening act.",
          "In this step, your task is to crystallize the problem your venture seeks to solve. Be specific and exhaustive to ensure your solution hits the right chords. This clear definition becomes the cornerstone of your venture, guiding your product development, marketing strategy, and customer communication, ensuring they're tailored and targeted. Your original idea spark, your network’s feedback, Reddit, Twitter, and any other online community you can tap into.,  tip: Search for Twitter and Reddit threads by adding “site:twitter.com” or “site:reddit.com” to your Google searches.",
        ],
        "Step 2: Brainstorm Solutions":
          "Armed with a clear understanding of the problem you are solving, move to solutions engineering. Understand the tactics people already deploy and try to build on top of them. Are they efficient, or are they makeshift rafts on a choppy sea? Approach: Unearth existing solutions to the problem. After speaking to your network at length, dive into the web and find recent public opinions on the matter. Recognizing any gaps for a solution? Brilliant! This perspective offers a lens to visualize how your product or service stands out in solving the problem more efficiently or innovatively. Tools: Your network, Reddit, Quora, and Twitter, Facebook Communities. Pro Tip: Enter Facebook groups and act as if you are facing the problem, you are hoping to solve. Record and analyze all solutions other community members are suggesting. Test the waters by describing your solution and asking if anyone has tried something similar.",
        "Step 3: Identify Direct Competitors":
          "In the jungle of the market, know the other lions. Those treading similar paths give you valuable insights and perspectives. Learn from their moves, avoid their missteps, and fine-tune your strategy.  Approach: Spotlighting direct competitors offers a blueprint of the competitive landscape. It helps in understanding their strengths and weaknesses, enabling you to carve a unique, compelling space for your business. This analysis is crucial for differentiating your offerings, making them irresistible to your target audience. ‍Tools: Tools: If you don't know of any competitors, use Google to find at least one. Act as if you are looking for a way to solve the problem for yourself; Once you have one competitor, use WordStream, SEMRush, or Ubersuggest to find all of their keywords for free; Start searching on Google with those keywords until you collect healthy list of direct competitors; Pro Tip: Remember the previous step? You might want to add the solutions shared by other community members to your list of competitors.",
        "Step 4: Identify Indirect Competitors":
          "In the jungle of the market, know the other lions. Those treading similar paths give you valuable insights and perspectives. Learn from their moves, avoid their missteps, and fine-tune your strategy. Approach: Spotlighting direct competitors offers a blueprint of the competitive landscape. It helps in understanding their strengths and weaknesses, enabling you to carve a unique, compelling space for your business. This analysis is crucial for differentiating your offerings, making them irresistible to your target audience. Tools: Tools: If you don't know of any competitors, use Google to find at least one. Act as if you are looking for a way to solve the problem for yourself; Once you have one competitor, use WordStream, SEMRush, or Ubersuggest to find all of their keywords for free; Start searching on Google with those keywords until you collect healthy list of direct competitors; Pro Tip: Remember the previous step? You might want to add the solutions shared by other community members to your list of competitors.",
        "Step 5: Define a Competitive Price":
          "The price tag can make or break a deal. Understand your competitors’ price matrix. Strategize your pricing to offer value while ensuring healthy financial inflow. Approach: Understanding the pricing landscape helps you price your offerings competitively. It aids in identifying the sweet spot where your prices are attractive to customers and profitable for your business. This balanced pricing strategy can enhance market penetration and customer loyalty.  ‍Tools: Use Google Sheets to create a comprehensive comparative table with all of your competitors' pricing matrices. Pro tip: Utilize the AVERAGE( ) function to determine an average price point for each service level, but don't forget to exclude any outliers from the calculations..",
        "Step 6: Size Your Market Opportunity":
          "Peek into the potential market pool. Gauge the expanse of your opportunity by considering various elements, from geography to customer demographics. It’s all about knowing what to expect if things go well and if things go south. Approach: Market sizing offers a clear-eyed view of your business potential reach and revenue. It equips you with insights for resource allocation, marketing strategy, and KPI goals, ensuring your efforts and investments are channeled for optimal impact and returns. Tools: For B2C - US census data, Statista, Worldometer. For B2B - explore SUSB and its equivalent in your targer regions. Pro tip: Extrapolate regional estimates using relative GDP and population data.",
        "Step 7: Identifying Market Trends":
          "The market terrain constantly shifts. Recognize the tides and winds of change that can sway your enterprise’s journey. Stay ahead, informed, and ready to adapt to emerging trends. Approach: Unveiling market trends and growth drivers empowers your business to stay ahead of the curve. It offers a foresight to adapt and evolve, ensuring your business remains relevant, resonant, and robust amidst the shifting sands. Understand societal, political, and economic currents that could affect your enterprise's voyage. Tools: Google is always the starting point. Annual reports of the big fish in your pond often pin point the strongest observable trends. Increased investor interest and funding activity for a particular technology or subsector can show you where the market is heading.  Pro tip: For high-quality reports and scientific articles, use in your Google search query; Check out the work of Pew Research Center if you are interesting in the US market. Consider services like Trends.co, Glimpse, and Exploding Topics if you are willing to invest additionally in your market understanding.",
        Outro:
          "Here’s the quick lowdown: Step 1 is all about knowing the problem and who you’re helping. In Step 2, brainstorm how folks are currently tackling that issue and find ways to build on it. Steps 3 and 4? It’s competitor time – find 'em, list 'em, compare them. Step 5 is the money talk – set a fair price. Step 6 has you sizing up your market, seeing how big your splash could be. And Step 7, keep your ear to the ground for trends and shifts that’ll keep you ahead.  But hey, why go it alone? Team up with a pro like the seasoned experts at Marketeer to turn this sturdy start into a full-blown, fail-proof launch plan. You're not just saving time and cash (though, score!), you're setting up for a smoother ride to success. Ready? Set. Soar!",
      },
    },
    {
      id: 3,
      title: "Research and Planning for a New Business in 4 Steps",
      category: "Influencer Marketing",
      date: "September 27, 2023",
      readTime: "4 min",
      image: blog3,
      blogUrl: "blogs/3",
      heading:
        "Finally thinking of launching that business idea you've had for years? Congrats! Before you do that, here are the 4 simple steps you need to take to ensure you're thoroughly prepared.",
      sections: {
        "Knowledge is Power – The Importance of Research and Planning        ":
          "Dive right in? Hold on, eager beaver. We’ve heard the echo: 90% of startups tumble like a house of cards. Lack of research and planning? Guilty as charged. It's like heading into a maze blindfolded. The fix? Light the way with solid research and a concrete plan, your personal GPS in the business labyrinth.",
        "Step 1: Size Your Market and Identify Trends":
          "Pondering about pouring your hard-earned cash into that sparkly new venture? Hold the phone. Know the size of your playground first. It’s crucial to understand how big the pie is and your potential slice. Observe the market trends; they’re your business weather forecast. It’s not just about the now; it's about staying a step ahead. If you're seeing clouds form, you’ll want that umbrella handy.",
        "Step 2: Analyze and Segment Your Customers":
          "Here’s where we roll out the red carpet for the king – the customer. Understanding their whims and wishes is like having the key to the kingdom. Segment your customers. Tailor your products and services to their likes. And guess what? Understanding your customers’ desires has never been easier or more affordable. Customer surveys aren’t just for the corporate giants anymore. They’re your secret weapon, shining a light on what the king really wants. It’s not about selling a product; it’s about solving their problems, like a knight in shining armor.",
        "Step 3: Competitor Analysis and Pricing Strategy":
          "Got the “only fish in the sea” illusion? Toss it overboard. Even in the narrowest niches, competition lurks like sharks in the water. Understand your competition, and mold a pricing strategy that's as solid as a submarine. It’s about staying afloat amidst the business waves and coming out as the big fish.",
        "Step 4: Build a Custom Go-to-Market Strategy": [
          "All set with your arsenal of insights? Time to map the route to conquer the market. Sketch a Go-to-Market (GTM) strategy, taking into account each unique customer segment. It’s like setting the sails for a targeted journey to the island of success. A well-chalked out GTM is a compass, ensuring your business ship navigates right, avoiding the icebergs and hitting the sunny shores.",
          "A GTM strategy, brilliantly crafted, comprises clear goals, specific customer targets, well-defined channels, and a robust pricing strategy. It’s piecing together a masterpiece where every element harmoniously sings, promising a standing ovation for your business debut.",
        ],
        "In Conclusion": [
          "Roll credits on the drama of uncertainty. Light up the path of business with the spotlight of research and planning. Understand every nook and cranny of the market. Recognize your royal customers and tailor your offerings. Spot the competition, gear up strategically, and chart the route to business victory with a stellar Go-to-Market strategy.",
          "Here's the closing deal – partnering with a pro in the early chapters of your business saga is the blockbuster move. It's the script tweak ensuring your business story is a hit, saving you time, effort, and a treasure chest of cash down the lane. All aboard for a successful entrepreneurial odyssey with Marketeer!",
        ],
      },
    },
  ];

  const currentBlog = blogData.find((blog) => blog.id === parseInt(id, 10));

  const sectionRefs = createSectionRefs(currentBlog.sections);
  console.log(sectionRefs);

  useEffect(() => {
    console.log("Page loaded, scrolling to top");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollToSection = (section) => {
    console.log(`Scrolling to section: ${section}`);
    const targetRef = sectionRefs[section];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className=" z-3 bg-white blog-content-container position-relative gap-4"
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
                <img src={fb} alt="" style={{ width: "75%", height: "75%" }} />
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
          {Object.keys(currentBlog.sections).map((sectionKey, index) => (
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
          ))}

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
  );
};

export default BlogContent;
