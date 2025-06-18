import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { FaCarSide, FaGasPump, FaStar } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ResultSearch({ filteredCars = [], countCars = 0 }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  return (
    <div style={{ height: "100vh" }}>
      <Row className="mb-3">
        <Col>
          <h5 className="fw-normal">Найдено {countCars} автомобилей</h5>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredCars.map((car) => (
          <Col key={car.id}>
            <Card className="h-100 border-0 shadow-sm hover-shadow transition-all">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={car.images[0].url}
                  alt={car.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                {car.isNew && (
                  <Badge
                    bg="success"
                    className="position-absolute top-0 start-0 m-2"
                  >
                    Новое поступление
                  </Badge>
                )}
              </div>

              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title className="mb-1">{car.title}</Card.Title>
                  <Badge
                    bg="light"
                    text="dark"
                    className="d-flex align-items-center"
                  >
                    <FaStar className="text-warning me-1" />
                    {car.rating}
                  </Badge>
                </div>

                <Card.Subtitle className="text-muted mb-3">
                  {car.year} год · {car.country}
                </Card.Subtitle>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <Badge
                    bg="light"
                    text="dark"
                    className="d-flex align-items-center"
                  >
                    <IoMdSpeedometer className="me-1" />
                    {car.mileage.toLocaleString("ru-RU")} км
                  </Badge>

                  <Badge
                    bg="light"
                    text="dark"
                    className="d-flex align-items-center"
                  >
                    <FaGasPump className="me-1" />
                    {car.engine}
                  </Badge>

                  <Badge
                    bg="light"
                    text="dark"
                    className="d-flex align-items-center"
                  >
                    <GiGearStickPattern className="me-1" />
                    {car.transmission}
                  </Badge>

                  <Badge
                    bg="light"
                    text="dark"
                    className="d-flex align-items-center"
                  >
                    <FaCarSide className="me-1" />
                    {car.drive} привод
                  </Badge>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <h4 className="mb-0 text-primary fw-bold">
                    {formatPrice(car.price)}
                  </h4>
                  <Button
                    as={Link}
                    to={`/cars/${car.id}`}
                    variant="primary"
                    size="sm"
                  >
                    Подробнее
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
