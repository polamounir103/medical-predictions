import "./App.css";
import Header from "./components/shared/Header";
import OpeningAnimation from "./components/ui/OpeningAnimation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AdimnDashboard from "./pages/AdimnDashboard";
import Predictions from "./pages/Predictions";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";
import FloatingIcons from "./components/ui/FloatingIcons";
import ChatAI from "./pages/ChatAI";
import Footer from "./components/shared/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <OpeningAnimation />
      <div className="App">
        <Header />
        <div className="page-body">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/home" index element={<Home />} />
            <Route path="/admin-dashboard" element={<AdimnDashboard />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/about" element={<AboutUs />} /> */}
            <Route path="/chat-ai" element={<ChatAI />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </div>
        <FloatingIcons />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
