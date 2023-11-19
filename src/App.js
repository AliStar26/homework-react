import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CityInfo from "./components/CityInfo";
import FamousLandmark from "./components/FamousLandmark";
import OtherLandmarks from "./components/OtherLandmarks";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/city-info">Информация о городе</Link>
          </li>
          <li>
            <Link to="/famous-landmark">
              Самая известная достопримечательность
            </Link>
          </li>
          <li>
            <Link to="/other-landmarks">Другие достопримечательности</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/city-info" element={<CityInfo />} />
        <Route path="/famous-landmark" element={<FamousLandmark />} />
        <Route path="/other-landmarks" element={<OtherLandmarks />} />
      </Routes>
    </Router>
  );
}

export default App;
