import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor: "var(--transparent-bg)", borderRadius: "1.5rem"}}>
        <div className="row d-flex justify-content-between ">
          <div className='col-6 d-flex p-4 gap-4'>
            <div className='footer-font'>
              Services
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font'>
              Services
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font'>
              Services
            </div>
          </div>
          <div className='col-6 d-flex justify-content-end p-4 gap-4'>
            <div className='footer-font'>
              Services
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font'>
              Services
            </div>
            <span style={{color: "var(--main-text-color)", fontSize: "1.5rem", opacity: "0.3" }}>/</span>
            <div className='footer-font'>
              Services
            </div>
          </div>
        </div>
        <div className="green-border d-flex justify-content-center pt-0" style={{ left: '50%', marginRight: "1rem", marginLeft: "1rem"}}></div>
        <div className="row d-flex p-4 ">
            <div className='col-6 d-flex footer-font' style={{opacity: "0.6"}}>
              Build by Marketters
            </div>
            <div className='col-6 d-flex justify-content-end footer-font' style={{opacity: "0.5"}}>
            ©2023 All Rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer