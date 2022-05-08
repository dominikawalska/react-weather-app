import React, { useState } from "react";
import axios from "axios";
import MainWindow from "./MainWindow";
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
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
                className="search-button btn btn-primary w-100 btn-block"
                onClick="this.blur();"
              />
            </Col>
            <Col sm={3}>
              <Button
                className="my-location-button btn btn-primary w-100 btn-block"
                onClick="this.blur();"
              >
                My location
              </Button>
            </Col>
          </Row>
        </Form>
        <MainWindow weatherData={weatherConditions} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
