import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <Row>
          {forecastData.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <Col key={index} className="next-days">
                  <WeatherForecastDay forecast={dailyForecast} />
                </Col>
              );
            } else {
              return null;
            }
          })}
        </Row>
      </div>
    );
  } else {
    let apiKey = "38238442bc43441b21b268b1d3063e1b";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
