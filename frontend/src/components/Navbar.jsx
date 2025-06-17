import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaCar, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";

// Навбар
export default function AppNavbar() {
  const darkColor = "rgba(44, 50, 74, 1)";
  const { setIsShowModal } = useModal();
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: darkColor,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: "1.5rem",
          }}
        >
          <FaCar className="me-2" style={{ color: "white" }} />
          AutoImport
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{
            borderColor: "rgba(255,255,255,0.5)",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
            }}
          ></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className="mx-2 px-3 py-2 position-relative nav-link-custom"
              style={{ color: "white" }}
            >
              Главная
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className="mx-2 px-3 py-2 position-relative nav-link-custom"
              style={{ color: "white" }}
            >
              О нас
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/catalog"
              className="mx-2 px-3 py-2 position-relative nav-link-custom"
              style={{ color: "white" }}
            >
              Каталог
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contacts"
              className="mx-2 px-3 py-2 position-relative nav-link-custom"
              style={{ color: "white" }}
            >
              Контакты
            </Nav.Link>

            <Button
              variant="outline-light"
              className="ms-3 d-flex align-items-center"
              style={{
                borderWidth: "2px",
                borderRadius: "50px",
                padding: "8px 20px",
                fontWeight: "600",
              }}
              onClick={() => setIsShowModal(true)}
            >
              <FaPhone className="me-2" />
              Оставить заявку
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
