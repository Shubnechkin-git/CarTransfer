import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaCar } from "react-icons/fa";

export default function HowToGet({ mainColor }) {
  return (
    <Col md={6}>
      <Card
        className="border-0 shadow-sm h-100"
        style={{ backgroundColor: "white" }}
      >
        <Card.Body className="p-4">
          <div className="d-flex align-items-center mb-3">
            <FaCar size={24} className="me-3" style={{ color: mainColor }} />
            <h2 className="h4 mb-0" style={{ color: mainColor }}>
              Как добраться
            </h2>
          </div>
          <ul className="list-unstyled">
            <li className="mb-2">
              🚗 <strong>На автомобиле:</strong> парковка у БЦ бесплатная
            </li>
            <li className="mb-2">
              🚇 <strong>Метро:</strong> ст. "Автомобильная" (5 минут пешком)
            </li>
            <li className="mb-2">
              🚌 <strong>Автобус:</strong> № 123, 456 до остановки "Автоимпорт"
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
}
