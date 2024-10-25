import "./App.css";
import Header from "./components/shared/Header";
import OpeningAnimation from "./components/ui/OpeningAnimation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AdimnDashboard from "./pages/AdimnDashboard";
// import Footer from "./components/shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <OpeningAnimation />
      <div className="App">
        <Header />
        <div className="pt-24 sm:pt-36 md:pt-40 lg:pt-0 px-3 md:px-20 lg:px-38">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/admin-dashboard" exact element={<AdimnDashboard />} />

            <Route path="/*" element={<NoPage />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
