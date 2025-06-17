import { Card, Col, Row } from "react-bootstrap";
import {
  FaCar,
  FaFileContract,
  FaMapMarkerAlt,
  FaShip,
  FaWpforms,
} from "react-icons/fa";

export default function InfoBlock() {
  return (
    <div className="my-5">
      <h2 className="text-center mb-4">Как купить авто в Японии?</h2>
      <p className="text-center mb-5">
        Работая с нами, процесс покупки — это 5 простых шагов
      </p>

      <Row>
        <Col md={4} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <FaWpforms size={40} className="mb-3" />
              <Card.Title>1. Заявка</Card.Title>
              <Card.Text>
                Вы оставляете заявку на сайте или связываетесь с нами.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <FaFileContract size={40} className="mb-3" />
              <Card.Title>2. Оформление</Card.Title>
              <Card.Text>
                Заключаем договор и Вы вносите гарантийный депозит.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <FaCar size={40} className="mb-3" />
              <Card.Title>3. Подбор и покупка</Card.Title>
              <Card.Text>
                Мы подбираем авто, выкупаем его на аукционе по вашему согласию.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <FaShip size={40} className="mb-3" />
              <Card.Title>4. Доставка и оформление</Card.Title>
              <Card.Text>
                Автомобиль доставляется во Владивосток и проходит таможенное
                оформление.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="text-center h-100">
            <Card.Body>
              <FaMapMarkerAlt size={40} className="mb-3" />
              <Card.Title>5. Доставка до вашего города</Card.Title>
              <Card.Text>
                Доставим авто в любой регион или вы можете забрать его сами.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
