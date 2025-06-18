import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";

export default function DetailInformBlock({ car }) {
  return (
    <Row>
      <Col>
        <Tabs defaultActiveKey="description" className="mb-4">
          <Tab eventKey="description" title="Описание">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h3 className="h5 mb-3">Описание автомобиля</h3>
                <p>{car.description}</p>

                <h4 className="h6 mt-4 mb-3">Комплектация</h4>
                <Row>
                  {car.features.map((feature, index) => (
                    <Col key={index} xs={6} md={4} className="mb-2">
                      <div className="d-flex align-items-center">
                        <span className="text-primary me-2">•</span>
                        <span>{feature.name}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="specs" title="Характеристики">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h3 className="h5 mb-3">Технические характеристики</h3>
                <Row>
                  <Col md={6}>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>Марка</td>
                          <td>{car.title.split(" ")[0]}</td>
                        </tr>
                        <tr>
                          <td>Модель</td>
                          <td>{car.title.split(" ").slice(1).join(" ")}</td>
                        </tr>
                        <tr>
                          <td>Год выпуска</td>
                          <td>{car.year}</td>
                        </tr>
                        <tr>
                          <td>Пробег</td>
                          <td>{car.mileage.toLocaleString("ru-RU")} км</td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                  <Col md={6}>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>Двигатель</td>
                          <td>{car.engine}</td>
                        </tr>
                        <tr>
                          <td>Коробка передач</td>
                          <td>{car.transmission}</td>
                        </tr>
                        <tr>
                          <td>Привод</td>
                          <td>{car.drive}</td>
                        </tr>
                        <tr>
                          <td>Цвет</td>
                          <td>{car.color}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
}
