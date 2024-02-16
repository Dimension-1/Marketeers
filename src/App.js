import { useState, useEffect } from "react";
import LandingPage from "./Pages/LandingPage";
import ServicesPage from "./Pages/ServicesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import ResourcesPage from "./Pages/ResourcePage";
import BlogPage from "./Pages/BlogPage";
import ServiceContentPage from "./Pages/ServiceContentPage";
import "./App.css";
import axios from "axios";
import Loading from "./Components/Loading";

// ------------------------------------------------------------
function App() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sheetdb.io/api/v1/hdreqxp52ghx1")
      .then((data) => {
        setBlogData(data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div style={{ background: "var(--bg-color)" }}>
      <Router>
        <Routes>
          <Route path="/" element={loading? <Loading/> : <LandingPage blogData={blogData.slice(0, 3)}/>} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/resources/:filter" element={<ResourcesPage blogData={blogData}/>} />
          <Route path="/blogs/:id" element={<BlogPage />} />

          {/* Correct the parameter name to match the one used in ServiceContentPage */}
          <Route
            path="/service/:serviceName"
            element={<ServiceContentPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import GridLoader from "react-spinners/GridLoader";
// import Navbar from "./Components/Navbar";
// import LandingPage from "./Pages/LandingPage";
// import ServicesPage from "./Pages/ServicesPage";
// import ContactPage from "./Pages/ContactPage";
// import AboutPage from "./Pages/AboutPage";
// import ResourcesPage from "./Pages/ResourcePage";
// import BlogPage from "./Pages/BlogPage";
// import BlogContent from "./Components/BlogContent";
// import ServiceContentPage from "./Pages/ServiceContentPage";
// import "./App.css";

// function Main() {
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     const fakeAsyncOperation = setTimeout(() => {
//       setLoading(false);
//     }, 800); // Adjust the duration as needed

//     return () => clearTimeout(fakeAsyncOperation);
//   }, [location]);

//   return (
//     <div style={{ background: "var(--bg-color)" }}>
//       {/* Display the loading animation while loading is true */}
//       {loading && (
//         <div className="loading-overlay">
//           <GridLoader color={"#8aabc4"} loading={loading} size={20} />
//         </div>
//       )}

//       {/* Render the Routes when not loading */}
//       {!loading && (
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/resources/:filter" element={<ResourcesPage />} />
//           <Route path="/blogs/:id" element={<BlogPage />} />
//           <Route
//             path="/service/:serviceName"
//             element={<ServiceContentPage />}
//           />
//         </Routes>
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Main />
//     </Router>
//   );
// }

// export default App;
