import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import DataDescription from "./pages/DataDescription";
import ExploreCity from "./pages/ExploreCity";
import ExploreIndustry from "./pages/ExploreIndustry";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/data" element={<DataDescription />} />
      <Route path="/city" element={<ExploreCity />} />
      <Route path="/industry" element={<ExploreIndustry />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
