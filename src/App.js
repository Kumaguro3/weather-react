import "./App.css";
import React from "react";
import Footer from "./Footer.js";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Weather defaultCity="Tokyo" />
      </div>
      <Footer />
    </div>
  );
}
