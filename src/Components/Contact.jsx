import React, {useState, useEffect, useRef} from "react";
import upwork from "../assets/upwork.svg";
import Fiverr from "../assets/fiver.svg";
import linkedin from "../assets/linkedin.svg";
import meet from "../assets/meet.svg";
import copyIcon from "../assets/copyIcon.svg";

const Contact = ({title, fontSize}) => {
  const [copied, setCopied] = useState(false);


const handleCopyClick = () => {
  const emailText = "hristo@addifico.com";
  navigator.clipboard.writeText(emailText);
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};



function Submit(e) {
  e.preventDefault();
  const formEle = document.querySelector("form");
console.log("Form Values:", {
  name: formEle.querySelector("[name='name']").value,
  email: formEle.querySelector("[name='email']").value,
  phone: formEle.querySelector("[name='phone']").value,
  message: formEle.querySelector("[name='message']").value,
  subject: formEle.querySelector("[name='subject']").value,
});
const formDatab = new FormData(formEle);
console.log("FormData Object:", formDatab);


  fetch(
    "https://sheet.best/api/sheets/dad9f654-6401-4499-aff6-779c7c9d9c59",
    {
      method: "POST",
      body: formDatab
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}



  return (
    <div className="position-relative ">
  
    <div className="row contact-sm p-md-4 mt-sm-4 z-3 position-relative " style={{zIndex: "998"}}>
      
      <div className="col-md-6 col-12 d-flex z-3 " style={{ gap: "2.2rem" }}>
        <div className="row gap-3 h-100 w-100 ">
          <div className="contact-box d-flex flex-column justify-content-between p-4">
            <div
              style={{
                borderRadius: "50%", // Make it a circle
                background: "var(--bg-color)",
                display: "flex",
                width: "64.75px",
                height: "64.75px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
    src={upwork} // Replace with the path to your image
    alt="Circle Image"
    style={{
      width: "100%", // Ensure the image takes the full width of the circle
      height: "100%", // Ensure the image takes the full height of the circle
    }}
  />
            </div>
            <div>
              <p
                className="p-color font-2 fw-medium pl-2"
                style={{ color: "var(--text-color)" }}
              >
                UpWork
              </p>
            </div>
          </div>
          <div className="contact-box d-flex flex-column justify-content-between p-4">
            <div
              style={{
                borderRadius: "50%", // Make it a circle
                background: "var(--bg-color)",
                display: "flex",
                width: "64.75px",
                height: "64.75px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                   <img
    src={linkedin} // Replace with the path to your image
    alt="Circle Image"
    style={{
      width: "100%", // Ensure the image takes the full width of the circle
      height: "100%", // Ensure the image takes the full height of the circle
    }}
  />
            </div>
            <div>
              <p
                className="p-color font-2 fw-medium pl-2"
                style={{ color: "var(--text-color)" }}
              >
                Linkedin
              </p>
            </div>
          </div>
        </div>

        <div className="row gap-3 w-100 ">
          <div className="contact-box d-flex flex-column justify-content-between p-4">
            <div
              style={{
                borderRadius: "50%", // Make it a circle
                background: "var(--bg-color)",
                display: "flex",
                width: "64.75px",
                height: "64.75px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                  <img
    src={Fiverr} // Replace with the path to your image
    alt="Circle Image"
    style={{
      width: "100%", // Ensure the image takes the full width of the circle
      height: "100%", // Ensure the image takes the full height of the circle
    }}
  />
            </div>
            <div>
              <p
                className="p-color font-2 fw-medium pl-2"
                style={{ color: "var(--text-color)" }}
              >
                Fiverr 
              </p>
            </div>
          </div>
          <div className="contact-box d-flex flex-column justify-content-between p-4">
            <div
              style={{
                borderRadius: "50%", // Make it a circle
                background: "var(--bg-color)",
                display: "flex",
                width: "64.75px",
                height: "64.75px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                  <img
    src={meet} // Replace with the path to your image
    alt="Circle Image"
    style={{
      width: "100%", // Ensure the image takes the full width of the circle
      height: "100%", // Ensure the image takes the full height of the circle
    }}
  />
            </div>
            <div>
              <p
                className="p-color font-2 fw-medium pl-2"
                style={{ color: "var(--text-color)" }}
              >
                Book a meeting
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-12">
        <div className="service-box w-100 h-100 d-flex justify-content-between flex-column">
          <div>
            <h1 className=" mb-4" style={{color: "var(--secondary-bg)", fontSize}}>
              {title}
            </h1>

            <form className="form" onSubmit={(e) => Submit(e)}>
            <div className="row mb-3">
              
              <div className="col-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control custom-input"
                  style={{
                    borderRadius: "14px",
                    background: "rgba(220, 239, 216, 0.05)",
                    padding: "15px",
                    border: "none", // Set border to none
                    color: "var(--text-color)",
                  }}
                  placeholder="Name*"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="email"
            name="email"
                  className="form-control custom-input"
                  style={{
                    borderRadius: "14px",
                    background: "rgba(220, 239, 216, 0.05)",
                    padding: "15px",
                    border: "none", // Set border to none
                    color: "var(--text-color)",
                  }}
                  placeholder="Email*"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control custom-input"
                  style={{
                    borderRadius: "14px",
                    background: "rgba(220, 239, 216, 0.05)",
                    padding: "15px",
                    border: "none", // Set border to none
                    color: "var(--text-color)",
                  }}
                  placeholder="Phone"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control custom-input"
                  style={{
                    borderRadius: "14px",
                    background: "rgba(220, 239, 216, 0.05)",
                    padding: "15px",
                    border: "none", // Set border to none
                    color: "var(--text-color)",
                  }}
                  placeholder="Subject*"
                />
              </div>
            </div>
            <div className="row m-1">
              <input
                type="text"
                id="message"
                name="message"
                className="form-control custom-input"
                style={{
                  borderRadius: "14px",
                  background: "rgba(220, 239, 216, 0.05)",
                  padding: "6%",
                  border: "none", // Set border to none
                  color: "var(--text-color)",
                }}
                placeholder="Your message*"
              />
            </div>
            <button
              className="button w-100 m-1 mt-3 d-flex align-items-center fw-medium justify-content-center "
              style={{
                borderRadius: "14px",
                background: "var(--main-text-color)",
                padding: "28px",
                border: "none", // Set border to none
                color: "var(--bg-color)",
                fontSize: "1.25rem"
              }}
            >
              Send Message
            </button>
            </form>
          </div>

          <div>
            <p style={{color: "var(--text-color)"}}>Or email us at:</p>
            <div
  className="button w-100 m-1 mt-3 d-flex align-items-center fw-medium"
  style={{
    borderRadius: '14px',
    background: 'transparent',
    padding: '28px',
    border: '3px solid var(--input-fields)',
    color: 'var(--secondary-bg)',
    fontSize: '1.25rem',
    opacity: '0.8',
    position: 'relative',
  }}
  onClick={handleCopyClick}
>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
    <img src={copied ? 'Copied!' : copyIcon} alt="" style={{ marginRight: '10px' }} />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
    <span style={{ textAlign: 'center' }}>hristo@addifico.com</span>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
    {/* <div className="img-overlay position-absolute right-0">
      <img src={image} alt="" className="" />
    </div> */}
    </div>
  );
};

export default Contact;
