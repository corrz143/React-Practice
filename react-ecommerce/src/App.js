import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import MoreInfo from "./components/MenuInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Filters />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:name" element={<MoreInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
