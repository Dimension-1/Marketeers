import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import ServicesPage from './Pages/ServicesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";

function App() {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
