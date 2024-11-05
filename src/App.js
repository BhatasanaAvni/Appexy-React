
import "./App.css";
import LandingIndex from "./MainLayout/LandingIndex";
import Admindashbord from "./MainLayout/AdminUI/DashBord";
import AdminComponents from "./MainLayout/AdminUI/AdminComponents";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeroSection1 from "./Components/DemoIndex/Heros/HerosSection1";
import HeroSection2 from "./Components/DemoIndex/Heros/HerosSection2";
import HeroSection3 from "./Components/DemoIndex/Heros/HerosSection3";
import HeroSection4 from "./Components/DemoIndex/Heros/HerosSection4";
import HeroSection5 from "./Components/DemoIndex/Heros/HerosSection5";
import HeroSection6 from "./Components/DemoIndex/Heros/HerosSection6";
import NotFound from "../src/NotFound/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingIndex />} />
        <Route path="/hero-section-1" element={<HeroSection1 />} />
        <Route path="/hero-section-2" element={<HeroSection2 />} />
        <Route path="/hero-section-3" element={<HeroSection3 />} />
        <Route path="/hero-section-4" element={<HeroSection4 />} />
        <Route path="/hero-section-5" element={<HeroSection5 />} />
        <Route path="/hero-section-6" element={<HeroSection6 />} />
        <Route path="/admin-dashbords" element={<Admindashbord />} />
        <Route path="/admin-nav" element={<AdminComponents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
