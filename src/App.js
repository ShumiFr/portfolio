import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  const urlImageHome = "/images/home.jpg";
  const urlImageAbout = "/images/about.jpg";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home url={urlImageHome} />} />
        <Route path="/about" element={<About url={urlImageAbout} />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
