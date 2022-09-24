import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeekForecast from "./WeekForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function HandleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      day: "Monday",
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      cloudiness: response.data.clouds.all,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function HandleCityChange(event) {
    setCity(event.target.value);
  }

  function Search() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="container">
          <div className="btn-group" margin="10px">
            <form onSubmit={HandleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                id="search-text-input"
                autoFocus="on"
                onChange={HandleCityChange}
              />
              <button type="submit" className="button-click">
                Go!
              </button>
            </form>
            <button type="click" className="button-click" id="current-location">
              Current
            </button>
          </div>
          <WeatherInfo data={weatherData} />
          <WeekForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
