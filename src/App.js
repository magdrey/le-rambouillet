import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import RequestPage from "./pages/RequestPage";
import NavBar from "./components/NavBar";
import GetUpdate from "./components/GetUpdate";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/request" element={<RequestPage />} />
        </Routes>

        <GetUpdate />
        <Footer />
      </Router>
    </>
  );
}

export default App;
