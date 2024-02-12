import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function ServicesCard({ image, serviceName, displayCard }) {
  return (
    <motion.div layout className="projectCard">
      <Link
        to={`/service/${encodeURIComponent(serviceName)}`}
        className=""
        style={{
          textDecoration: "none",
        }}
      >
        <div className="gradient" />
        <div
          className="icon-large"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src={image} className="" alt="" />
          <ArrowSvG />
        </div>
        <div className="">
          <p className="" style={{ color: "var(--text-color)" }}>
            {serviceName}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

const ArrowSvG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    className="icon-small"
  >
    <g opacity="0.16" clip-path="url(#clip0_1_50)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.1684 1.92355H1.18226V0.0200195H15.4675C15.9935 0.0200195 16.4199 0.446139 16.4199 0.971784V15.2483H14.5152V3.26954L2.043 15.734L0.696171 14.3881L13.1684 1.92355Z"
        fill="#DCEFD8"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_50">
        <rect
          width="16.19"
          height="16.18"
          fill="white"
          transform="translate(0.22995 0.0200195)"
        />
      </clipPath>
    </defs>
  </svg>
);
