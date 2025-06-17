import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

export default function AdvantagesBlock() {
  return (
    <div>
      {" "}
      <h2 className="mb-4 text-center">Наши преимущества</h2>
      <Row className="mb-4 mt-5 d-flex justify-content-center">
        <Col md={4} className="mb-5">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Опыт и надёжность</Card.Title>
              <Card.Text>
                Более 10 лет успешной работы с автомобильными аукционами и
                клиентами по всей России.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-5">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Прозрачные цены</Card.Title>
              <Card.Text>
                Фиксированная комиссия без скрытых платежей и прозрачное
                ценообразование.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-5">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Персональный менеджер</Card.Title>
              <Card.Text>
                Индивидуальное сопровождение от выбора авто до его доставки в
                ваш город.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3 d-flex justify-content-center">
          <Image
            src="https://placehold.co/600x400?text=Салон+1"
            alt="Фото салона 1"
            fluid
            rounded
            className="shadow-sm"
          />
        </Col>
        <Col md={6} className="mb-3 d-flex justify-content-center">
          <Image
            src="https://placehold.co/600x400?text=Салон+2"
            alt="Фото салона 2"
            fluid
            rounded
            className="shadow-sm"
          />
        </Col>
      </Row>
      <p className="text-center mb-5 px-3 px-md-5">
        Наш современный салон оборудован всем необходимым для комфортного выбора
        и оформления автомобиля. Здесь вы можете лично ознакомиться с
        предложениями, получить консультацию специалистов и оформить все
        документы.
      </p>
    </div>
  );
}
