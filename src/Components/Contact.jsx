import React, {useState, useEffect, useRef} from "react";
import upwork from "../assets/upwork.svg";
import Fiverr from "../assets/fiver.svg";
import linkedin from "../assets/linkedin.svg";
import meet from "../assets/meet.svg";
import copyIcon from "../assets/copyIcon.svg";
// import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import image from "../assets/DesktopBlue.svg"

const Contact = ({title, fontSize}) => {
  const [copied, setCopied] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const [allData, setAllData] = useState(
  JSON.parse(localStorage.getItem("contactData")) || []
);

// Create download link only once
const downloadLinkRef = useRef();

const handleCopyClick = () => {
  const emailText = "hristo@addifico.com";
  navigator.clipboard.writeText(emailText);
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleExportToExcel = () => {
  const newData = [...allData, formData];
  const ws = XLSX.utils.json_to_sheet(newData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "ContactData");

  // Save the updated Excel file
  XLSX.writeFile(wb, "all_contact_data.xlsx");

  // Update local storage with the new data
  saveDataToLocalStorage(newData);
  setAllData(newData);
};




const saveDataToLocalStorage = (data) => {
  localStorage.setItem("contactData", JSON.stringify(data));
};


  return (
    <div className="position-relative ">
     {/* <div className="img-overlay-8 position-absolute z-0">
    <img src={image} alt="" className="" />
  </div> */}
    <div className="row contact-sm p-md-4 mt-sm-4 z-3 position-relative " style={{zIndex: "998"}}>
      
      <div className="col-md-6 col-12 d-flex" style={{ gap: "2.2rem" }}>
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
                  value={formData.name}
            onChange={handleInputChange}
                  placeholder="Name*"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
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
                  id="Phone"
                  name="Phone"
                  value={formData.phone}
            onChange={handleInputChange}
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
                  id="Subject"
                  name="Subject"
                  value={formData.subject}
            onChange={handleInputChange}
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
                value={formData.message}
            onChange={handleInputChange}
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
              onClick={() => {
                handleExportToExcel();
              }}
            >
              Send Message
            </button>
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
    </div>
  );
};

export default Contact;
