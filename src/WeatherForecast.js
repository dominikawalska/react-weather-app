import React from "react";
import "./WeatherForecast.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainIcon from "./MainIcon";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <Row>
        <Col>
          <div className="forecast-day">Tue</div>
          <div>
            <MainIcon icon={"01d"} size={36} />
          </div>
          <div class="forecast-temperatures">
            <span class="forecast-temperature-max">19°</span>
            <span class="forecast-temperature-min">10°</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
