// Import necessary components and libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Biography from "./components/Biography";
import Painting from "./components/Painting";
import Art from "./components/Art";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/biography">Biography</Link>
          </li>
          <li>
            <Link to="/famous">Painting</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/famous" element={<Painting />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </Router>
  );
}
function Home() {
  return <div>Welcome to the Home Page!</div>;
}
export default App;
