import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function Map() {
  return (
    <Row className="mb-5">
      <Col>
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p&amp;source=constructor"
                frameBorder="0"
                title="Карта расположения офиса"
                style={{
                  borderBottomLeftRadius: "0.375rem",
                  borderBottomRightRadius: "0.375rem",
                }}
              ></iframe>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
