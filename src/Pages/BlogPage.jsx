import React, {useState, useRef, useEffect} from "react";
import blog from "../assets/blog.png";
import arrow from "../assets/arrow-review.svg";
import blog2 from "../assets/blog-image2.png";
import blog3 from "../assets/blog3.png";
import Navbar from "../Components/Navbar";
import BlogContent from "../Components/BlogContent";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

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
    <div className="d-flex justify-content-center flex-column overflow-hidden " style={{ background: 'var(--bg-color)' }} >
    <Navbar/>
    <BlogContent />

    <Contact/>
    <Footer/>
    </div>
  );
};

export default BlogPage;
