import "./App.css";
import Header from "./components/shared/Header";
import OpeningAnimation from "./components/ui/OpeningAnimation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AdimnDashboard from "./pages/AdimnDashboard";
// import Predictions from "./pages/Predictions";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";
import FloatingIcons from "./components/ui/FloatingIcons";
// import ChatAI from "./pages/ChatAI";
import Footer from "./components/shared/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatAI from "./pages/ChatAI";
import Predictions from "./pages/Predictions";

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <OpeningAnimation />
      <div className="App">
        <Header />
        <div className="page-body">
          <ToastContainer newestOnTop={true} />
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
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
