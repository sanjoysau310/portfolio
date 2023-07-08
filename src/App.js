import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import { Navbar } from "./components/layout/Navbar";
import AboutPage from "./components/pages/about/AboutPage";
import { ContactPage } from "./components/pages/contact/ContactPage";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
