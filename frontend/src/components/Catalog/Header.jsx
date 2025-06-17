import { Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <Row className="mb-4">
      <Col>
        <h1
          className="display-5 fw-bold mb-3"
          style={{ color: "rgba(44, 50, 74, 0.8)" }}
        >
          Каталог автомобилей
        </h1>
        <p className="lead text-muted">
          Подберите автомобиль своей мечты из нашего обширного каталога
        </p>
      </Col>
    </Row>
  );
}
