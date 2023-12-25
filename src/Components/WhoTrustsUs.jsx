import React from 'react';
import Clip from "../assets/Clip.svg";
import Clippath from "../assets/Clippath.svg";
// import load from "../assets/load.png";
import load from "../assets/loadmoreblue.svg"

const WhoTrustsUs = () => {
  return (

      <div
        className="z-3 gap-4 rating-container p-4 position-relative"
        style={{ backgroundColor: "var(--secondary-bg)" }}
      >
        <div className="row ">
          <div className="col-4" >
            <div className="company-cards fw-semibold bg-transparent " style={{fontSize: "2.6rem", color: "var(--primary-text)"}}>Who trusts us?</div>
            </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
          <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
        </div>
        <div className="row mt-3">
        <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
          <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
        </div>
        <div className="row mt-3">
        <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
          <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
          <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">Row</div>
          </div>
        </div>
        <img
    src={load}
    alt="loading"
    className="position-absolute"
    style={{right: "-1px", bottom: "-1px"}}
  />
      </div>
    
  );
}

export default WhoTrustsUs;
