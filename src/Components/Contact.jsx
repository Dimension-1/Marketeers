import React from "react";

const Contact = () => {
  return (
    <div className="row p-md-4">
      <div className="col-6 d-flex" style={{ gap: "2.2rem" }}>
        <div className="row gap-3 h-100 w-100 ">
          <div className="service-box d-flex flex-column justify-content-between p-4">
            <div
              style={{
                borderRadius: "50%", // Make it a circle
                background: "#262D29",
                display: "flex",
                width: "64.75px",
                height: "64.75px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Content goes here */}
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
          <div className="service-box d-flex flex-column justify-content-between p-4">
            <div
              style={{
                borderRadius: "50%", // Make it a circle
                background: "#262D29",
                display: "flex",
                width: "64.75px",
                height: "64.75px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Content goes here */}
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
        </div>

        <div className="row gap-3 w-100 ">
          <div className="service-box d-flex flex-column justify-content-between p-4">
            <div
              style={{
                borderRadius: "50%", // Make it a circle
                background: "#262D29",
                display: "flex",
                width: "64.75px",
                height: "64.75px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Content goes here */}
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
          <div className="service-box d-flex flex-column justify-content-between p-4">
            <div
              style={{
                borderRadius: "50%", // Make it a circle
                background: "#262D29",
                display: "flex",
                width: "64.75px",
                height: "64.75px",
                padding: "17.82px 19.46px 17.81px 19.42px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Content goes here */}
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
        </div>
      </div>

      <div className="col-6">
        <div className="service-box w-100 h-100 d-flex justify-content-between flex-column">
          <div>
            <h1 className="text-light mb-4">
              Interested but don’t know where to start?
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
                  placeholder="Name*"
                />
              </div>
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
                  placeholder="Email*"
                />
              </div>
            </div>
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
                  placeholder="Phone"
                />
              </div>
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
                  placeholder="Subject*"
                />
              </div>
            </div>
            <div className="row m-1">
              <input
                type="text"
                id="name"
                name="name"
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
                padding: "25px",
                border: "none", // Set border to none
                color: "var(--bg-color)",
              }}
            >
              Send Message
            </button>
          </div>

          <div>
            <p>Or email us at:</p>
            <button
              className="button w-100 m-1 mt-3 d-flex align-items-center fw-medium justify-content-center "
              style={{
                borderRadius: "14px",
                background: "transparent",
                padding: "25px",
                border: "3px solid var(--input-fields)", // Set border to none
                color: "var(--secondary-bg)",
              }}
            >
              hristo@addifico.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
