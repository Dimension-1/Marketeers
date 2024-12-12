import React, { useState, useEffect, useRef } from "react";
import upwork from "../assets/upwork.svg";
import Fiverr from "../assets/fiver.svg";
import linkedin from "../assets/linkedin.svg";
import meet from "../assets/meet.svg";
import copyIcon from "../assets/copyIcon.svg";
import bg from "../assets/mainbg.png";
import image from "../assets/DesktopBlue.svg";
import { color } from "framer-motion";

const Contact = ({ title, fontSize, showOverlayImage = true }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const formRef = useRef();

  const handleCopyClick = () => {
    const emailText = "contact@marketeers.ai";
    navigator.clipboard.writeText(emailText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate mandatory fields
    const mandatoryFields = ["name", "email", "subject", "message"];
    let isValid = true;

    mandatoryFields.forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        const input = formRef.current.querySelector(`[name=${field}]`);
        input.setCustomValidity("This field is required");
      }
    });

    if (!isValid) {
      formRef.current.reportValidity();
      return;
    }

    // Reset custom validation messages
    mandatoryFields.forEach((field) => {
      const input = formRef.current.querySelector(`[name=${field}]`);
      input.setCustomValidity("");
    });

    console.log("Form Values:", formData);

    const formDatab = new FormData();
    for (const key in formData) {
      formDatab.append(key, formData[key]);
    }

    console.log("FormData Object:", formDatab);

    fetch(
      "https://sheet.best/api/sheets/dad9f654-6401-4499-aff6-779c7c9d9c59",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsSuccess(true);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset custom validation message
    e.target.setCustomValidity("");
  };

  useEffect(() => {
    console.log("Page loaded, scrolling to top");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="position-relative overflow-hidden mx-[1%] rounded-[32px]">
      {showOverlayImage && (
        <div
          className="img-overlay position-absolute z-1"
          style={{
            transform: "rotate(330deg)",
            left: "-726px",
            top: "-338px",
            opacity: "0.3",
            zIndex: "-1",
          }}
        >
          <img src={bg} alt="" className="" />
        </div>
      )}

      <div className="row contact-sm z-3 position-relative h-[80vh] mb-[1%]">
        <div className="col-md-6 col-12 d-flex -z-3" style={{ gap: "2.2rem" }}>
          <div className="row gap-3 h-100 w-100 bg-none">
            <div className="contact-box d-flex flex-column justify-content-between p-4 ">
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
                className="contact-card"
              >
                <div className="gradient" />
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
                  style={{ fontFamily: "MyCustomFont",fontSize:"2.25rem",  color: "var(--text-color)" }}
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
                className="contact-card"
              >
                <div className="gradient" />
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
                  style={{fontFamily: "MyCustomFont",fontSize:"2.25rem",  color: "var(--text-color)" }}
                >
                  Linkedin
                </p>
              </div>
            </div>
          </div>

          <div className="row gap-3 w-100 bg-transparent">
            <div className="contact-box d-flex flex-column justify-content-between p-4 ">
              <div
                style={{
                  borderRadius: "50%", // Make it a circle
                  background: "var(--bg-color)",
                  display: "flex",
                  width: "64px",
                  height: "64.75px",
                  padding: "17.82px 19.46px 17.81px 19.42px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="contact-card"
              >
                <div className="gradient" />
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
                  style={{fontFamily: "MyCustomFont",fontSize:"2.25rem",  color: "var(--text-color)" }}
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
                className="contact-card"
              >
                <div className="gradient" />
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
                  style={{fontFamily: "MyCustomFont",fontSize:"2.25rem",  color: "var(--text-color)" }}
                >
                  Book a meeting
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12 z-3">
          <div className="contact-container w-100 h-100 d-flex justify-content-between flex-column">
            <div>
              <h1
                className=" mb-4"
                style={{fontFamily: "MyCustomFont",fontSize:"3rem", color: "var(--secondary-bg)" }}
              >
                {title}
              </h1>

              {isSuccess ? (
                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className="success"
                    style={{
                      color: "var(--text-color)",
                      fontSize: "1.3rem",
                      fontWeight: "500",
                      opacity: "0.8",
                      borderRadius: "14px",
                      background: "rgba(220, 239, 216, 0.05)",
                      padding: "15px",
                      border: "none", // Set border to none
                      fontFamily: "MyCustomFont",
                    }}
                  >
                    Thank you! Your submission has been received!
                  </div>
                </div>
              ) : (
                <form
                  className="form contact-form w-full"
                  onSubmit={handleSubmit}
                  noValidate
                  ref={formRef}
                >
                  <div className="row ">
                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control custom-input"
                        style={{
                          borderRadius: "14px",
                          background: "rgba(220, 239, 216, 0.05)",
                          padding: "15px",
                          border: "none", // Set border to none
                          color: "var(--text-color)",
                          fontFamily: "MyCustomFont",
                        }}
                        placeholder="Name*"
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control custom-input"
                        style={{
                          borderRadius: "14px",
                          background: "rgba(220, 239, 216, 0.05)",
                          padding: "15px",
                          border: "none", // Set border to none
                          color: "var(--text-color)",
                          fontFamily: "MyCustomFont",
                        }}
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control custom-input"
                        style={{
                          borderRadius: "14px",
                          background: "rgba(220, 239, 216, 0.05)",
                          padding: "15px",
                          border: "none", // Set border to none
                          color: "var(--text-color)",
                          fontFamily: "MyCustomFont",
                        }}
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control custom-input"
                        style={{
                          borderRadius: "14px",
                          background: "rgba(220, 239, 216, 0.05)",
                          padding: "15px",
                          border: "none", // Set border to none
                          color: "var(--text-color)",
                          fontFamily: "MyCustomFont",
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
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control custom-input"
                      style={{
                        borderRadius: "14px",
                        background: "rgba(220, 239, 216, 0.05)",
                        padding: "6%",
                        border: "none", // Set border to none
                        color: "var(--text-color)",
                        fontFamily: "MyCustomFont",
                      }}
                      placeholder="Your message*"
                    />
                  </div>
                  <button
                    className="button hover:text-black w-100 m-1 mt-3 d-flex align-items-center fw-medium justify-content-center "
                    style={{
                      borderRadius: "14px",
                      background: "var(--main-text-color)",
                      padding: "28px",
                      border: "none", // Set border to none
                      color: "var(--bg-color)",
                      fontSize: "1.25rem",
                      fontFamily: "MyCustomFont",
                      // hover:{
                      //   color: "var(--bg-color)",
                      //   background: "var(--main-text-color)"
                      // }
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div >
              <p style={{fontFamily: "MyCustomFont", color: "var(--text-color)" }}>Or email us at:</p>
              <div
                className="button w-100 m-1 mt-3 d-flex align-items-center fw-medium  email-copy"
                style={{
                  borderRadius: "14px",
                  background: "transparent",
                  padding: "28px",
                  border: "0.5px solid gray",
                  color: "var(--secondary-bg)",
                  fontSize: "1.25rem",
                  opacity: "0.8",
                  position: "relative",
                  fontFamily: "MyCustomFont",
                }}
                onClick={handleCopyClick}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                >
                  <img
                    src={copied ? "Copied!" : copyIcon}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    fontFamily: "MyCustomFont",
                  }}
                >
                  <span style={{ fontFamily: "MyCustomFont",textAlign: "center" }}>
                    contact@marketeers.ai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
