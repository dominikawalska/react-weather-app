import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculatedDate from "./CalculatedDate";
import "./MainWindow.css";

export default function MainWindow(props) {
  return (
    <div className="main-window">
      <Row>
        <Col>
          <h1>{props.weatherData.city}</h1>
          <h3>
            <CalculatedDate date={props.weatherData.date} />
          </h3>
          <h4 className="text-capitalize">{props.weatherData.description}</h4>
        </Col>

        <Col className="main-weather">
          <img
            src={props.weatherData.iconUrl}
            className="main-weather-icon"
            alt={props.description}
          ></img>
          <span className="main-weather-temperature">
            {Math.round(props.weatherData.temperature)}
          </span>
          <span className="units">°C | °F </span>
        </Col>

        <Col className="wind-hum">
          <div>
            Wind:{" "}
            <span className="wind">{Math.round(props.weatherData.wind)}</span>{" "}
            km/h
          </div>
          <div>
            Humidity:{" "}
            <span className="humidity">{props.weatherData.humidity}</span> %
          </div>
        </Col>
      </Row>
    </div>
  );
}
