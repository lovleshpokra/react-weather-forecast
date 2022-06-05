import React from "react";
import ForecastItem from "./ForecastItem";
import partly_cloudy from "./../assets/images/partly_cloudy.png";
import rain_s_cloudy from "./../assets/images/rain_s_cloudy.png";
import thunderstorms from "./../assets/images/thunderstorms.png";

const forecastData = [
    {
        day: "Mon",
        img: partly_cloudy,
        high: "30",
        low: "20"
    },
    {
        day: "Tue",
        img: partly_cloudy,
        high: "35",
        low: "25"
    },
    {
        day: "Wed",
        img: thunderstorms,
        high: "25",
        low: "20"
    },
    {
        day: "Thu",
        img: rain_s_cloudy,
        high: "30",
        low: "25"
    },
    {
        day: "Fri",
        img: rain_s_cloudy,
        high: "40",
        low: "30"
    },
    {
        day: "Sat",
        img: thunderstorms,
        high: "35",
        low: "30"
    },
    {
        day: "Sun",
        img: partly_cloudy,
        high: "32",
        low: "30"
    }
]


function Forecast() {
  return (
    <div className="forecast-list">
        {
            forecastData.map(item => <ForecastItem key={item.day} day={item.day} img={item.img} high={item.high} low={item.low} isActive={item.day == "Wed"}/>)
        }
    </div>
  );
}

export default Forecast;
