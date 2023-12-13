import React, {useEffect} from 'react';
import './Services.css';
import SVG from '../assets/SVG.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  useEffect(() => {
    const serviceBoxes = document.querySelectorAll('.service-box');

    gsap.to(serviceBoxes, {
      xPercent: -100,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.services-container',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='container pb-5'>
    <h1 className='font-7 text-light p-5'>Services</h1>
    <div className="services-container gallery d-flex gap-1">
      <div className="cards d-flex gap-1">
        <div className="service-box d-flex flex-column justify-content-between">
          <img src={SVG} className='h-25 w-25' alt="" />
          <p className='p-color font-2 flex-end' >Market Trend Analysis</p>
        </div>
        <div className="service-box d-flex flex-column justify-content-between">
          <img src={SVG} className='h-25 w-25' alt="" />
          <p className='p-color font-2 flex-end' >Market Trend Analysis</p>
        </div>
        <div className="service-box d-flex flex-column justify-content-between">
          <img src={SVG} className='h-25 w-25' alt="" />
          <p className='p-color font-2 flex-end' >Market Trend Analysis</p>
        </div>
        <div className="service-box d-flex flex-column justify-content-between">
          <img src={SVG} className='h-25 w-25' alt="" />
          <p className='p-color font-2 flex-end' >Market Trend Analysis</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services;
