import { useState } from "react";
import { Alert, Card, Col, Spinner } from "react-bootstrap";
import { useApi } from "../../context/ApiContext";

export default function Feedback({
  mainColor = "rgba(44, 50, 74, 0.8)",
  isModal = false,
}) {
  const { createFeedback } = useApi();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const result = await createFeedback(form);
      if (result.success) {
        setSuccessMessage(result.message);
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setErrorMessage(result.message || "Что-то пошло не так");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Ошибка отправки");
    } finally {
      setSubmitting(false);
    }
  };

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

        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Ваше имя
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              required
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
              value={form.phone}
              onChange={handleChange}
              placeholder="+7 900 000-00-00"
              required
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
              value={form.email}
              onChange={handleChange}
              placeholder="example@mail.ru"
              required
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
              value={form.message}
              onChange={handleChange}
              placeholder="Ваш вопрос или комментарий"
              required
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Отправка...
              </>
            ) : (
              "Отправить сообщение"
            )}
          </button>
        </form>
      </Card.Body>
    </Card>
  );

  return isModal ? content : <Col md={6}>{content}</Col>;
}
