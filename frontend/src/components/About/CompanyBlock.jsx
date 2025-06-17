import { Col, Row } from "react-bootstrap";

export default function CompanyBlock() {
  return (
    <div>
      <h1 className="mb-4 text-center">О компании AutoImport</h1>
      <Row className="mb-5">
        <Col md={6}>
          <p>
            AutoImport — это надёжная информационная система для покупки
            автомобилей из-за рубежа. Мы специализируемся на импорте автомобилей
            из Европы, США, Кореи и Японии уже более 10 лет.
          </p>
          <p>
            Наша миссия — сделать процесс покупки автомобиля простым, прозрачным
            и выгодным для каждого клиента. Мы сопровождаем вас на всех этапах —
            от выбора автомобиля до доставки и оформления документов.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://placehold.co/600x400?text=О+нас"
            alt="О компании"
            className="img-fluid rounded shadow-sm"
          />
        </Col>
      </Row>
    </div>
  );
}
