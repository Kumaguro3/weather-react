import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeekForecast.css";

export default function WeatherForecastDay(props) {
  function MaxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function MinTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function Day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div class="w-100 d-inline-block justify-content-center">
      <div className="weather-forecast-day">{Day()}</div>
      <div className="week-forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {MaxTemperature()}
        </span>{" "}
        |
        <span className="weather-forecast-temperature-min">
          {MinTemperature()}
        </span>
      </div>
    </div>
  );
}
