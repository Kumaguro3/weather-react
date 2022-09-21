import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    day: "Monday",
    time: "10:00",
    temperature: "19",
    description: "Clear",
    precipitation: "40",
    humidity: "60",
    wind: "5",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="btn-group" margin="10px">
          <form id="search-form">
            <input
              type="text"
              placeholder="Enter a city"
              id="search-text-input"
            />
            <button type="submit" class="button-click">
              Go!
            </button>
          </form>
          <button type="click" class="button-click" id="current-location">
            Current
          </button>
        </div>

        <h1 className="main-city" id="main-city">
          {weatherData.city}
        </h1>
        <h4 className="dayOfWeek">{weatherData.day}</h4>
        <h4 className="time">{weatherData.time}</h4>

        <img
          src={weatherData.imgUrl}
          alt={weatherData.description}
          id="icon"
          className="main-weather-icon"
        />
        <br />
        <div className="container2">
          <h3 className="temperature" id="main-temperature">
            {weatherData.temperature}
          </h3>
          <a href="https://www.google.com/" id="celsius-link" class="active">
            °C
          </a>{" "}
          |
          <a href="https://www.google.com/" id="fahren-link">
            °F
          </a>
        </div>
        <div className="description">
          <h4 id="description">{weatherData.description}</h4>
        </div>
      </div>

      <div className="container3">
        <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6 className="precipitation">
            Precipitation:{" "}
            <spam id="precipitation"> {weatherData.precipitation}</spam>%
          </h6>
        </div>
        <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6 className="humidity">
            Humidity: <spam id="humidity">{weatherData.humidity}</spam>%
          </h6>
        </div>

        <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6 className="wind">
            Wind: <spam id="wind"> {weatherData.wind}</spam>km/h
          </h6>
        </div>
      </div>
    </div>
  );
}
