import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import photo from "../assets/author-photo.png";
import { duration } from "@mui/material";
export default function FeedbackSliderPC() {
  const testimonials = [
    {
      content:
        "marketeers's team transformed our digital presence. Their SEO strategies skyrocketed our website traffic, and the leads we're getting now are just phenomenal. It's like they unlocked a whole new level of growth for us.",
      place: "Bangalore, India",
      person: "Tech Startup Founder",
    },
    {
      content:
        "marketeers's team transformed our digital presence. Their SEO strategies skyrocketed our website traffic, and the leads we're getting now are just phenomenal. It's like they unlocked a whole new level of growth for us.",
      place: "Bangalore, India",
      person: "Tech Startup Founder",
    },
    {
      content:
        "marketeers's team transformed our digital presence. Their SEO strategies skyrocketed our website traffic, and the leads we're getting now are just phenomenal. It's like they unlocked a whole new level of growth for us.",
      place: "Bangalore, India",
      person: "Tech Startup Founder",
    },
    {
      content:
        "marketeers's team transformed our digital presence. Their SEO strategies skyrocketed our website traffic, and the leads we're getting now are just phenomenal. It's like they unlocked a whole new level of growth for us.",
      place: "Bangalore, India",
      person: "Tech Startup Founder",
    },
  ];
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        navigation={true}
        autoplay={{duration:1500,disableOnInteraction:false}}
        modules={[EffectCards, Navigation,Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <h6 className="">1 of 124</h6>
                <h6 className="">Read more</h6>
              </div>
              <div>
                <p style={{ color: "grey",marginTop:'1rem' }}>{testimonial.content} </p>
              </div>
              {/* <div style={{width:}}></div> */}
            </div>
            <div style={{ display: "flex", padding: "1rem" ,marginTop:'auto',paddingBottom:'0px',borderTop:'1px solid grey',gap:'1rem'}}>
              <img src={photo} alt="photo" />
              <div>
                <h5>{testimonial.person}</h5>
                <h5 style={{color:'grey'}}>{testimonial.place}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
