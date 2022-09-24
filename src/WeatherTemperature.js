import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ShowCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temperature">
        <span className="temperature">{Math.round(props.celsius)}</span>

        <span className="unit">
          {" "}
          °C |
          <a href="_blank" onClick={ShowFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="weather-temperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>

        <span className="unit">
          {" "}
          <a href="_blank" onClick={ShowCelsius}>
            {" "}
            °C{" "}
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
