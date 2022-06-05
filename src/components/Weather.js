import React from "react";
import partly_cloudy from "./../assets/images/partly_cloudy.png";

function Weather() {
  return (
    <div className="weather">
      <h1>Singapore</h1>
      <p>Sunday, 4:00 pm</p>
      <p>Partly Cloudy</p>
      <div className="tempratrue">
        <img src={partly_cloudy} alt="Partly Cloudy" />
        <div className="tempratrue-data">
          <div className="number">27</div>
          <div className="unit">°C | °F</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
