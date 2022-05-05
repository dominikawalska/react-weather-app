import React from "react";
import "./Search.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function Search() {
  return (
    <Form>
      <Row>
        <Col sm={6}>
          <input
            type="search"
            placeholder="Type in city"
            className="form-control shadow-sm input"
            autofocus="on"
            id="city-input"
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
  );
}
