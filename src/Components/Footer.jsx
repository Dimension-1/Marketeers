import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor: "var(--transparent-bg)", borderRadius: "1.5rem"}}>
        <div className="row d-flex justify-content-between " style={{ color: "var(--text-color)" }}>
          <div className='col-6 d-flex  p-5 gap-5'>
            <div>
              Services
            </div>
            <span>/</span>
            <div>
              Services
            </div>
            <span>/</span>
            <div>
              Services
            </div>
          </div>
          <div className='col-6 d-flex justify-content-end p-5 gap-5'>
            <div>
              Services
            </div>
            <span>/</span>
            <div>
              Services
            </div>
            <span>/</span>
            <div>
              Services
            </div>
          </div>
        </div>
        <div className="green-border d-flex justify-content-center pt-4" style={{ left: '50%'}}></div>
        <div className="row d-flex p-4 " style={{ color: "var(--text-color)" }}>
            <div className='col-6 d-flex'>
              Build by Marketters
            </div>
            <div className='col-6 d-flex justify-content-end '>
            ©2023 All Rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer