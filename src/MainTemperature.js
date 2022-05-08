import React, { useState } from "react";

export default function MainTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function calculateFahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="main-weather-temperature">
          {Math.round(props.temperature)}
        </span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="main-weather-temperature">
          {Math.round(calculateFahrenheit())}
        </span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
