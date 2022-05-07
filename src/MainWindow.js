import React, { useState } from "react";
import axios from "axios";
import "./MainWindow.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MainWindow(props) {
  let [weatherConditions, setweatherConditions] = useState({ ready: false });

  function handleResponse(response) {
    setweatherConditions({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: "Wednesday, 07: 00",
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherConditions.ready) {
    return (
      <div className="main-window">
        <Row>
          <Col>
            <h1>{weatherConditions.city}</h1>
            <h3>{weatherConditions.date}</h3>
            <h4 className="text-capitalize">{weatherConditions.description}</h4>
          </Col>

          <Col className="main-weather">
            <img
              src={weatherConditions.icon}
              className="main-weather-icon"
              alt={weatherConditions.description}
            ></img>
            <span className="main-weather-temperature">
              {Math.round(weatherConditions.temperature)}
            </span>
            <span className="units">°C | °F </span>
          </Col>

          <Col className="wind-hum">
            <div>
              Wind:{" "}
              <span className="wind">{Math.round(weatherConditions.wind)}</span>{" "}
              km/h
            </div>
            <div>
              Humidity:{" "}
              <span className="humidity">{weatherConditions.humidity}</span> %
            </div>
          </Col>
        </Row>
      </div>
    );
  } else {
    const apiKey = "b0bc51fbf47aded8fd93326b74c97af1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
