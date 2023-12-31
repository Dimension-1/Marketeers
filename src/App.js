import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import ServicesPage from './Pages/ServicesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";
import ContactPage from './Pages/ContactPage';
import AboutPage from "./Pages/AboutPage"
import ResourcesPage from "./Pages/ResourcePage"
import BlogPage from './Pages/BlogPage';
import BlogContent from './Components/BlogContent';
import ServiceContentPage from "./Pages/ServiceContentPage";

function App() {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
       <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/resources/:filter" element={<ResourcesPage />} />
          <Route path="/blogs/:id" element={<BlogPage />} />

          {/* Correct the parameter name to match the one used in ServiceContentPage */}
          <Route path="/service/:serviceName" element={<ServiceContentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
