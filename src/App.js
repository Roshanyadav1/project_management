import React from "react";
import Todos from './pages/Todos.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      ookkk
      <Routes>
        <Route path="/" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
