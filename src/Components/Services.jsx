import React from 'react';
import './Services.css'

const Services = () => {
  return (
    <div className='container pb-5'>
      <h1 className='font-7 text-light'>Services</h1>
      <div className="services-container d-flex flex-row gap-2">
        <div className="service-box d-flex flex-column">
          <p className='p-color'>Market Trend Analysis</p>
        </div>
        <div className="service-box">
          <p>Another Service</p>
        </div>
        <div className="service-box">
          <p>Yet Another Service</p>
        </div>
        
      </div>
    </div>
  )
}

export default Services;
