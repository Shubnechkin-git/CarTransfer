import { Button, Container } from "react-bootstrap";
import {
  FaCar,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";

export default function Footer() {
  const darkColor = "rgba(44, 50, 74, 1)";
  const { setIsShowModal } = useModal();

  return (
    <footer
      style={{
        backgroundColor: darkColor,
        color: "white",
        padding: "3rem 0 1.5rem",
      }}
    >
      <Container>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3
              className="d-flex align-items-center mb-3"
              style={{ color: "white" }}
            >
              <FaCar className="me-2" />
              AutoImport
            </h3>
            <p>
              Профессиональный импорт автомобилей из Японии, Кореи и Европы с
              2010 года.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white">
                <FaTelegram size={24} />
              </a>
              <a href="#" className="text-white">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">Навигация</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Главная
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  О компании
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/catalog" className="text-white text-decoration-none">
                  Каталог авто
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contacts"
                  className="text-white text-decoration-none"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">Контакты</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <FaPhone className="me-2" />
                <span>+7 900 000-00-00</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaEnvelope className="me-2" />
                <span>info@autoimport.ru</span>
              </li>
              <li className="mb-2">
                <small>г. Москва, ул. Автоимпортная, д. 1</small>
              </li>
              <li className="mt-4">
                <Button
                  variant="outline-light"
                  size="sm"
                  className="d-flex align-items-center"
                  onClick={() => setIsShowModal(true)}
                >
                  <FaPhone className="me-2" />
                  Заказать звонок
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <div className="text-center pt-2">
          <small>
            © {new Date().getFullYear()} AutoImport. Все права защищены.
          </small>
        </div>
      </Container>
    </footer>
  );
}
