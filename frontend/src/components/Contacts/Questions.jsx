import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";

export default function Questions({ mainColor }) {
  return (
    <Col md={6}>
      <Card
        className="border-0 shadow-sm h-100"
        style={{ backgroundColor: "white" }}
      >
        <Card.Body className="p-4">
          <div className="d-flex align-items-center mb-3">
            <FaQuestionCircle
              size={24}
              className="me-3"
              style={{ color: mainColor }}
            />
            <h2 className="h4 mb-0" style={{ color: mainColor }}>
              Частые вопросы
            </h2>
          </div>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item border-0">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  Нужна ли предварительная запись?
                </button>
              </h3>
              <div
                id="faq1"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Да, рекомендуем записаться заранее, чтобы мы могли
                  подготовиться к вашему визиту.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Есть ли тест-драйв автомобилей?
                </button>
              </h3>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Да, мы предоставляем возможность тест-драйва всех автомобилей
                  из нашего каталога.
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
