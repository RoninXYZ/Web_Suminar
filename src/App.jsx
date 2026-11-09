




import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Homes/Home";
import CarWash from "./pages/CarWash/CarWash";
import Detailing from "./pages/Detailing/Detailing";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wash" element={<CarWash />} />
        <Route path="/detailing" element={<Detailing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
