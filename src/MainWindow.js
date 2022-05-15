import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculatedDate from "./CalculatedDate";
import "./MainWindow.css";
import MainIcon from "./MainIcon";

export default function MainWindow(props) {
  return (
    <div className="main-window">
      <Row>
        <Col sm>
          <h1>{props.weatherData.city}</h1>
          <h3>
            <CalculatedDate />
          </h3>
          <h4 className="text-capitalize">{props.weatherData.description}</h4>
        </Col>

        <Col sm className="main-weather">
          <span>
            <span className="main-weather-icon">
              <MainIcon icon={props.weatherData.icon} size={64} />
            </span>
            <span className="main-weather-temperature">
              {Math.round(props.weatherData.temperature)}
            </span>
            <span className="units"> °C</span>
          </span>
        </Col>

        <Col sm className="wind-hum">
          <div>
            Wind: <span>{Math.round(props.weatherData.wind)}</span> km/h
          </div>
          <div>
            Humidity: <span>{props.weatherData.humidity}</span> %
          </div>
        </Col>
      </Row>
    </div>
  );
}
