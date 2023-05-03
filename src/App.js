import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from './pages/Todos.jsx'
import Portfolio from "./pages/Portfolio.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
