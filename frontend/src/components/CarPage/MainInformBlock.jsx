import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaCarAlt,
  FaGasPump,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { useModal } from "../../context/ModalContext";
import GalleryBlock from "./GalleryBlock";

export default function MainInformBlock({ car }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  const { setIsShowModal } = useModal();

  return (
    <Row className="g-4 mb-4">
      <GalleryBlock car={car} />

      <Col lg={5}>
        <Card className="border-0 shadow-sm h-100">
          <Card.Body className="p-4 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h1 className="h3 mb-1">{car.title}</h1>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Badge
                      bg="light"
                      text="dark"
                      className="d-flex align-items-center"
                    >
                      <FaStar className="text-warning me-1" />
                      {car.rating}
                    </Badge>
                    {car.isNew && <Badge bg="success">Новое поступление</Badge>}
                  </div>
                </div>
              </div>

              <h2 className="text-primary mb-4">{formatPrice(car.price)}</h2>

              {/* Основные характеристики */}
              <div className="mb-4">
                <h3 className="h5 mb-3">Основные характеристики</h3>
                <Row className="g-2">
                  <Col xs={6}>
                    <div className="d-flex align-items-center text-muted">
                      <FaCalendarAlt className="me-2" />
                      <span>{car.year} год</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-flex align-items-center text-muted">
                      <IoMdSpeedometer className="me-2" />
                      <span>{car.mileage.toLocaleString("ru-RU")} км</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-flex align-items-center text-muted">
                      <FaGasPump className="me-2" />
                      <span>{car.engine}</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-flex align-items-center text-muted">
                      <GiGearStickPattern className="me-2" />
                      <span>{car.transmission}</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-flex align-items-center text-muted">
                      <FaCarAlt className="me-2" />
                      <span>{car.drive} привод</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-flex align-items-center text-muted">
                      <FaMapMarkerAlt className="me-2" />
                      <span>{car.country}</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                className="py-2"
                onClick={() => setIsShowModal(true)}
              >
                Оставить заявку
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
