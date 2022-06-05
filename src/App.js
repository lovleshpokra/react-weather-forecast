import React from "react";
import "./assets/css/App.css";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="weather-widget">
      <div className="container">
        <div className="filter">
          <label>
            City: <select id="city">
              <option value="0" disabled selected>Select</option>
              <option value="1">Jaipur</option>
              <option value="2">Delhi</option>
              <option value="3">Banglore</option>
              <option value="4">Noida</option>
              <option value="5">Pune</option>
            </select>
          </label>
        </div>
      <Weather />
      <Forecast />
      </div>
    </div>
  );
}

export default App;
