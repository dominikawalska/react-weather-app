import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculatedDate from "./CalculatedDate";
import "./MainWindow.css";
import MainIcon from "./MainIcon";
import MainTemperature from "./MainTemperature";

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
          <span className="main-weather-icon">
            <MainIcon icon={props.weatherData.icon} size={64} />
          </span>
          <span className="main-weather-temperature">
            <MainTemperature temperature={props.weatherData.temperature} />
          </span>
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
