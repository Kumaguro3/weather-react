import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      day: new Date(response.data.dt * 1000),
      time: "10:00",
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      precipitation: response.data.main.precipitation,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="btn-group" margin="10px">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                id="search-text-input"
                autoFocus="on"
                onChange={handleCityChange}
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
            src={weatherData.icon}
            alt={weatherData.description}
            id="icon"
            className="main-weather-icon"
          />
          <br />
          <div className="container2">
            <h3 className="temperature" id="main-temperature">
              {Math.round(weatherData.temperature)}
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
  } else {
    search();
    return "Loading...";
  }
}
