import React, {useState, useRef, useEffect} from "react";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png";
import blog3 from "../assets/blog3.png";
import Navbar from "../Components/Navbar";

const BlogPage = () => {

    const [activeSection, setActiveSection] = useState(null);

    const marketData = {
      introduction: "When it comes to launching a business, one of the most important things you need to understand is your market size. Without a clear understanding of the size of your market, it’s impossible to know whether your business idea is viable, how big you can realistically expect to grow, and what kind of competitors you might face. This is where TAM SAM SOM analysis comes in.TAM, SAM, and SOM are three different measures of market size used to help companies understand their potential customer base. In this post, we’ll dive into what these terms mean, how to calculate them, and why they matter for your business.",
      tam: 'TAM is the total number of potential customers in your target market. This is the largest possible market size you could reach if your business captured every single customer in your target audience. It’s important to note that TAM is not a realistic measure of how big your business could get, but rather an estimate of the entire market opportunity.To calculate your TAM, start by identifying your target market. This might be a region, industry, or demographic group. Then, look for data sources that can help you estimate the total number of customers in that market. This might include government statistics, trade associations, or market research reports',
      sam: 'SAM is the section of your TAM that your business can realistically serve...',
      som: 'SOM is the portion of your SAM that you can realistically capture over a given period of time...',
      conclusion: 'Understanding your market size is crucial for launching and growing a successful business...',
    };
  
    const sectionRefs = {
      Introduction: useRef(null),
      Tam: useRef(null),
      Sam: useRef(null),
      Som: useRef(null),
      Conclusion: useRef(null),
    };
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current && ref.current.offsetTop <= scrollPosition + 100) {
          setActiveSection(section);
        }
      }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const scrollToSection = (section) => {
        window.scrollTo({
          top: sectionRefs[section].current.offsetTop - 50,
          behavior: 'smooth',
        });
      };
  

  return (
    <div style={{backgroundColor: "inherit"}}>
    {/* <Navbar/> */}
    <div
      className=" z-3 position-relative bg-white rating-container gap-4  "
      style={{padding: "10%"}}
    >

      <div className="blog-heading d-flex justify-content-between align-items-baseline ">
        <div
          className="btn mt-md-4"
          style={{ color: "var(--text-color)", cursor: "initial" }}
        >
          Pay-Per-Click Advertising (PPC)
        </div>

        <div>
          <div>Published on October 23, 2023</div>
          <div>Read time 4 min</div>
        </div>
      </div>

<div>
<h1
          className=" blog-headline "
          style={{
            fontSize: "5rem",
            color: "var( --primary-text)",
          }}
        >
          Startup Market Sizing:
Founder's Guide to TAM
SAM SOM Analysis
        </h1>
</div>

<div className="blog-img">
    <img src={blog} alt="" style={{width: "100%", borderRadius: "20px"}} />
</div>

<div className="row pt-5">
      <div className="col-4" >
        <ul className="blog-text" style={{listStyleType: 'none'}}>
          {Object.keys(marketData).map((section) => (
            <li
            style={{cursor: "pointer"}}
              key={section}
              onClick={() => scrollToSection(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-8">
        <h4 className="blog-heading-1" style={{ color: "var(--primary-text)", fontSize: "1.75rem" }}>
          Startup Market Sizing: Founder's Guide to TAM SAM SOM
        </h4>
        <section ref={sectionRefs.introduction}>
          <h2 className="blog-intro">Introduction</h2>
          <p className="blog-text">{marketData.introduction}</p>
        </section>
        <section ref={sectionRefs.tam}>
          <h2 className="blog-intro">TAM: Total Addressable Market</h2>
          <p className="blog-text">{marketData.tam}</p>
        </section>
        <section ref={sectionRefs.sam}>
          <h2 className="blog-intro">SAM: Serviceable Addressable Market</h2>
          <p className="blog-text">{marketData.sam}</p>
        </section>
        <section ref={sectionRefs.som}>
          <h2 className="blog-intro">SOM: Serviceable Obtainable Market</h2>
          <p className="blog-text">{marketData.som}</p>
        </section>
        <section ref={sectionRefs.conclusion}>
          <h2 className="blog-intro">Conclusion</h2>
          <p className="blog-text">{marketData.conclusion}</p>
        </section>
      </div>
    </div>

    </div>
    </div>
  );
};

export default BlogPage;
