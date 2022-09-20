import "./App.css";
import React from "react";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project has been built by{" "}
          <a href="https://github.com/Kumaguro3/weather-react">Sergent Julie</a>
        </footer>
      </div>
    </div>
  );
}
