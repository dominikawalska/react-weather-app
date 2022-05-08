import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <Container>
      <div className="weather-app">
        <div className="weather-frame">
          <Weather city="London" />
          <div>
            <a
              href="https://github.com/dominikawalska/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced code
            </a>{" "}
            by{" "}
            <a
              href="https://github.com/dominikawalska"
              target="_blank"
              rel="noreferrer"
            >
              Dominika Walska
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
