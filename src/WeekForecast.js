import React, { useState } from "react";
import "./Weather.css";
import "./WeekForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeekForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function HandleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function Load() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(HandleResponse);
  }

  if (loaded) {
    return (
      <div className="week-forecast">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3 ">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    Load();
  }
}
