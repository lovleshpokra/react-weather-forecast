import React from "react";

function ForecastItem({day, img, high, low, isActive}) {
  return (
    <div className={isActive ? "forecast-item active" : "forecast-item"}>
      <span>{day}</span>
      <div className="tempratrue">
        <img src={img} alt="" />
        <div className="tempratrue-data">
          <span className="high">{high}°</span>
          <span className="low">{low}°</span>
        </div>
      </div>
    </div>
  );
}

export default ForecastItem;
