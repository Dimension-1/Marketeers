import React from 'react';
import Resources from '../Components/Resources';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Contact from "../Components/Contact"

const ResourcePage = () => {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
    <Navbar/>
    <Resources/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default ResourcePage