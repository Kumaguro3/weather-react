import "./App.css";
import React from "react";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Weather defaultCity="Tokyo" />
      </div>
      <footer>
        This app has been built by{" "}
        <a href="https://github.com/Kumaguro3/weather-react">Sergent Julie</a>
      </footer>
    </div>
  );
}
