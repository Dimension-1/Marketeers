import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import photo from "../assets/author-photo.png";
export default function FeedbackSliderPC() {
  const testimonials = [
    {
      image: photo,
      number: "1",
      content:
        "marketeers's team transformed our digital presence. Their SEO strategies skyrocketed our website traffic, and the leads we're getting now are just phenomenal. It's like they unlocked a whole new level of growth for us.",
      place: "Bangalore, India",
      person: "Tech Startup Founder",
    },
    {
      image:
        "https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef758024fac2a534c086_Deshawn%20Robinson.jpg",
      number: "21",
      content:
        "I was skeptical about PPC, but marketeers changed my mind. The campaign they ran was nothing short of brilliant – targeted, cost-effective, and, most importantly, successful. Our sales have doubled, and I couldn't be happier!",
      place: "  New York, USA",
      person: "E-commerce Business Owner",
    },
    {
      image: "https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef96e58b2a3830418781_Will%20Evertsen.jpg",
      number: "44",
      content:
        "The social media strategy marketeers developed for us was spot-on. They truly understood our brand voice and brought it to life online. Our engagement rates have soared, and we've connected with our audience like never before.",
      place: "London, UK",
      person: "Marketing Director",
    },
    {
      image: "https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef2045a8dcfd1d431f9b_Oliver%20Lauche.jpg",
      number: "60",
      content:
        "Partnering with marketeers for our online reputation management was the best decision we made. They handled everything with such professionalism and sensitivity. Our customer reviews have never looked better!",
      place: "Mumbai, India",
      person: "Restaurant Chain CEO",
    },
    {
      image: "https://assets-global.website-files.com/64e8bbf4a8e46c39e0352f6e/6501ef40684acb3475f6aae5_Nelson%20Dunk.jpg",
      number: "89",
      content:
        "marketeers's influencer marketing campaign was a game-changer for our brand. They connected us with influencers who resonated with our ethos, bringing authenticity and immense value to our marketing efforts.",
      place: " Paris, France",
      person: " Fashion Retailer",
    },
    {
      image: "https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg",
      number: "111",
      content:
        "The analytics insights from marketeers were eye-opening. They helped us understand our audience in ways we never thought possible, leading to more effective and personalized marketing strategies.",
      place: "San Francisco, USA",
      person: "Health & Wellness Entrepreneur",
    },
    {
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      number: "131",
      content:
        "The comprehensive digital strategy provided by marketeers was exceptional. They covered all bases – from content marketing to customer experience – and it all synergized perfectly to elevate our brand.",
      place: "Berlin, Germany",
      person: "Software Company CEO",
    },
  ];
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        navigation={true}
        autoplay={{ duration: 1500, disableOnInteraction: false }}
        modules={[EffectCards, Navigation, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <h6 className="">{testimonial.number} of 131</h6>
                <h6 className="">Read more</h6>
              </div>
              <div>
                <p style={{ color: "grey", marginTop: "1rem" }}>
                  {testimonial.content}{" "}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "1rem",
                marginTop: "auto",
                paddingBottom: "0px",
                borderTop: "1px solid grey",
                gap: "1rem",
              }}
            >
              <img src={testimonial.image} alt="photo" />
              <div>
                <h5>{testimonial.person}</h5>
                <h5 style={{ color: "grey" }}>{testimonial.place}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
