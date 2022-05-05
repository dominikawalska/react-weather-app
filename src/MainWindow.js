import React from "react";
import "./MainWindow.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MainWindow() {
  return (
    <div className="main-window">
      <Row>
        <Col>
          <h1 id="main-city">Warsaw</h1>
          <h3 id="date">Sunday, 21:45</h3>
          <h4 id="description">Clear</h4>
        </Col>

        <Col className="main-weather">
          <img src="" className="main-weather-icon" id="icon" alt=""></img>
          <span className="main-weather-temperature">15</span>
          <span className="units">°C | °F </span>
        </Col>

        <Col className="wind-hum">
          <div>
            Wind: <span className="wind">0</span> km/h
          </div>
          <div>
            Humidity: <span className="humidity">20</span> %
          </div>
          <div className="humidity"></div>
        </Col>
      </Row>
    </div>
  );
}
