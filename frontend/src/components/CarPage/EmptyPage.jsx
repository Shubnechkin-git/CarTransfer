import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCarCrash } from "react-icons/fa"; // Иконка машины в аварии (можно другую)

export default function EmptyPage() {
  return (
    <div
      style={{
        minHeight: "100vh", // минимальная высота на весь экран
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container className="text-center py-5">
        <FaCarCrash size={200} color="#dc3545" className="mb-4" />
        <h2 className="mb-3">Автомобиль не найден</h2>
        <Link to="/catalog" className="btn btn-primary">
          Вернуться в каталог
        </Link>
      </Container>
    </div>
  );
}
