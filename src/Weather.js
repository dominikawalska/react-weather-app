import React, { useState } from "react";
import axios from "axios";
import MainWindow from "./MainWindow";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Weather(props) {
  let [weatherConditions, setweatherConditions] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setweatherConditions({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      date: response.data.dt,
    });
  }

  function search() {
    let apiKey = "38238442bc43441b21b268b1d3063e1b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleCurrentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "38238442bc43441b21b268b1d3063e1b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleCurrentPosition);
  }

  if (weatherConditions.ready) {
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={6}>
              <input
                type="search"
                placeholder="Type in city"
                className="form-control shadow-sm input"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </Col>
            <Col sm={3}>
              <input
                type="submit"
                value="Search"
                className="search-button w-100"
              />
            </Col>
            <Col sm={3}>
              <Button
                className="button my-location-button w-100"
                onClick={getPosition}
              >
                My location
              </Button>
            </Col>
          </Row>
        </Form>
        <MainWindow weatherData={weatherConditions} />
        <WeatherForecast coordinates={weatherConditions.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
