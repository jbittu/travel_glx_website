import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Traning from "./Pages/Traning/Traning";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contacts/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traning" element={<Traning />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
       </Router>
    </div>
  );
}

export default App;
