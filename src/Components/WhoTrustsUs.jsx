import React from 'react';
import Clip from "../assets/Clip.svg";
import Clippath from "../assets/Clippath.svg";
// import load from "../assets/load.png";
import load from "../assets/loadmoreblue.svg"
import logo1 from "../assets/versea logo.png";
import logo2 from "../assets/oppa bar and cafe.png";
import logo3 from "../assets/mbc group.png";
import logo4 from "../assets/madoc logo.png";
import logo5 from "../assets/luxguild logo.png";
import logo6 from "../assets/Khiladi adda esport logo.png";
import logo7 from "../assets/India Today.png";
import logo8 from "../assets/etchcraft logo.png";
import logo9 from "../assets/Builders club logo.png";
import logo10 from "../assets/llc logo.jpg.png"

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
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
              <img src={logo1} alt="" />
            </div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
            <img src={logo2} alt="" />
            </div>
          </div>
          <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
            <img src={logo3} alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
        <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
            <img src={logo4} alt="" />
            </div>
          </div>
          <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
            <img src={logo5} alt="" />
            </div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
            <img src={logo6} alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
        <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
            <img src={logo7} alt="" />
            </div>
          </div>
          <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
            <img src={logo10} alt="" />
            </div>
          </div>
          <div className="col-2 ">
            <div className="company-cards-border"></div>
          </div>
          <div className="col-2 ">
            <div className="company-cards text-center d-flex justify-content-center align-items-center">
            <img src={logo8} alt="" />
            </div>
          </div>
        </div>
        <img
    src={load}
    alt="loading"
    className="position-absolute"
    style={{right: "-1px", bottom: "-3px"}}
  />
      </div>
    
  );
}

export default WhoTrustsUs;
