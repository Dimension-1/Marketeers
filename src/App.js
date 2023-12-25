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

function App() {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
