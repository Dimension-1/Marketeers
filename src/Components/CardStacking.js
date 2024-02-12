import React from "react";
import serviceData from "../Pages/ServiceData.json";

export default function CardStacking() {
  const selectedService = serviceData.services[0];

  if (!selectedService) {
    return <div>Service not found</div>;
  }
  // --------------------------------------------------

  // note- it is just a experiment component not to be used in website!!

  // ------------------------------------------------
  return (
    <div
      className=""
      style={{
        position: "relative",
        zIndex: 300,
        paddingTop: "30vh",
        /* Adjust height as needed */
        // height: '200vh',
        overflowY: "scroll", // Ensure container is scrollable
      }}
    >
      {selectedService.theProcess &&
        selectedService.theProcess.map((process, index) => (
          <div
            key={index}
            className=""
            style={{
              position: "sticky",
              top: 0,
              height: "50vh",
              backgroundColor: "var(--custom-btn)",
              marginBottom: "20px", // Add some space between sticky elements
            }}
          >
            <div className="">
              <div
                className="h3"
                style={{
                  color: "var(--main-text-color)",
                  fontSize: "2.63rem",
                }}
              >
                {index + 1}
              </div>
            </div>
            <div className="">
              <h3
                className="p-leading is-bigger text-balance text-light"
                style={{ fontSize: "1.7rem" }}
              >
                {process.step}
              </h3>
              <div className="" style={{ fontSize: "1.13rem" }}>
                {process.description &&
                  process.description
                    .split("\n")
                    .map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
