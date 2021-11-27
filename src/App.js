import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home";

function App() {
  const [hamOpen, setHamOpen] = useState(false);

  const getOpenState = useCallback((value) => {
    setHamOpen(value);
  }, []);

  return (
    <div className="app-body">
      <Header getOpenState={getOpenState} />
      <Routes>
        <Route path="/" element={<Home hamOpen={hamOpen} />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
