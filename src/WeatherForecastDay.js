import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainIcon from "./MainIcon";

export default function WeatherForecastDay(props) {
  function max() {
    let maxTemperature = Math.round(props.forecast.temp.max);
    return maxTemperature;
  }

  function min() {
    let minTemperature = Math.round(props.forecast.temp.min);
    return minTemperature;
  }

  function day() {
    let date = new Date();
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="weather-forecast">
        <Row>
          <Col>
            <div className="forecast-day">{day()}</div>
            <div>
              <MainIcon icon={props.forecast.weather[0].icon} size={36} />
            </div>
            <div className="forecast-temperatures">
              <span className="forecast-temperature-max">{max()}°</span>
              <span className="forecast-temperature-min">{min()}°</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
