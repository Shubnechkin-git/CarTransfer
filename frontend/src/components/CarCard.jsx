import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  const placeholder = "https://placehold.co/300x200?text=Нет+изображения";

  return (
    <Card className="mb-4 flex-fill">
      <Card.Img
        variant="top"
        src={car.image}
        alt={car.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholder;
        }}
      />
      <Card.Body>
        <Card.Title>{car.title}</Card.Title>
        <Card.Text>
          Страна: {car.country} <br />
          Год: {car.year} <br />
          Цена: {car.price}
        </Card.Text>
        <Button as={Link} to={`/catalog/${car.id}`} variant="primary">
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  );
}
