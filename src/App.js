import React from "react";
import Program from './pages/Program.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Program />} />
      </Routes>
    </Router>
  );
}

export default App;
