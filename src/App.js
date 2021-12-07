import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollUp from "./hooks/ScrollUp";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home";
import InvestmentExpertise from "./pages/InvestmentExpertise";
import Team from "./pages/Team/Team";
import Privacy from "./pages/Privacy";
import LegalTerms from "./pages/LegalTerms";
import Disclaimer from "./pages/Disclaimer";

function App() {
  const [hamOpen, setHamOpen] = useState(false);

  const getOpenState = useCallback((value) => {
    setHamOpen(value);
  }, []);

  return (
    <div className="app-body">
      <Header getOpenState={getOpenState} />
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home hamOpen={hamOpen} />} />
        <Route path="/about" exact element={<About hamOpen={hamOpen} />} />
        <Route
          path="/investment-expertise"
          exact
          element={<InvestmentExpertise hamOpen={hamOpen} />}
        />
        <Route path="/team" exact element={<Team hamOpen={hamOpen} />} />
        <Route path="/privacy" exact element={<Privacy hamOpen={hamOpen} />} />
        <Route path="/legal" exact element={<LegalTerms hamOpen={hamOpen} />} />
        <Route
          path="/disclaimer"
          exact
          element={<Disclaimer hamOpen={hamOpen} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
