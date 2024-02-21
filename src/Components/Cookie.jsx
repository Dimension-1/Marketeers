import React, { useEffect, useState } from "react";
import cookie from "../assets/cookies1.gif";
export default function Cookie() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    localStorage.getItem("cookie") == "yes" && setOpen(false);
  }, []);
  const accepted = () => {
    setOpen(false);
    localStorage.setItem("cookie", "yes");
  };
  return (
    open && (
      <div
       
        style={{
          position: "fixed",
          bottom: "1rem",
          zIndex: 998,
          width: "100vw",
        }}
      >
        <div
          style={{
            width: "fit-content",
            backgroundColor: "#0a0b0a",
            margin: "auto",
            display: "flex",
            padding: "0.7rem 2rem 0.7rem 1rem",
            borderRadius: "20px",
            gap: "0.7rem",
          }}
           className="cookie-mainDiv"
        >
          <div
            className="cookie-imgDiv"
            style={{
              backgroundColor: "#202421",
              width: "fit-content",
              borderRadius: "20px",
            }}
          >
            <img src={cookie} alt="cookie" style={{ width: "4rem" }} />
          </div>
          <div className="cookie-textDiv">
            <h6 style={{ color: "#e1f1fb" }}>
              Hi! Cookies for vibes, emails by choice. Opt-in for news, ok?
            </h6>
            <div style={{fontWeight:'bold'}}>
              <button
                onClick={() => window.close()}
                style={{
                  backgroundColor: "transparent",
                  border: 0,
                  outline: 0,
                  color: "grey",
                  marginRight: "1rem",
                  borderBottom:'1px solid #ffffff37'
                }}
              >
                Leave Website
              </button>
              <button
                onClick={accepted}
                style={{
                  backgroundColor: "transparent",
                  border: 0,
                  outline: 0,
                  color: "skyblue",
                  borderBottom:'1px solid #ffffff37'
                }}
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
