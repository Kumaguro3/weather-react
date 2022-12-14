import React, { useState, useEffect } from "react";
import "./Weather.css";
import "./WeekForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeekForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function HandleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function Load() {
    let apiKey = "63214c4281922e3bb72fdf12dada7734";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(HandleResponse);
  }

  if (loaded) {
    return (
      <div className="week-forecast">
        <div className="row">
          <div className="col ">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col ">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col ">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    Load();
  }
}
