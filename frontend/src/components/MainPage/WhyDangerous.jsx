import { Col, Container, Image, Row } from "react-bootstrap";
import {
  FaCarCrash,
  FaFileAlt,
  FaGasPump,
  FaTachometerAlt,
} from "react-icons/fa";

const WhyDangerous = () => {
  return (
    <Container fluid style={styles.section}>
      <div className="container">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h2 style={styles.title}>ПОЧЕМУ ОПАСНО ПОКУПАТЬ МАШИНУ С РУК ?</h2>
            <p style={styles.subtitle}>
              Многие задаются вопросом{" "}
              <i>
                "Почему нельзя просто купить у частного лица автомобиль
                привезенный из той же Японии ?"
              </i>
              . Конечно можно, но в таком случае, Вы не застрахованы от таких
              вещей как:
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center">
          {/* Левая часть */}
          <Col md={4} className="mb-4 mb-md-0">
            <div style={styles.item}>
              <FaFileAlt size={40} style={styles.icon} />
              <div>
                <h3 style={styles.itemTitle}>ПОДДЕЛКА ДОКУМЕНТОВ</h3>
                <p style={styles.itemText}>
                  Ваш автомобиль может оказаться угнанным или арестованным
                  транспортным средством
                </p>
              </div>
            </div>

            <div style={styles.item}>
              <FaTachometerAlt size={40} style={styles.icon} />
              <div>
                <h3 style={styles.itemTitle}>СМОТАННЫЙ ПРОБЕГ</h3>
                <p style={styles.itemText}>
                  Даже самые "честные" продавцы нередко прибегают к сматыванию
                  пробега чтобы дороже продать автомобиль
                </p>
              </div>
            </div>
          </Col>

          {/* Центр: машина */}
          <Col md={4} className="text-center position-relative">
            <div style={styles.carWrapper}>
              <Image
                // src="../../../assets/car_dangerous.jpg"
                src="https://jpstar.ru/img/car-half.webp"
                alt="Разбитая машина"
                fluid
                style={styles.car}
              />
            </div>
          </Col>

          {/* Правая часть */}
          <Col md={4} className="mt-4 mt-md-0">
            <div style={styles.item}>
              <FaCarCrash size={40} style={styles.icon} />
              <div>
                <h3 style={styles.itemTitle}>СКРЫТЫЕ ДЕФЕКТЫ</h3>
                <p style={styles.itemText}>
                  Если авто побывало в аварии или имеет какие-то серьезные
                  проблемы, от Вас это могут умело скрыть
                </p>
              </div>
            </div>

            <div style={styles.item}>
              <FaGasPump size={40} style={styles.icon} />
              <div>
                <h3 style={styles.itemTitle}>ЭКСПЛУАТАЦИЯ В РФ</h3>
                <p style={styles.itemText}>
                  Автомобиль, который заправлялся плохим топливом, и ездил по
                  плохим дорогам гораздо менее надежен
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

const styles = {
  section: {
    padding: "40px 20px",
    fontFamily: "'Roboto Condensed', sans-serif",
    color: "#4a4a4a",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontWeight: 700,
    fontSize: "clamp(20px, 2vw, 26px)",
    marginBottom: 10,
    color: "#555",
  },
  subtitle: {
    fontSize: 14,
    fontStyle: "italic",
    maxWidth: 720,
    margin: "0 auto 40px",
    color: "#888",
    lineHeight: 1.4,
  },
  item: {
    display: "flex",
    gap: 15,
    alignItems: "flex-start",
    marginBottom: 30,
  },
  icon: {
    color: "#b21521",
    opacity: 0.7,
    flexShrink: 0,
  },
  itemTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: "#b21521",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  itemText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 1.3,
  },
  carWrapper: {
    position: "relative",
    padding: "20px 0",
  },
  car: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: 4,
  },
};

export default WhyDangerous;
