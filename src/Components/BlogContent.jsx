import React, {useState, useRef, useEffect} from "react";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png";
import blog3 from "../assets/blog3.png";
import "./BlogContent.css";
import { useParams } from 'react-router-dom';

const createSectionRefs = (sections) => {
    return Object.entries(sections).reduce((acc, [section, content]) => {
      acc[section] = useRef(null);
      return acc;
    }, {});
  };
  

const BlogContent = ({id}) => {
    console.log(id, 'ID')
    const [activeSection, setActiveSection] = useState(null);

    const blogData = [
        {
          id: 1,
          title: "Startup Market Sizing: Founder's Guide to TAM SAM SOM",
          category: "Resources / Pay-Per-Click Advertising (PPC)",
          date: "Published on October 23, 2023",
          readTime: "Read time 4 min",
          image: blog,
          sections: {
            Introduction: "When it comes to launching a business, one of the most important things you need to understand is your market size. Without a clear understanding of the size of your market, it’s impossible to know whether your business idea is viable, how big you can realistically expect to grow, and what kind of competitors you might face. This is where TAM SAM SOM analysis comes in.TAM, SAM, and SOM are three different measures of market size used to help companies understand their potential customer base. In this post, we’ll dive into what these terms mean, how to calculate them, and why they matter for your business.",
      Tam: 'TAM is the total number of potential customers in your target market. This is the largest possible market size you could reach if your business captured every single customer in your target audience. It’s important to note that TAM is not a realistic measure of how big your business could get, but rather an estimate of the entire market opportunity.To calculate your TAM, start by identifying your target market. This might be a region, industry, or demographic group. Then, look for data sources that can help you estimate the total number of customers in that market. This might include government statistics, trade associations, or market research reports',
      Sam: 'SAM is the section of your TAM that your business can realistically serve...',
      Som: 'SOM is the portion of your SAM that you can realistically capture over a given period of time...',
      Conclusion: 'Understanding your market size is crucial for launching and growing a successful business...',
          },
        },
        // Add data for other blogs
        {
          id: 2,
          title: "Your Second Blog Title",
          category: "Your Second Blog Category",
          date: "Published on ...",
          readTime: "Read time ...",
          image: blog2,
          sections: {
            Introduction: "When it comes to launching a business, one of the most important things you need to understand is your market size. Without a clear understanding of the size of your market, it’s impossible to know whether your business idea is viable, how big you can realistically expect to grow, and what kind of competitors you might face. This is where TAM SAM SOM analysis comes in.TAM, SAM, and SOM are three different measures of market size used to help companies understand their potential customer base. In this post, we’ll dive into what these terms mean, how to calculate them, and why they matter for your business.",
            TAM: 'TAM is the total number of potential customers in your target market. This is the largest possible market size you could reach if your business captured every single customer in your target audience. It’s important to note that TAM is not a realistic measure of how big your business could get, but rather an estimate of the entire market opportunity.To calculate your TAM, start by identifying your target market. This might be a region, industry, or demographic group. Then, look for data sources that can help you estimate the total number of customers in that market. This might include government statistics, trade associations, or market research reports',
      Sam: 'SAM is the section of your TAM that your business can realistically serve...',
      Som: 'SOM is the portion of your SAM that you can realistically capture over a given period of time...',
      Conclusion: 'Understanding your market size is crucial for launching and growing a successful business...',
          },
        },
        // Add data for other blogs
        // ...
      ];
    
      const currentBlog = blogData.find(blog => blog.id === parseInt(id, 10));

  // Create section refs using the custom function
  const sectionRefs = useRef(createSectionRefs(currentBlog.sections));

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log('Scroll Position:', scrollPosition);
  
    for (const [section, ref] of Object.entries(sectionRefs.current)) {
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
    const targetRef = sectionRefs.current[section];
  
    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div
      className=" z-3 bg-white blog-content-container position-relative gap-4"
      style={{padding: "10%"}}
    >

      <div className="blog-heading d-flex justify-content-between align-items-baseline ">
        <div
          className="btn mt-md-4"
          style={{ color: "var(--text-color)", cursor: "initial" }}
        >
          {currentBlog.category}
        </div>

        <div>
          <div>{currentBlog.date}</div>
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
          {currentBlog.title}
        </h1>
</div>

<div className="blog-img">
    <img src={blog} alt="" style={{width: "100%", borderRadius: "20px"}} />
</div>



<div className="row pt-5">
      <div className="col-4" >
      <div
                className="green-border d-flex justify-content-center mt-5 z-3 position-sticky w-75"
              ></div>
              <div className="subheading">Table of contents</div>
      <ul className="subheading-content" style={{ listStyleType: 'none' }}>
  {Object.keys(currentBlog.sections).map((section) => (
    <li
      style={{ cursor: "pointer" }}
      key={section}
      onClick={() => scrollToSection(section)}
      className={activeSection === section ? 'active' : ''}
    >
      {section}
    </li>
  ))}
</ul>
<div
                className="green-border d-flex justify-content-center mt-5 z-3 position-sticky w-75"
             
              ></div>
      </div>
      <div className="col-8">
        <h4 className="blog-heading-1 pb-5" style={{ color: "var(--primary-text)", fontSize: "43px" }}>
        When launching a business,
understanding your potential market
size is key. This is where the TAM
SAM SOM analysis comes in.
        </h4>
        <section ref={sectionRefs.introduction}>
          <h2 className="blog-intro">{Object.keys(currentBlog.sections)[0]}</h2>
          <p className="blog-text">{currentBlog.sections.Introduction}</p>
        </section>
        <section ref={sectionRefs.tam}>
          <h2 className="blog-intro">{Object.keys(currentBlog.sections)[1]}</h2>
          <p className="blog-text">{currentBlog.sections.Tam}</p>
        </section>
        <section ref={sectionRefs.sam}>
          <h2 className="blog-intro">{Object.keys(currentBlog.sections)[2]}</h2>
          <p className="blog-text">{currentBlog.sections.Sam}</p>
        </section>
        <section ref={sectionRefs.som}>
          <h2 className="blog-intro">{Object.keys(currentBlog.sections)[3]}</h2>
          <p className="blog-text">{currentBlog.sections.Som}</p>
        </section>
        <section ref={sectionRefs.conclusion}>
          <h2 className="blog-intro">{Object.keys(currentBlog.sections)[4]}</h2>
          <p className="blog-text">{currentBlog.sections.Conclusion}</p>
        </section>
      </div>
    </div>

    </div>
  );
};

export default BlogContent;
