import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <>
      <div ClassName="WeatherInfo">
        <h1 className="main-city" id="main-city">
          {props.data.city}
        </h1>
        <h4>
          <FormattedDate date={props.data.date} />
        </h4>
        <div>
          <WeatherIcon code={props.data.icon} />
        </div>

        <br />
        <div className="container2">
          <h3>
            <WeatherTemperature celsius={Math.round(props.data.temperature)} />
          </h3>
        </div>
        <div className="description">
          <h4 id="description">{props.data.description}</h4>
        </div>
      </div>
      <div className="container3">
        <div className="col-md-12 col-sm-12 col-xs-3 side-weather-info">
          <h6 className="precipitation">
            Cloudiness:{" "}
            <spam id="precipitation"> {Math.round(props.data.cloudiness)}</spam>
            %
          </h6>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-3 side-weather-info">
          <h6 className="humidity">
            Humidity: <spam id="humidity">{props.data.humidity}</spam>%
          </h6>
        </div>

        <div className="col-md-12 col-sm-12 col-xs-3 side-weather-info">
          <h6 className="wind">
            Wind: <spam id="wind"> {Math.round(props.data.wind)}</spam>km/h
          </h6>
        </div>
      </div>
    </>
  );
}
