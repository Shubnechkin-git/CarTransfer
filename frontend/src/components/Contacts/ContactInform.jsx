import { Card, Col, ListGroup } from "react-bootstrap";
import {
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactInform({ mainColor }) {
  return (
    <Col md={6}>
      <Card
        className="h-100 border-0 shadow-sm"
        style={{ backgroundColor: "white" }}
      >
        <Card.Body className="p-4">
          <h2 className="h4 mb-4" style={{ color: mainColor }}>
            Контактные данные
          </h2>

          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex align-items-center border-0 py-3">
              <div className="me-3" style={{ color: mainColor }}>
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="h6 mb-1">Телефон</h3>
                <a href="tel:+79000000000" className="text-decoration-none">
                  +7 900 000-00-00
                </a>
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex align-items-center border-0 py-3">
              <div className="me-3" style={{ color: mainColor }}>
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="h6 mb-1">Email</h3>
                <a
                  href="mailto:info@autoimport.ru"
                  className="text-decoration-none"
                >
                  info@autoimport.ru
                </a>
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex align-items-center border-0 py-3">
              <div className="me-3" style={{ color: mainColor }}>
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="h6 mb-1">Адрес</h3>
                <p className="mb-0">г. Москва, ул. Автоимпортная, д. 1</p>
                <small className="text-muted">
                  БЦ "Автомобильный", 3 этаж, офис 305
                </small>
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex align-items-center border-0 py-3">
              <div className="me-3" style={{ color: mainColor }}>
                <FaClock size={20} />
              </div>
              <div>
                <h3 className="h6 mb-1">Режим работы</h3>
                <p className="mb-0">
                  Пн-Пт: 9:00 - 19:00
                  <br />
                  Сб-Вс: 10:00 - 17:00
                </p>
              </div>
            </ListGroup.Item>
          </ListGroup>

          <div className="mt-4 pt-2">
            <h3 className="h6 mb-3">Мессенджеры</h3>
            <div className="d-flex gap-3">
              <a
                href="https://t.me/autoimport"
                className="text-decoration-none"
                style={{ color: mainColor }}
              >
                <FaTelegram size={28} />
              </a>
              <a
                href="https://wa.me/79000000000"
                className="text-decoration-none"
                style={{ color: mainColor }}
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: mainColor }}
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
