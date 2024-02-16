import React from 'react'
import logo from "../assets/finalLogo.ico";
import Navbar from './Navbar';
export default function Loading() {
  return (
    <div className="loading-overlay">
    <Navbar />
    {/* <GridLoader color={"#8aabc4"} loading={loading} size={20} /> */}
    <div className="logo-container">
      <img src={logo} alt="" className="loading-logo" />
    </div>
  </div>
  )
}
