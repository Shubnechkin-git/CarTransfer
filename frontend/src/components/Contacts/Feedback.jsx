import React from "react";
import { Card, Col } from "react-bootstrap";

export default function Feedback({
  mainColor = "rgba(44, 50, 74, 0.8)",
  isModal = false,
}) {
  const content = (
    <Card
      className={`h-100 border-0 ${!isModal && "shadow-sm"}`}
      style={{ backgroundColor: "white" }}
    >
      <Card.Body className="p-4">
        {!isModal && (
          <h2 className="h4 mb-4" style={{ color: mainColor }}>
            Обратная связь
          </h2>
        )}
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Ваше имя
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Иван Иванов"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Телефон
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="+7 900 000-00-00"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@mail.ru"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Сообщение
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Ваш вопрос или комментарий"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn w-100 py-2"
            style={{
              backgroundColor: mainColor,
              color: "white",
              border: "none",
            }}
          >
            Отправить сообщение
          </button>
        </form>
      </Card.Body>
    </Card>
  );

  return isModal ? content : <Col md={6}>{content}</Col>;
}
