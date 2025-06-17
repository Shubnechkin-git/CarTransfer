import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Header({mainColor}) {
  return (
    <Row className="mb-5">
      <Col className="text-center">
        <h1 className="display-5 fw-bold mb-3" style={{ color: mainColor }}>
          Наши контакты
        </h1>
        <p className="lead">Свяжитесь с нами удобным для вас способом</p>
      </Col>
    </Row>
  );
}
